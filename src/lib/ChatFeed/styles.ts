import { ViewStyle, StyleProp } from 'react-native';

export interface ChatFeedStyles {
  chatPanel?: StyleProp<ViewStyle>;
  showRecipientAvatarChatMessagesStyle?: StyleProp<ViewStyle>;
  showRecipientLastSeenMessageChatMessagesStyle?: StyleProp<ViewStyle>;
  showIsTypingChatMessagesStyle?: StyleProp<ViewStyle>;
  chatBubbleWrapper?: StyleProp<ViewStyle>;
  chatMessages?: StyleProp<ViewStyle>;
}

const styles: ChatFeedStyles = {
  chatPanel: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative'
  },
  showRecipientAvatarChatMessagesStyle: {
    paddingLeft: 50
  },
  showIsTypingChatMessagesStyle: {
    paddingBottom: 24,
    position: 'relative'
  },
  showRecipientLastSeenMessageChatMessagesStyle: {
    paddingRight: 30,
  },
  chatBubbleWrapper: {
    marginTop: 10,
    marginBottom: 10,
    overflow: 'visible',
  },
  chatMessages: {
    paddingBottom: 10,
    paddingTop: 10,
  }
};

export default styles;
