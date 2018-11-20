import * as React from 'react';
import chatBubbleStyles from './styles';
import Message from '../Message';
import { Author } from '../Author';
import { LastSeenAvatarProps, LastSeenAvatarStyles } from './../LastSeenAvatar';
import { View, StyleProp, ViewStyle, Text } from 'react-native';
import Hoverable from './../Hoverable/index';
import { ChatBubbleStyles } from './styles';

export { ChatBubbleStyles };

export interface ChatBubbleProps {
  message: Message;
  author?: Author;
  styles?: ChatBubbleStyles;
  lastSeenAvatarStyles?: LastSeenAvatarStyles;

  bubblesCentered?: boolean;
  yourAuthorId: number;
  isFirstInGroup?: boolean;
  isLastInGroup?: boolean;
  isCenterInGroup?: boolean;
  lastSeenByAuthors?: Author[];
  showRecipientLastSeenMessage?: boolean;
  customLastSeenAvatar?: (props: LastSeenAvatarProps) => JSX.Element;
}

export interface ChatBubbleState {
  mouseOverLastSeenContainer: boolean;
}

export default class ChatBubble extends React.PureComponent<ChatBubbleProps, ChatBubbleState> {
  constructor(props: ChatBubbleProps) {
    super(props);
    this.state = {
      mouseOverLastSeenContainer: false
    };
  }

