import * as React from 'react';
import { ChatBubbleProps } from '../ChatBubble';
import { View, ViewStyle, StyleProp, Text } from 'react-native';
import { ChatBubbleStyles } from './../ChatBubble/styles';

const systemChatBubbleStyles: ChatBubbleStyles = {
  systemChatBubbleContainer: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  } as StyleProp<ViewStyle>,
};

export interface SystemChatBubbleProps extends ChatBubbleProps {
}

const SystemChatBubble: React.SFC<SystemChatBubbleProps> = props => {
  let {
    styles
  } = props;
  if (!styles) {
    styles = {};
  }
  const {
    systemChatBubbleContainer,
    systemChatBubbleText
  } = styles;
  const time = props.message.createdOn && props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  return props.message && (
    <View
      style={[
        systemChatBubbleStyles.systemChatBubbleContainer,
        systemChatBubbleContainer
      ]}
    >
      {time && (
        <Text
          style={[
            systemChatBubbleStyles.systemChatBubbleText,
            systemChatBubbleText
          ]}
        /*title={props.message.createdOn.toLocaleString()}*/
        >
          {time}:{' '}
        </Text>
      )}
      <Text>
        {props.message.message}
      </Text>
    </View>
  );
};

export default SystemChatBubble;
