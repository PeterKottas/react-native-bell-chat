import * as React from 'react';
import { StyleProp, TextStyle, Text } from 'react-native';

const styles = {
  container: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.55)'
  } as StyleProp<TextStyle>,
};

export interface DateRowProps {
  date: Date;
  containerStyles?: StyleProp<TextStyle>;
}

const DateRow: React.SFC<DateRowProps> = props => {
  return props.date && (
    <Text
      style={[
        styles.container,
        props.containerStyles
      ]}
      /*title={props.date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}*/
    >
      {props.date.toLocaleDateString()}
    </Text>
  );
};

export default DateRow;
