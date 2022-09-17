import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
  LogBox,
} from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import Baby from '../Images/Baby.png';

import React from 'react';
import Background from './Background';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/config';
const provider = new GoogleAuthProvider();
const SignUp = ({ navigation }) => {
  const onClickEmail = () => {
    navigation.navigate('SignUpEmail');
  };
  const onClickGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.background}>
      <View style={{ justifyContent: 'center', zIndex: -6 }}>
        <Image
          source={require('../Images/Baby.png')}
          style={{
            display: 'flex',
            alignContent: 'center',

            alignSelf: 'center',
            margin: 0,
            width: 139,
            height: 144,
            // top: -80,
            zIndex: -3,
            // zIndex: -6,
          }}
        />
      </View>
      <Text style={styles.container}>Sign up</Text>
      <View>
        <TouchableOpacity style={styles.buttons} onPress={onClickEmail}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name="email" size={24} color="white" width="20px" />
            <Text
              style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
                flex: 1,
              }}
            >
              Continue with Email
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.buttons,
            backgroundColor: 'white',
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: 1,
          }}
          onPress={() => onClickGoogle()}
        >
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="google" size={24} color={`rgb(66, 188, 53)`} />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: 'black',
                fontWeight: 'bold',
                flex: 1,
              }}
            >
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.buttons, backgroundColor: '#55659F' }}
        >
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome name="facebook-f" size={24} color="white" />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
                flex: 1,
              }}
            >
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Already have an account?&nbsp;
          </Text>
        </View>

        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#92AADA' }}>
            Login
          </Text>
        </Pressable>
      </View>
      {/* <Background /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    color: '#FCFDFF',
    alignContent: 'center',
    justifyContent: 'center',
    textTransform: 'lowercase',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    fontSize: 20,
    fontWeight: 'bold',
    // top: -270,
    textAlign: 'center',
  },
  buttons: {
    backgroundColor: '#8DBAC5',
    padding: 15,
    width: 325,
    height: 56,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // top: -250,
    marginTop: 5,
    marginBottom: 15,

    borderStyle: 'solid',
  },
  email: {
    borderStyle: 'solid',
    borderColor: 'black',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
export default SignUp;
