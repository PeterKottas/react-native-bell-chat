import { StyleProp, ViewStyle } from 'react-native';

export interface BubbleGroupStyles {
  chatBubbleWrapper?: StyleProp<ViewStyle>;
}

const styles: BubbleGroupStyles = {
  chatBubbleWrapper: {
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
  }
};

export default styles;
