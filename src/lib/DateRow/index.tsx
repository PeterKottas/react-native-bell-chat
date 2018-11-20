import * as React from 'react';
import { StyleProp, TextStyle, Text, ViewStyle, View } from 'react-native';

export interface DateRowStyles {
  container?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
}

const dateRowStyles: DateRowStyles = {
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  },
  container: {

  }
};

export interface DateRowProps {
  date: Date;
  styles?: DateRowStyles;
}

const DateRow: React.SFC<DateRowProps> = props => {
  let { styles } = props;
  if (!styles) {
    styles = {};
  }
  const {
    text,
    container
  } = styles;
  return props.date && (
    <View style={[dateRowStyles.container, container]}>
      <Text
        style={[
          dateRowStyles.text,
          text
        ]}
      /*title={props.date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}*/
      >
        {props.date.toLocaleDateString()}
      </Text>
    </View>
  );
};

export default DateRow;
