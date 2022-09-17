import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { useGlobalContext } from '../context/context';
const Bar = () => {
  const [range, setRange] = useState(0.1);
  const { week } = useGlobalContext();
  const returnRange = () => {
    if (week <= 10) {
      return setRange(0.2);
    } else if (week > 10 && week < 20) {
      return setRange(0.5);
    } else if ((week > 20) & (week <= 30)) {
      return setRange(0.8);
    } else if ((week > 30) & (week <= 43)) {
      return setRange(1);
    }
  };
  useEffect(() => {
    returnRange();
  }, [week]);
  return (
    <View style={progressStyles.containerStyle}>
      <Progress.Bar progress={range} width={375} color="#92AADA" />
    </View>
  );
};

const progressStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
export default Bar;
