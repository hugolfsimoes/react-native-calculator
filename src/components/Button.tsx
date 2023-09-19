import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  GestureResponderEvent,
} from 'react-native';

type Button = {
  onClick: (label: string) => void;
  label: string;
  double?: boolean;
  triple?: boolean;
  operation?: boolean;
};

type StylesButton = {
  fontSize?: number;
  height?: number;
  width?: number;
  padding?: number;
  backgroundColor?: string;
  textAlign?: string;
  borderWidth?: number;
  borderColor?: string;
  color?: string;
};

export default function Button({
  onClick,
  label,
  double,
  triple,
  operation,
}: Button) {
  const stylesButton: StylesButton[] = [styles.button];
  if (double) stylesButton.push(styles.buttonDouble);
  if (triple) stylesButton.push(styles.buttonTriple);
  if (triple) stylesButton.push(styles.buttonTriple);
  if (operation) stylesButton.push(styles.operationButton);
  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});
