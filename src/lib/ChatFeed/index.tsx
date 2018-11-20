// Copyright 2017 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.

import * as React from 'react';
import BubbleGroup from '../BubbleGroup';
import DefaultChatBubble, { ChatBubbleProps } from '../ChatBubble';
import Message from '../Message';
import chatStyles from './styles';
import { Author } from '../Author';
import { ChatBubbleStyles } from '../ChatBubble/';
import Avatar, { AvatarProps } from '../Avatar';
import IsTyping from '../IsTyping';
import ChatScrollArea, { ChatScrollAreaProps, ChatScrollAreaApi } from '../ChatScrollArea';
import LastSeenAvatar, { LastSeenAvatarProps } from '../LastSeenAvatar';
import { groupBy } from '../utils/utils';
import DateRow, { DateRowProps } from '../DateRow';
import LoadingMessages, { LoadingMessagesProps } from '../LoadingMessages';
import SystemChatBubble from '../SystemChatBubble';
import { View } from 'react-native';
import { AvatarStyles } from './../Avatar/index';
import { DateRowStyles } from './../DateRow/index';
import { LoadingMessagesStyle } from './../LoadingMessages/index';
import { IsTypingStyles } from './../IsTyping/index';
import { ChatFeedStyles } from './styles';
import { ChatScrollAreaStyles } from './../ChatScrollArea/index';

// Model for ChatFeed props.

export interface ChatStyles {
  bubbleStyles?: ChatBubbleStyles;
  chatScrollArea?: ChatScrollAreaStyles;
  avatarStyles?: AvatarStyles;
  dateRowStyles?: DateRowStyles;
  loadingMessagesStyle?: LoadingMessagesStyle;
  isTypingStyles?: IsTypingStyles;
  chatFeedStyles?: ChatFeedStyles;
}

export interface ChatFeedProps {
  // Structural props
  className?: string;

  // Functional props
  messages: Message[];
  authors: Author[];
  yourAuthorId: number;
  hasOldMessages?: boolean;
  loadOldMessagesThreshold?: number;

  // Visual props
  bubblesCentered?: boolean;
  styles?: ChatStyles;
  maxHeight?: string | number;
  minHeight?: string | number;

  // Switches
  showDateRow?: boolean;
  showRecipientAvatar?: boolean;
  showRecipientLastSeenMessage?: boolean;
  showIsTyping?: boolean;
  showLoadingMessages?: boolean;

  // Custom components
  customLoadingMessages?: (props: LoadingMessagesProps) => JSX.Element;
  customChatBubble?: (props: ChatBubbleProps) => JSX.Element;
  customSystemChatBubble?: (props: ChatBubbleProps) => JSX.Element;
  customAvatar?: (props: AvatarProps) => JSX.Element;
  customScrollArea?: (props: ChatScrollAreaProps) => JSX.Element;
  customIsTyping?: (props: ChatScrollAreaProps) => JSX.Element;
  customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
  customDateRow?: (props: DateRowProps) => JSX.Element;

  // Callbacks
  onLoadOldMessages?: () => Promise<void>;

  ref?: (api: ChatFeedApi) => void;
}

export interface ChatFeedState {
  isLoadingMessages: boolean;
}

export interface ChatFeedApi {
  onMessageSend: () => void;
  scrollApi: ChatScrollAreaApi;
}

const DefaultChatBubbleFunc = props => <DefaultChatBubble {...props} />;
const DefaultScrollAreaFunc = props => <ChatScrollArea {...props} />;

export interface ChatFeedSnapshot {
  wasScrolledToBottom: boolean;
  scrollHeight: number;
  clientHeight: number;
}

// React component to render a complete chat feed
export default class ChatFeed extends React.PureComponent<ChatFeedProps, ChatFeedState> implements ChatFeedApi {
  public static defaultProps: ChatFeedProps = {
    messages: [],
    authors: [],
    customChatBubble: DefaultChatBubbleFunc,
    customAvatar: Avatar,
    customScrollArea: DefaultScrollAreaFunc,
    customLastSeenAvatar: LastSeenAvatar,
    customDateRow: DateRow,
    customLoadingMessages: LoadingMessages,
    yourAuthorId: 0,
    loadOldMessagesThreshold: 50,
    customSystemChatBubble: SystemChatBubble
  };

  public scrollApi: ChatScrollAreaApi;

  constructor(props: ChatFeedProps) {
    super(props);
    this.onLoadOldMessages = this.onLoadOldMessages.bind(this);
    this.state = {
      isLoadingMessages: false
    };
  }

  public onMessageSend() {
    this.scrollApi && this.scrollApi.scrollToBottom();
  }

  componentDidMount() {
    this.scrollApi && this.scrollApi.scrollToBottom(false);
  }

  getSnapshotBeforeUpdate(prevProps: ChatFeedProps, prevState: ChatFeedState) {
    const wasScrolledToBottom = this.scrollApi && this.scrollApi.scrolledToBottom();
    const scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
    const clientHeight = this.scrollApi && this.scrollApi.clientHeight();

    return {
      wasScrolledToBottom,
      scrollHeight,
      clientHeight
    };
  }

