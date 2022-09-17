import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
// import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import Pregnancy from './Profile/Pregnancy';
import { auth } from '../firebase/config';

import { signOut } from 'firebase/auth';
const Profile = ({ navigation }) => {
  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState('');
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };
  // const dataFetch = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/users.json'
  //     );
  //     const resData = await response.json();
  //     console.log(resData);
  //     const result = Object.values(resData);

  //     if (result) {
  //       setData(result);
  //     } else {
  //       new Error('The result is empty cant trigger rerender');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   dataFetch()
  // }, []);
  const onSignOut = () => {
    navigation.navigate('Login');
    signOut(auth);
  };
  console.log('This is world');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.profile}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Profile
              </Text>
            </View>

            <Pressable onPress={openCamera}>
              <View
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: 'white',
                  borderRadius: 100,
                  marginTop: 20,
                  borderStyle: 'solid',
                  borderColor: '#CCE5FF',
                  borderWidth: 5,
                  zIndex: 1,
                }}
              >
                {pickedImagePath !== '' && (
                  <Image
                    style={{ width: 190, height: 190, borderRadius: 100 }}
                    source={{ uri: pickedImagePath }}
                  />
                )}
              </View>
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  left: 150,
                  top: 15,
                  backgroundColor: 'red',
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  justifyContent: 'center',
                }}
              >
                <Ionicons
                  style={{ textAlign: 'center' }}
                  name="camera"
                  size={35}
                  color="white"
                />
              </View>
            </Pressable>

            {/* <Image style={{width:500, height:500}} source={{uri:pickedImagePath}}/> */}
          </View>
        </View>
        <Pregnancy />
        <View style={{ alignItems: 'center', marginBottom: 15 }}>
          <Button
            style={{ width: 50 }}
            color={'#92AADA'}
            title="Sign Out"
            onPress={onSignOut}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    // paddingTop: 25,
  },
  box: {
    flexDirection: 'row',
    // justifyContent:'center'
    backgroundColor: '#92AADA',
    padding: 10,
    height: 350,
  },
  profile: {
    display: 'flex',
    alignContent: 'center',
    textAlign: 'center',
  },
});
export default Profile;
