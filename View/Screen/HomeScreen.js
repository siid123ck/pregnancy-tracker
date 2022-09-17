import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Weeks from '../../Home/Weeks';
import Schedule from '../../Home/Schedule';
import ImageBar from '../../Home/ImageBar';
import { useGlobalContext } from '../../context/context';
function HomeScreen({ navigation }) {
  // const { setGetDate, setData, setPersonName, data } = useGlobalContext();
  // const dataFetch = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/users.json'
  //     );
  //     const resData = await response.json();

  //     const result = Object.values(resData);
  //     // setKey(Object.keys(resData));
  //     // console.log(key);
  //     // console.log(result);
  //     if (result) {
  //       setData(result);
  //       data.map((item, index) => {
  //         if ((auth.currentUser.email === item.email) === true) {
  //           setGetDate(item.dueDate);
  //           setPersonName(item.name);
  //         }
  //       });
  //     } else {
  //       new Error('The result is empty cant trigger rerender');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   dataFetch;
  // }, []);
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.textMain}>Today</Text>
        </View>
        <ImageBar navigation={navigation} />
        <Weeks navigation={navigation} />
        <Schedule navigation={navigation} />
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    color: 'black',
    // backgroundColor:'blue',
    margin: 10,
    maxWidth: '100%',

    paddingTop: 15,
    fontWeight: 'bold',
  },
  textMain: {
    fontWeight: 'bold',
    fontSize: 30,
    // alignSelf:'flex-start',
    //  justifyContent:'flex-start'
  },
});

export default HomeScreen;
