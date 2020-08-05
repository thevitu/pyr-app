import * as React from 'react';
import { Button, Badge, ButtonProps } from "react-native-elements";
import { View, Alert, GestureResponderEvent } from 'react-native';

type CounterProps = {
  value?: number;
  increase?: boolean;
  diasabledAt?: number;
  confirm?: boolean;
};

export type CounterButtonProps = CounterProps & ButtonProps;

export default function CounterButton(props: CounterButtonProps) {
  const { value, increase, diasabledAt, confirm, onPress, ...otherProps } = props;
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    setCounter(value == null ? 0 : value);
  }, [value]);
  const confirmAlert = (event : GestureResponderEvent) => Alert.alert(
    otherProps.title == null ? "" : otherProps.title,
    "Can you confirm?",
    [
      { text: "Cancel", onPress: () => {}, style: "cancel" },
      { text: "OK", onPress: () => {
        updateCounter(event);
      }}
    ],
    { cancelable: false }
  );
  const updateCounter = (event : GestureResponderEvent) => {
    setCounter(counter => counter + (increase == null || increase ? 1 : -1));
    if (onPress != null) {
      onPress(event);
    }    
  };

  return (
    <View>
      <Button disabled={diasabledAt != null && counter == diasabledAt ? true : false } onPress={confirm != null && confirm ? confirmAlert : updateCounter } {...otherProps} />
      <Badge value={counter} status="error" containerStyle={{position: "absolute", top: -4, right: -4}} />
    </View>
  );
};

