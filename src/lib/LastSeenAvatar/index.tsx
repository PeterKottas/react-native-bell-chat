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
    color: 'white',
    backgroundColor: 'rgb(153, 153, 153)',
    borderRadius: 10,
    textAlign: 'center',
    transition: '0.3s all ease-in-out',
  } as StyleProp<ViewStyle>,
  text: {
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
      style={[]}
    >{
        props.author.lastSeenAvatarName ?
          props.author.lastSeenAvatarName
          :
          props.author.name[0].toUpperCase()}
    </Text>
  </View>
);

export default LastSeenAvatar;
