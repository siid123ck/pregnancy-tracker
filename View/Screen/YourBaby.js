import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context/context';

const YourBaby = () => {
  const { week, body, setBody, baby, setBaby, healthtips, setHealthtips } =
    useGlobalContext();
  //   const urlLink = `${'week' + week}`;
  //   //   console.log(urlLink);
  //   const dataFetch = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://pregnancytracker-6648d-default-rtdb.firebaseio.com/pregnancy/${urlLink}.json`
  //       );
  //       const resData = await response.json();

  //       const result = resData;
  //       console.log(result.yourbaby);
  //       if (result) {
  //         setData(result);
  //         setBaby(result.yourbaby);
  //         setHealthtips(result.healthtips);
  //         setBody(result.yourbody);
  //         // {
  //         //   result.map((item, index) => {
  //         //     // setImage([{ url: item.scanImage }]);
  //         //     // console.log(item);
  //         //   });
  //         // }
  //       } else {
  //         new Error('The result is empty cant trigger rerender');
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   //   console.log(data);
  //   useEffect(() => {
  //     dataFetch();
  //   }, [week]);
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ margin: 15 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>YourBaby</Text>
      </View>
      <View style={{ margin: 15 }}>
        <Text style={{ fontSize: 20 }}>{baby}</Text>
      </View>
    </View>
  );
};

export default YourBaby;

const styles = StyleSheet.create({});
