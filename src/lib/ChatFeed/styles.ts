import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

export default {
  chatPanel: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
    position: 'relative'
  } as StyleProp<ViewStyle>,
  showRecipientAvatarChatMessagesStyle: {
    paddingLeft: 50
  } as StyleProp<ViewStyle>,
  showIsTypingChatMessagesStyle: {
    paddingBottom: 24,
    position: 'relative'
  } as StyleProp<ViewStyle>,
  showRecipientLastSeenMessageChatMessagesStyle: {
    paddingRight: 30,
  } as StyleProp<ViewStyle>,
  chatBubbleWrapper: {
    marginTop: 10,
    marginBottom: 10,
    overflow: 'visible',
  } as StyleProp<ViewStyle>,
  img: {
    borderRadius: 100,
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: 36,
    zIndex: 100,
  } as React.CSSProperties,
  chatMessages: {
    paddingBottom: 10,
    paddingTop: 10,
  } as StyleProp<ViewStyle>
};
