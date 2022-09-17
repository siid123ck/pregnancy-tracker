import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useGlobalContext } from '../../context/context';

const Appoinment = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={onDateChange} />

      <View>
        <Text
          style={{
            marginTop: 15,
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Appoinment: {new Date(startDate).toDateString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
});
export default Appoinment;
