import * as React from 'react';
import { Author } from '../Author';
import { StyleProp, ViewStyle, View, Text, TextStyle } from 'react-native';

export interface LastSeenAvatarProps {
  author: Author;
  styles: LastSeenAvatarStyles;
}

export interface LastSeenAvatarStyles {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
}

const lastSeenAvatarStyles: LastSeenAvatarStyles = {
  container: {
    width: 20,
    height: 20,
    backgroundColor: 'rgb(153, 153, 153)',
    borderRadius: 10,
    transitionDuration: '0.3s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-in-out'
  } as StyleProp<ViewStyle>,
  text: {
    color: 'white',
    fontSize: 10,
    lineHeight: 20,
    fontWeight: '400',
    textAlign: 'center'
  }
};

const LastSeenAvatar: React.SFC<LastSeenAvatarProps> = props => {
  let { styles } = props;
  if (!styles) {
    styles = {};
  }
  const { 
    container, 
    text 
  } = styles;
  return props.author && (
    <View
      style={[
        lastSeenAvatarStyles.container,
        container
      ]}
    >
      <Text
        style={[lastSeenAvatarStyles.text, text]}
      >{
          props.author.lastSeenAvatarName ?
            props.author.lastSeenAvatarName
            :
            props.author.name[0].toUpperCase()}
      </Text>
    </View>
  );
};

export default LastSeenAvatar;
