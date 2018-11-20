import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface ChatBubbleStyles {
  chatBubbleWrapper?: StyleProp<ViewStyle>;
  chatBubble?: StyleProp<ViewStyle>;
  systemChatBubbleContainer?: StyleProp<ViewStyle>;
  systemChatBubbleText?: StyleProp<ViewStyle>;
  userChatBubbleOrientationNormal?: StyleProp<ViewStyle>;
  recipientChatBubbleOrientationNormal?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
  userText?: StyleProp<TextStyle>;
  recipientText?: StyleProp<TextStyle>;
  userChatBubble?: StyleProp<ViewStyle>;
  recipientChatBubble?: StyleProp<ViewStyle>;
  firstChatBubbleInGroup?: StyleProp<ViewStyle>;
  userFirstChatBubbleInGroup?: StyleProp<ViewStyle>;
  recipientFirstChatBubbleInGroup?: StyleProp<ViewStyle>;
  lastChatBubbleInGroup?: StyleProp<ViewStyle>;
  userLastChatBubbleInGroup?: StyleProp<ViewStyle>;
  recipientLastChatBubbleInGroup?: StyleProp<ViewStyle>;
  centerChatBubbleInGroup?: StyleProp<ViewStyle>;
  userCenterChatBubbleInGroup?: StyleProp<ViewStyle>;
  recipientCenterChatBubbleInGroup?: StyleProp<ViewStyle>;
  createdOn?: StyleProp<TextStyle>;
  recipientCreatedOn?: StyleProp<TextStyle>;
  userCreatedOn?: StyleProp<TextStyle>;
  isSend?: StyleProp<TextStyle>;

  lastSeenByContainer?: StyleProp<ViewStyle>;
  loadingSpinnerColor?: string;
  isSendIconColor?: string;
}

const styles: ChatBubbleStyles = {
  chatBubbleWrapper: {
    position: 'relative',
    marginBottom: 2,
    display: 'flex'
  } as StyleProp<ViewStyle>,
  chatBubble: {
    position: 'relative',
    backgroundColor: '#0084FF',
    borderRadius: 7,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '80%',
    paddingTop: 8,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    // boxShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 2px'
  } as StyleProp<ViewStyle>,
  userChatBubbleOrientationNormal: {
    marginRight: 0,
  } as StyleProp<ViewStyle>,
  recipientChatBubbleOrientationNormal: {
    marginLeft: 0,
  } as StyleProp<ViewStyle>,
  recipientChatBubble: {
    backgroundColor: '#ccc',
  } as StyleProp<ViewStyle>,
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '300',
    margin: 0,
    marginRight: 30
  } as StyleProp<TextStyle>,
  userFirstChatBubbleInGroup: {
    borderTopRightRadius: 0
  } as StyleProp<ViewStyle>,
  recipientFirstChatBubbleInGroup: {
    borderTopLeftRadius: 0
  } as StyleProp<ViewStyle>,
  userLastChatBubbleInGroup: {
    borderTopRightRadius: 0
  } as StyleProp<ViewStyle>,
  recipientLastChatBubbleInGroup: {
    borderTopLeftRadius: 0
  } as StyleProp<ViewStyle>,
  userCenterChatBubbleInGroup: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  } as StyleProp<ViewStyle>,
  recipientCenterChatBubbleInGroup: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0
  } as StyleProp<ViewStyle>,
  createdOn: {
    position: 'absolute',
    right: 14,
    bottom: 2,
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.55)'
  } as StyleProp<TextStyle>,
  isSend: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    fontSize: 9,
  } as StyleProp<TextStyle>,
  lastSeenByContainer: {
    position: 'absolute',
    right: -30,
    top: 0,
    width: 20,
    height: '100%',
  } as StyleProp<ViewStyle>,
  loadingSpinnerColor: 'rgba(255, 255, 255, 0.55)',
  isSendIconColor: '#cddc39',
};
export default styles;
