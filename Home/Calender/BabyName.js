import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';

const BabyName = ({ navigation }) => {
  const [data, setData] = useState([]);

  const dataFetch = async () => {
    try {
      const response = await fetch(
        'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/babyName.json'
      );
      const resData = await response.json();

      const result = Object.values(resData);
      console.log(result);
      if (result) {
        setData(result);
        // {
        //   result.map((item, index) => {
        //     setImage([{ url: item.DImage }]);
        //   });
        // }
      } else {
        new Error('The result is empty cant trigger rerender');
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(data);
  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingTop: 15, margin: 15 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>BabyName</Text>
        <View>
          {data.map((item, index) => {
            return item.map((item, index) => {
              console.log(item);
              const { country, names } = item;
              return (
                <Pressable key={index}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                    onPress={() => navigation.navigate('AfricanNames')}
                  >
                    {country}
                  </Text>
                </Pressable>
              );
            });
          })}
        </View>
      </View>
    </View>
  );
};

export default BabyName;

const styles = StyleSheet.create({});
