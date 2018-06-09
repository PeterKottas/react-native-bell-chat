import * as React from 'react';
import { Author } from '../Author';
import { StyleProp, ViewStyle, View, Text, TextStyle } from 'react-native';

export interface AvatarProps {
  author: Author;
  containerStyle?: StyleProp<ViewStyle>;
}

const styles = {
  container: {
    position: 'absolute',
    left: -50,
    top: 0,
    width: 40,
    height: 40,
    backgroundColor: 'rgb(153, 153, 153)',
    borderRadius: 20,
    borderTopRightRadius: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  } as StyleProp<ViewStyle>,
  text: {
    color: 'rgb(255,255,255)',
    lineHeight: 40,
    fontWeight: '400',
    textAlign: 'center',
  } as StyleProp<TextStyle>
};

const Avatar: React.SFC<AvatarProps> = props => props.author && (
  <View
    style={[
      styles.container,
      props.containerStyle
    ]}
  >
    <Text
      style={[
        styles.text
      ]}
    >{
        props.author.avatarName ?
          props.author.avatarName
          :
          props.author.name.split(' ').map(part => part[0]).join('').toUpperCase().substr(0, 3)}
    </Text>
  </View>
);

export default Avatar;
