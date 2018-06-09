import { StyleProp, ViewStyle, TextStyle } from 'react-native';

const styles = {
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
  chatBubbleOrientationNormal: {
    marginRight: 0,
  } as StyleProp<ViewStyle>,
  recipientChatBubble: {
    backgroundColor: '#ccc',
  } as StyleProp<ViewStyle>,
  recipientChatBubbleOrientationNormal: {
    marginLeft: 0,
  } as StyleProp<ViewStyle>,
  p: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '300',
    margin: 0,
    marginRight: 30
  } as StyleProp<TextStyle>,
  firstChatBubbleInGroup: {
    borderTopRightRadius: 0
  } as StyleProp<ViewStyle>,
  recipientFirstChatBubbleInGroup: {
    borderTopLeftRadius: 0
  } as StyleProp<ViewStyle>,
  lastChatBubbleInGroup: {
    borderTopRightRadius: 0
  } as StyleProp<ViewStyle>,
  recipientLastChatBubbleInGroup: {
    borderTopLeftRadius: 0
  } as StyleProp<ViewStyle>,
  centerChatBubbleInGroup: {
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
  } as StyleProp<ViewStyle>
};
export default styles;
