/// <reference types="react" />
import * as React from 'react';
import { Author } from '../Author';
import { StyleProp, ViewStyle } from 'react-native';
export interface AvatarProps {
    author: Author;
    containerStyle?: StyleProp<ViewStyle>;
}
declare const Avatar: React.SFC<AvatarProps>;
export default Avatar;
