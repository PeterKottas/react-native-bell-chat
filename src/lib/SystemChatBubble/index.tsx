import * as React from 'react';
import { ChatBubbleProps, defaultBubbleStyles } from '../ChatBubble';
import { View, ViewStyle, StyleProp, Text } from 'react-native';

const styles = {
  container: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  } as StyleProp<ViewStyle>,
};

export interface SystemChatBubbleProps extends ChatBubbleProps {
}

const SystemChatBubble = (props: SystemChatBubbleProps) => {
  let { bubbleStyles } = props;
  bubbleStyles = bubbleStyles || defaultBubbleStyles;
  const time = props.message.createdOn && props.message.createdOn.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  return props.message && (
    <View
      style={[
        styles.container,
        bubbleStyles.systemChatBubbleContainerStyle
      ]}
    >
      {time && (
        <Text
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
