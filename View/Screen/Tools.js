import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import ProfileImage from '../../Home/Profile/ProfileImage';
import { useGlobalContext } from '../../context/context';

const Tools = ({ navigation }) => {
  const { isOpen, setIsOpen } = useGlobalContext();
  const data = [
    {
      id: 1,
      title: '3D images',
      des: 'Discover 3D images',
      color: '#3D315B',
      src: require('../../Images/Baby.png'),
      calender: null,
    },
    {
      id: 2,
      title: 'Images',
      des: 'View weekly sonograms',
      color: '#708B75',
      src: require('../../Images/Image.png'),
      calender: null,
    },
    {
      id: 3,
      title: 'To Do',
      des: 'View Key moments in your journey',
      color: '#9AB87A',
      src: require('../../Images/ToDo.png'),
      calender: null,
    },
    {
      id: 4,
      title: 'Appointments',
      des: 'Add new dates and times',
      color: '#5899E2',
      src: require('../../Images/Appoinment.png'),
      calender: null,
    },
    {
      id: 5,
      title: 'Name',
      des: 'Browse names and add to your list',
      color: 'orange',
      src: require('../../Images/Book.png'),
      calender: null,
    },
  ];

  const press = (id) => {
    if (id == 1) {
      navigation.navigate('ThreeImages');
    } else if (id == 2) {
      navigation.navigate('Images');
    } else if (id == 3) {
      navigation.navigate('ToDo');
    } else if (id == 4) {
      setIsOpen(true);
      navigation.navigate('Appointment');
    } else if (id == 5) {
      navigation.navigate('BabyName');
    }
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.textMain}>Tools</Text>
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
    // marginTop: 25,
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
export default Tools;
