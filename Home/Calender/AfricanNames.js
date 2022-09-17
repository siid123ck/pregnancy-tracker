import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';

const BabyName = () => {
  const [data, setData] = useState([]);
  const [girl, setGirl] = useState(false);
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
    <ScrollView>
      <View
        style={{
          backgroundColor: 'white',

          // flexDirection: 'row',
          flex: 1,
          // marginHorizontal: 20,
        }}
      >
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Names</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              // alignItems: 'center',
            }}
          >
            <Pressable style={{ flex: 1 }} onPress={() => setGirl(false)}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  // flex: 1,
                  // textAlign: 'center',
                }}
              >
                Boy
              </Text>
            </Pressable>
            <Pressable onPress={() => setGirl(true)}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Girl</Text>
            </Pressable>
          </View>
          <View>
            {data.map((item, index) => {
              return item.map((item, index) => {
                console.log(item);
                const { country, names } = item;
                if (country === 'African Names') {
                  return (
                    <View>
                      <Pressable key={index}>
                        {girl == false
                          ? names.boy.map((item, index) => {
                              return (
                                <View style={styles.taskContainer}>
                                  <Text key={index} style={styles.task}>
                                    {item}
                                  </Text>
                                </View>
                              );
                            })
                          : names.Girl.map((item, index) => {
                              return (
                                <View style={styles.taskContainer}>
                                  <Text key={index} style={styles.task}>
                                    {item}
                                  </Text>
                                </View>
                              );
                            })}
                      </Pressable>
                    </View>
                  );
                }
              });
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BabyName;

const styles = StyleSheet.create({
  taskContainer: {
    // backgroundColor: '#CCC5C5',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    flex: 1,
    // color: '#fff',
    width: '100%',
    fontSize: 18,
  },
});