  componentDidUpdate(prevProps: ChatFeedProps, prevState: ChatFeedState, snapshot: ChatFeedSnapshot) {
    if (this.props.messages.length !== prevProps.messages.length && snapshot && snapshot.wasScrolledToBottom) {
      this.scrollApi.scrollToBottom(false);
    } else if (this.props.messages.length !== prevProps.messages.length && snapshot && prevState.isLoadingMessages) {
      const scrollHeight = this.scrollApi && this.scrollApi.scrollHeight();
      this.scrollApi.scrollTo(scrollHeight - snapshot.scrollHeight, false);
    }
  }

  /**
   * Determines what type of message/messages to render.
   */
  renderMessages(messages: Message[]) {
    let { styles } = this.props;
    if (!styles) {
      styles = {};
    }
    const { bubbleStyles, dateRowStyles } = styles;
    const { customChatBubble, showRecipientAvatar } = this.props;

    // First group by days
    const groups = groupBy(messages, item => item.createdOn && item.createdOn.toDateString());
    let messageNodes: JSX.Element[] = [];
    let jsxKey = 0;
    Object.keys(groups).forEach(key => {
      let group = [];
      const messagesGroup = groups[key];
      if (messagesGroup[0] && messagesGroup[0].createdOn && this.props.showDateRow) {
        messageNodes.push(<this.props.customDateRow key={key} date={messagesGroup[0].createdOn} styles={dateRowStyles} />);
      }
      messageNodes = messageNodes.concat(messagesGroup.map((message, index) => {
        group.push(message);
        // Find diff in message type or no more messages
        if (!messagesGroup[index + 1] || messagesGroup[index + 1].authorId !== message.authorId) {
          const messageGroup = group;
          const author = this.props.authors && this.props.authors.filter(a => a.id === message.authorId)[0];
          group = [];
          jsxKey++;
          return (
            <BubbleGroup
              key={jsxKey}
              yourAuthorId={this.props.yourAuthorId}
              messages={messageGroup}
              author={author}
              authors={this.props.authors}
              showRecipientAvatar={showRecipientAvatar}
              customChatBubble={customChatBubble}
              bubbleStyles={bubbleStyles}
              showRecipientLastSeenMessage={this.props.showRecipientLastSeenMessage}
              customAvatar={this.props.customAvatar}
              customLastSeenAvatar={this.props.customLastSeenAvatar}
              customSystemChatBubble={this.props.customSystemChatBubble}
            />
          );
        }
        return null;
      }));
    });
    return messageNodes;
  }

  renderIsTyping() {
    let { styles } = this.props;
    if (!styles) {
      styles = {};
    }
    const { isTypingStyles } = styles;
    const typingAuthors = this.props.authors && this.props.authors.filter(a => a.isTyping && a.id !== this.props.yourAuthorId);
    if (!typingAuthors || typingAuthors.length === 0) {
      return null;
    }
    return <IsTyping typingAuthors={typingAuthors} styles={isTypingStyles} />;
  }

  /**
   * render : renders our chat feed
   */
  render() {
    let { styles } = this.props;
    if (!styles) {
      styles = {};
    }
    const {
      loadingMessagesStyle,
      chatFeedStyles,
      chatScrollArea
    } = styles;
    return (
      <View
        style={[
          chatStyles.chatPanel
        ]}
      >
        <this.props.customScrollArea
          minHeight={this.props.minHeight}
          maxHeight={this.props.maxHeight}
          apiRef={e => this.scrollApi = e}
          loadOldMessagesThreshold={this.props.loadOldMessagesThreshold}
          onLoadOldMessages={this.onLoadOldMessages}
          styles={chatScrollArea}
        >
          <View
            style={[
              chatStyles.chatMessages,
              (this.props.showRecipientAvatar && chatStyles.showRecipientAvatarChatMessagesStyle),
              (this.props.showRecipientAvatar && chatFeedStyles && chatFeedStyles.showRecipientAvatarChatMessagesStyle),
              (this.props.showIsTyping && chatStyles.showIsTypingChatMessagesStyle),
              (this.props.showIsTyping && chatFeedStyles && chatFeedStyles.showIsTypingChatMessagesStyle),
              (this.props.showRecipientLastSeenMessage && chatStyles.showRecipientLastSeenMessageChatMessagesStyle),
              (this.props.showRecipientLastSeenMessage && chatFeedStyles && chatFeedStyles.showRecipientLastSeenMessageChatMessagesStyle),
            ]}
          >
            <this.props.customLoadingMessages
              isVisible={this.props.showLoadingMessages || this.state.isLoadingMessages}
              styles={loadingMessagesStyle}
            />
            {this.renderMessages(this.props.messages)}
            {this.props.showIsTyping && this.renderIsTyping()}
          </View>
        </this.props.customScrollArea>
      </View>
    );
  }

  private onLoadOldMessages() {
    if (!this.state.isLoadingMessages && this.props.hasOldMessages) {
      return new Promise<void>(resolve => {
        this.setState({
          isLoadingMessages: true,
        }, () => resolve());
      }).then(async () => {
        if (this.props.onLoadOldMessages) {
          await this.props.onLoadOldMessages();
        }
      }).then(async () => {
        await new Promise<void>(resolve => {
          this.setState({
            isLoadingMessages: false,
          }, () => {
            if (this.scrollApi.scrolledToLoadThreshold()) {
              this.scrollApi.scrollTo(this.props.loadOldMessagesThreshold + 1, false);
            }
            resolve();
          });
        });
      });
    }
  }
}
