import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import { useGlobalContext } from '../context/context';
import { auth } from '../firebase/config';
const Weeks = ({ navigation }) => {
  const {
    getDate,
    setGetDate,
    calculator,
    week,
    setWeek,
    data,
    setData,
    personname,
    setPersonName,
  } = useGlobalContext();
  const dataFetch = async () => {
    try {
      const response = await fetch(
        'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/users.json'
      );
      const resData = await response.json();

      const result = Object.values(resData);
      // setKey(Object.keys(resData));
      // console.log(key);
      // console.log(result);
      if (result) {
        setData(result);
        data.map((item, index) => {
          if ((auth.currentUser.email === item.email) === true) {
            setGetDate(item.dueDate);
            setPersonName(item.name);
          }
        });
      } else {
        new Error('The result is empty cant trigger rerender');
      }
    } catch (err) {
      console.log(err);
    }
  };

  let i = 0;
  const result = calculator(new Date(getDate), new Date());
  const calWeeks = () => {
    for (i; i <= 41; i++) {
      if (result == i) {
        // console.log(week);

        const resultWeek = ('week', +(43 - i).toString());

        return resultWeek;
      }
      if (result == i) {
        break;
      }
    }
  };
  // console.log(getDate);
  useEffect(() => {
    dataFetch();
    calWeeks();
    setWeek(calWeeks());
  }, [data, week]);
  // useEffect(() => {
  //   setInterval(() => {

  //   }, 1);
  // }, [week]);

  return (
    <View style={{ ...styles.container, ...styles.elevation }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
        {week} Weeks pregnant
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <Text style={{ color: '#7E8383', flex: 1 }}>
          {week > 12 ? '2' : '1'}st Trimester
        </Text>
        <Text style={{ color: '#7E8383' }}>
          {new Date(getDate).toDateString()}
        </Text>
      </View>
      <Bar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: 110,
    backgroundColor: 'white',
    borderRadius: 15,
    top: -60,
    padding: 10,
    overflow: 'hidden',
    // borderColor: 'black',

    // borderStyle: 'solid',
    // borderWidth: 1,

    // borderWidth: 25,
  },
  elevation: {
    elevation: 2,
    shadowColor: 'black',
  },
});
export default Weeks;
