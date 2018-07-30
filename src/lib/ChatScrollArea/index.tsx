import * as React from 'react';
import { ScrollView, View, StyleProp, ViewStyle } from 'react-native';

const styles: { [key: string]: StyleProp<ViewStyle> } = {
  chatHistory: {
    padding: '0 10px',
    // flexDirection: 'column-reverse'
  }
};

export interface ChatScrollAreaProps {
  maxHeight?: string | number;
  minHeight?: string | number;
  children?: JSX.Element | JSX.Element[];
  containerStyles?: StyleProp<ViewStyle>;
  apiRef?: (api: ChatScrollAreaApi) => void;
  loadOldMessagesThreshold: number;
  onLoadOldMessages: () => Promise<void>;
}

export interface ChatScrollAreaApi {
  scrollToBottom: (animated?: boolean) => void;
  scrollTo: (top: number, animated?: boolean) => void;
  scrollTop: () => number;
  scrollHeight: () => number;
  clientHeight: () => number;
  scrolledToBottom: () => boolean;
  scrolledToLoadThreshold: () => boolean; // Check if we are scrolled to threshold where we need to load messages
}

export class ChatScrollArea extends React.Component<ChatScrollAreaProps> {
  private scrollContainer: ScrollView;
  private clientHeight: number;
  private scrollHeight: number;
  private scrollTop: number;

  constructor(props: ChatScrollAreaProps) {
    super(props);
    this.clientHeight = 0;
    this.scrollHeight = 0;
    this.scrollTop = 0;
  }

  public render() {
    return (
      <ScrollView
        onLayout={event => {
          this.clientHeight = event.nativeEvent.layout.height;
        }}
        contentContainerStyle={{ padding: 10 }}
        ref={scrollContainer => {
          this.scrollContainer = scrollContainer;
          this.props.apiRef && this.props.apiRef({
            scrollToBottom: (animated = true) => scrollContainer &&
              scrollContainer.scrollToEnd({
                animated
              }),
            scrollTo: (top, animated = true) => scrollContainer && scrollContainer.scrollTo({
              y: top,
              animated
            }),
            scrolledToBottom: () => this.clientHeight + this.scrollTop >= this.scrollHeight,
            scrolledToLoadThreshold: () => this.scrollContainer && this.scrollTop <= this.props.loadOldMessagesThreshold,
            scrollTop: () => this.scrollContainer && this.scrollTop,
            scrollHeight: () => this.scrollContainer && this.scrollHeight,
            clientHeight: () => this.scrollContainer && this.clientHeight,
          });
        }}
        style={[
          styles.chatHistory,
          (this.props.maxHeight !== undefined ? { maxHeight: this.props.maxHeight } : {}),
          (this.props.minHeight !== undefined ? { minHeight: this.props.minHeight } : {}),
          this.props.containerStyles
        ]}
        onScroll={e => {
          if (this.scrollContainer && e.nativeEvent.contentOffset.y <= this.props.loadOldMessagesThreshold) {
            this.props.onLoadOldMessages();
          }
          this.scrollTop = e.nativeEvent.contentOffset.y;
        }}
        scrollEventThrottle={16}
      >
        <View
          onLayout={event => {
            this.scrollHeight = event.nativeEvent.layout.height + 20;
          }}
        >
          {this.props.children}
        </View>
      </ScrollView>
    );
  }
}

export default ChatScrollArea;
