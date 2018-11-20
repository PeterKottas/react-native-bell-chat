import * as React from 'react';
import { TextInput, View } from 'react-native';

const styles = {
  chatInput: {
    flex: 1,
  },
  inputStyle: {
    border: 'none',
    borderTopWidth: '1',
    borderTopStyle: 'solid',
    borderTopColor: '#ddd',
    fontSize: '16',
    outline: 'none',
    padding: '30',
    width: '100%',
  },
};

export interface ChatInputProps {
  inputStyles?: object;
  inputPlaceholder?: string;
}

const ChatInput: React.SFC<ChatInputProps> = props => {
  const { inputStyles, inputPlaceholder } = props;
  return (
    <View style={styles.chatInput}>
      <TextInput style={[inputStyles || styles.inputStyle]} placeholder={inputPlaceholder} />
    </View>
  );
};

export default ChatInput;