  public render() {
    if (!this.props.message) {
      return null;
    }

    let {
      lastSeenAvatarStyles,
      yourAuthorId,
      styles
    } = this.props;

    if (!styles) {
      styles = {};
    }
    const {
      userChatBubble,
      chatBubble,
      text,
      userText,
      recipientText,
      recipientChatBubble,
      firstChatBubbleInGroup,
      userFirstChatBubbleInGroup,
      recipientFirstChatBubbleInGroup,
      centerChatBubbleInGroup,
      userCenterChatBubbleInGroup,
      recipientCenterChatBubbleInGroup,
      lastChatBubbleInGroup,
      userLastChatBubbleInGroup,
      recipientLastChatBubbleInGroup,
      userChatBubbleOrientationNormal,
      recipientChatBubbleOrientationNormal,
      chatBubbleWrapper,
      createdOn,
      userCreatedOn,
      recipientCreatedOn,
      isSendIconColor,
      loadingSpinnerColor,
      lastSeenByContainer
    } = styles;
    const youAreAuthor = this.props.message.authorId === yourAuthorId;

    // message.id 0 is reserved for blue
    const finalChatBubbleStyles: StyleProp<ViewStyle>[] = [
      chatBubbleStyles.chatBubble,
      chatBubble,
      (youAreAuthor ? chatBubbleStyles.userChatBubble : chatBubbleStyles.recipientChatBubble),
      (youAreAuthor ? userChatBubble : recipientChatBubble),
      (youAreAuthor ? chatBubbleStyles.userChatBubbleOrientationNormal : chatBubbleStyles.recipientChatBubbleOrientationNormal),
      (youAreAuthor ? userChatBubbleOrientationNormal : recipientChatBubbleOrientationNormal),
      this.props.isFirstInGroup && chatBubbleStyles.firstChatBubbleInGroup,
      (this.props.isFirstInGroup && (youAreAuthor ? chatBubbleStyles.userFirstChatBubbleInGroup : chatBubbleStyles.recipientFirstChatBubbleInGroup)),
      (this.props.isCenterInGroup && chatBubbleStyles.centerChatBubbleInGroup),
      (this.props.isCenterInGroup && (youAreAuthor ? chatBubbleStyles.userCenterChatBubbleInGroup : chatBubbleStyles.recipientCenterChatBubbleInGroup)),
      (this.props.isLastInGroup && chatBubbleStyles.lastChatBubbleInGroup),
      (this.props.isLastInGroup && (youAreAuthor ? chatBubbleStyles.userLastChatBubbleInGroup : chatBubbleStyles.recipientLastChatBubbleInGroup)),
      this.props.isFirstInGroup && firstChatBubbleInGroup,
      (this.props.isFirstInGroup && (youAreAuthor ? userFirstChatBubbleInGroup : recipientFirstChatBubbleInGroup)),
      (this.props.isCenterInGroup && centerChatBubbleInGroup),
      (this.props.isCenterInGroup && (youAreAuthor ? userCenterChatBubbleInGroup : recipientCenterChatBubbleInGroup)),
      (this.props.isLastInGroup && lastChatBubbleInGroup),
      (this.props.isLastInGroup && (youAreAuthor ? userLastChatBubbleInGroup : recipientLastChatBubbleInGroup)),
    ].filter(i => i);

    return (
      <View
        style={[
          chatBubbleStyles.chatBubbleWrapper,
          chatBubbleWrapper
        ]}
      >
        <View style={[...finalChatBubbleStyles]}>
          <Text
            style={[chatBubbleStyles.text, text, (youAreAuthor ? userText : recipientText)]}
          >{this.props.message.message}
          </Text>
          {this.props.message.createdOn && (
            <Text
              style={[
                chatBubbleStyles.createdOn,
                createdOn,
                (youAreAuthor ? chatBubbleStyles.userCreatedOn : chatBubbleStyles.recipientCreatedOn),
                (youAreAuthor ? userCreatedOn : recipientCreatedOn)
              ]}
            /*title={this.props.message.createdOn.toLocaleString()}*/
            >{this.props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </Text>
          )}
          {this.props.message.isSend !== undefined && youAreAuthor && (
            <Text
              style={[
                chatBubbleStyles.isSend,
              ]}
            /*title={this.props.message.isSend ? 'Send' : 'Sending'}*/
            >
              {this.props.message.isSend ?
                <svg
                  width="10px"
                  height="10px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 10"
                  preserveAspectRatio="xMidYMid"
                  style={{ background: 'none' }}
                >
                  <path
                    fill={isSendIconColor ? isSendIconColor : chatBubbleStyles.isSendIconColor}
                    {/* tslint:disable-next-line:max-line-length*/...{}}
                    d="M9,1.7L8.6,1.4C8.5,1.3,8.3,1.3,8.2,1.4L3.9,7C3.8,7.1,3.6,7.1,3.5,7c0,0,0,0,0,0L1.7,5.3c-0.1-0.1-0.3-0.1-0.4,0L1,5.6 C0.9,5.7,0.9,5.9,1,6l2.6,2.6c0.1,0.1,0.3,0.1,0.4,0L9,2.1C9.1,2,9.1,1.8,9,1.7z"
                  />
                </svg>
                :
                <svg
                  width="10px"
                  height="10px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                  className="lds-eclipse"
                  style={{ background: 'none' }}
                >
                  <path
                    stroke="none"
                    d="M10 50A40 40 0 0 0 90 50A40 45 0 0 1 10 50"
                    fill={loadingSpinnerColor ? loadingSpinnerColor : chatBubbleStyles.loadingSpinnerColor}
                    transform="rotate(78 50 52.5)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      calcMode="linear"
                      values="0 50 52.5;360 50 52.5"
                      keyTimes="0;1"
                      dur="1s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              }
            </Text>
          )}
        </View>
        {this.props.showRecipientLastSeenMessage && this.props.lastSeenByAuthors &&
          this.props.lastSeenByAuthors.length > 0 && this.props.customLastSeenAvatar &&
          (
            <Hoverable
              onHoverIn={() => this.setState({ mouseOverLastSeenContainer: true })}
              onHoverOut={() => this.setState({ mouseOverLastSeenContainer: false })}
            >
              <View
                style={[chatBubbleStyles.lastSeenByContainer, lastSeenByContainer]}
                onTouchStart={() => this.setState({ mouseOverLastSeenContainer: true })}
                onTouchEnd={() => setTimeout(() => this.setState({ mouseOverLastSeenContainer: false }), 2000)}
              >
                {this.props.lastSeenByAuthors.map((a, i) => (
                  <this.props.customLastSeenAvatar
                    key={i}
                    author={a}
                    styles={{
                      ...lastSeenAvatarStyles,
                      container: {
                        ...(lastSeenAvatarStyles ? lastSeenAvatarStyles.container as Object : {}),
                        ...(i > 0 && !this.state.mouseOverLastSeenContainer ? { marginTop: -12 } : { marginTop: -4 }),
                      },
                    }}
                  />
                ))}
              </View>
            </Hoverable>
          )}
      </View>
    );
  }
}
