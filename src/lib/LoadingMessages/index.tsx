import * as React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';

const styles = {
  containerStyles: {
    display: 'flex',
    marginBottom: 10
  } as StyleProp<ViewStyle>,
};

export interface LoadingMessagesProps {
  containerStyles?: StyleProp<ViewStyle>;
  spinnerColor?: string;
  isVisible: boolean;
}

const LoadingMessages: React.SFC<LoadingMessagesProps> = props => {
  const { containerStyles } = props;
  return (
    <View style={[ styles.containerStyles, containerStyles ]}>
      <svg
        width="40px"
        height="40px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={{ 
          background: 'none',
          margin: 'auto', 
          fill: props.spinnerColor, opacity: props.isVisible ? 1 : 0,
          transition: '0.3s all ease-in-out'
        }}
      >
        <title>Loading messages</title>
        <path
          stroke="none"
          d="M10 50A40 40 0 0 0 90 50A40 46 0 0 1 10 50"
          transform="rotate(42 50 53)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 53;360 50 53"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </View>
  );
};
LoadingMessages.defaultProps = {
  spinnerColor: 'rgb(0, 132, 255)'
};
export default LoadingMessages;
