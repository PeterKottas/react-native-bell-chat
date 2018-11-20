import * as React from 'react';
import { Author } from '../Author';
import { StyleProp, ViewStyle, View, Text, TextStyle } from 'react-native';

export interface LastSeenAvatarProps {
  author: Author;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const styles = {
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
  } as StyleProp<TextStyle>
};

const LastSeenAvatar: React.SFC<LastSeenAvatarProps> = props => props.author && (
  <View
    style={[
      styles.container,
      props.containerStyle
    ]}
  >
    <Text
      style={[styles.text, props.textStyle]}
    >{
        props.author.lastSeenAvatarName ?
          props.author.lastSeenAvatarName
          :
          props.author.name[0].toUpperCase()}
    </Text>
  </View>
);

export default LastSeenAvatar;
