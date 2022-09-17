import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/context';
import moment from 'moment';
const Calculator = ({ navigation }) => {
  const {
    date,
    setDateData,
    showDatepicker,
    dueDate,
    setDueDate,
    dueDateCalculator,
  } = useGlobalContext();

  //   const dueDate = moment(date);
  const calcDueDate = dueDate;
  //   const changedueDate = () => {
  //     setDateData(calcDueDate);
  //   };
  const onNavigate = () => {
    setDateData(new Date(calcDueDate));
    navigation.navigate('DueDateCalc');
  };
  useEffect(() => {
    calcDueDate;
  }, [date]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculator</Text>
      <View>
        <Pressable onPress={showDatepicker}>
          <View style={styles.box}>
            <Text
              style={{
                position: 'absolute',
                backgroundColor: 'white',
                left: 22,
                top: -7,
                zIndex: 999,
                paddingHorizontal: 8,
                fontSize: 14,
                color: '#CCC5C5',
              }}
            >
              Enter the 1st day of your last period:
            </Text>

            <Text
              style={{
                display: 'flex',
                alignItems: 'center',

                fontSize: 18,
                color: 'black',
                // fontWeight: 'bold',
                flex: 1,
                padding: 10,
              }}
            >
              {date.toLocaleDateString()}
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#777578',
          }}
        >
          Based on this, your due date is
        </Text>
        <Text
          style={{
            marginTop: 25,
            marginBottom: 25,
            fontSize: 35,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {new Date(calcDueDate).toLocaleDateString()}
        </Text>
      </View>
      <View
        style={{
          // width: 325,
          height: 56,
          borderRadius: 10,
          backgroundColor: '#8DBAC5',
        }}
      >
        <Pressable
          style={{
            borderRadius: 10,
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
          }}
          onPress={onNavigate}
        >
          <Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 15,
            }}
          >
            Save Due Date
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 35,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  box: {
    height: 50,
    borderColor: '#CCC5C5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 25,
  },
});
