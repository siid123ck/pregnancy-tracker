import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context/context';
import ProfileImage from '../../Home/Profile/ProfileImage';
const Explore = ({ navigation }) => {
  // const { isOpen, setIsOpen } = useGlobalContext();
  const [dataV, setDataV] = useState({});
  const { week, body, setBody, baby, setBaby, healthtips, setHealthtips } =
    useGlobalContext();
  const urlLink = `${'week' + week}`;
  //   console.log(urlLink);
  const dataFetch = async () => {
    try {
      const response = await fetch(
        `https://pregnancytracker-6648d-default-rtdb.firebaseio.com/pregnancy/${week}.json`
      );
      const resData = await response.json();

      const result = resData;
      console.log(result.yourbaby);
      if (result) {
        setDataV(result);
        setBaby(result.yourbaby);
        setHealthtips(result.healthtips);
        setBody(result.yourbody);
        // {
        //   result.map((item, index) => {
        //     // setImage([{ url: item.scanImage }]);
        //     // console.log(item);
        //   });
        // }
      } else {
        new Error('The result is empty cant trigger rerender');
      }
    } catch (err) {
      console.log(err);
    }
  };
  //   console.log(data);
  useEffect(() => {
    dataFetch();
  }, [week]);
  const data = [
    {
      id: 1,
      title: 'Your Baby',
      des: 'learn how baby growing',
      color: '#3D315B',
      src: require('../../Images/Baby.png'),
      calender: null,
    },
    {
      id: 2,
      title: 'Your Body',
      des: 'What is happening?',
      color: '#708B75',
      src: require('../../Images/Image.png'),
      calender: null,
    },
    {
      id: 3,
      title: 'Health Tips',
      des: 'Know How to become Healthy',
      color: '#9AB87A',
      src: require('../../Images/ToDo.png'),
      calender: null,
    },
  ];

  const press = (id) => {
    if (id == 1) {
      navigation.navigate('YourBaby');
    } else if (id == 2) {
      navigation.navigate('YourBody');
    } else if (id == 3) {
      navigation.navigate('HealthTips');
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.textMain}>Explore</Text>
          </View>
          <View>
            <Pressable
              style={{
                color: 'blue',

                zIndex: 1,
                backgroundColor: 'white',
                borderRadius: 100,
              }}
              onPress={() => navigation.navigate('Profile')}
            >
              <ProfileImage />
            </Pressable>
          </View>
        </View>

        <Text style={{ ...styles.textMain, fontSize: 20 }}>For You</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {data.map((item) => {
            return (
              <Pressable
                style={{ ...styles.smallBox, backgroundColor: `${item.color}` }}
                key={item.id}
                onPress={() => press(item.id)}
              >
                <View>
                  <Image
                    style={{
                      width: 180,
                      height: 200,
                      alignSelf: 'flex-end',
                      borderTopRightRadius: 15,
                      borderBottomRightRadius: 15,
                    }}
                    source={item.src}
                  />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    width: '50%',
                    top: 25,
                    left: 10,
                  }}
                >
                  <Text
                    style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}
                  >
                    {item.des}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    color: 'black',
    // backgroundColor:'blue',
    margin: 10,
    maxWidth: '100%',

    // paddingTop: 15,
    fontWeight: 'bold',
  },
  textMain: {
    fontWeight: 'bold',
    fontSize: 30,
    // alignSelf:'flex-start',
    //  justifyContent:'flex-start'
  },
  smallBox: {
    position: 'relative',
    backgroundColor: 'red',
    width: '100%',
    height: 200,
    marginTop: 15,
    marginBottom: 15,
    opacity: 0.9,
    borderRadius: 10,
    elevation: 20,
  },
});
export default Explore;
