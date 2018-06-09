import * as React from 'react';
import { Author } from '../Author';
import { Text, StyleProp, TextStyle } from 'react-native';

const styles = {
  container: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
    color: 'rgb(204, 204, 204)',
    textAlign: 'center',
  } as StyleProp<TextStyle>
};

export interface IsTypingProps {
  typingAuthors: Author[];
}

const IsTyping = (props: IsTypingProps) => {
  return props.typingAuthors && props.typingAuthors.length > 0 && (
    <Text style={styles.container}>
      {props.typingAuthors.map(a => a.name).join(', ').replace(/,(?!.*,)/gmi, ' and') + (props.typingAuthors.length === 1 ? ' is ' : ' are ') + 'typing'}
    </Text>
  );
};

export default IsTyping;
