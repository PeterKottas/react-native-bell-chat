import * as React from 'react';
import { Author } from '../Author';
import { Text, StyleProp, TextStyle, ViewStyle, View } from 'react-native';

const isTypingStyles: IsTypingStyles = {
  text: {
    color: 'rgb(204, 204, 204)',
    textAlign: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
  }
};

export interface IsTypingStyles {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
}

export interface IsTypingProps {
  typingAuthors: Author[];
  styles?: IsTypingStyles;
}

const IsTyping: React.SFC<IsTypingProps> = props => {
  let { styles } = props;
  if (!styles) {
    styles = {};
  }
  const { container, text } = styles;

  return props.typingAuthors && props.typingAuthors.length > 0 && (
    <View style={[isTypingStyles.container, container]}>
      <Text style={[isTypingStyles.text, text]}>
        {props.typingAuthors.map(a => a.name).join(', ').replace(/,(?!.*,)/gmi, ' and') + (props.typingAuthors.length === 1 ? ' is ' : ' are ') + 'typing'}
      </Text>
    </View>
  );
};

export default IsTyping;
