import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {
  MaterialIcons,
  AntDesign,
  FontAwesome,
  Ionicons,
} from '@expo/vector-icons';

import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { db } from '../firebase/config';

const SignUpEmail = ({ navigation }) => {
  const {
    setEmail,
    setPassword,
    showPassword,
    setShowPassword,
    errorEmail,

    errorPassword,

    showError,
    setShowError,
    email,
    password,
    setErrorEmail,
    setErrorPassword,
  } = useGlobalContext();

  const emailValidator = () => {
    const emailChecker =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
    if (email == '') {
      setShowError(true);
      return setErrorEmail('Please enter an Email address !');
    }
    if (!email.match(emailChecker)) {
      setShowError(true);
      return setErrorEmail('Please enter valid Email address');
    }
    if (password == '') {
      setShowError(true);
      return setErrorPassword('Please enter your Password !');
      i;
    }
    if (password.length < 8) {
      setShowError(true);
      return setErrorPassword(
        'Your password should be atleast 8 character long!'
      );
    } else if (
      password !== '' &&
      email !== '' &&
      email.match(emailChecker) &&
      password.length >= 8
    ) {
      setShowError(false);
      navigation.navigate('Register');
    }
  };
  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);
  return (
    // <ScrollView
    //   style={{
    //     backgroundColor: 'white',
    //     alignContent: 'center',
    //   }}
    // >
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
          <View style={{ flexDirection: 'row', ...styles.buttons }}>
            <MaterialIcons
              style={{ marginRight: 15 }}
              name="email"
              size={24}
              color="#CCC5C5"
              width="20px"
            />
            <TextInput
              style={{
                display: 'flex',
                alignItems: 'center',

                fontSize: 18,
                color: 'black',
                fontWeight: 'bold',
                flex: 1,
              }}
              value={email}
              placeholder="Email address"
              onChangeText={(value) => setEmail(value.toLowerCase())}
            />
          </View>
          {showError == true ? (
            <Text style={{ color: 'red' }}>{errorEmail}</Text>
          ) : null}
          <View style={{ flexDirection: 'row', ...styles.buttons }}>
            <MaterialIcons
              style={{ marginRight: 15 }}
              name="lock"
              size={24}
              color="#CCC5C5"
              width="20px"
            />
            <TextInput
              secureTextEntry={showPassword}
              style={{
                display: 'flex',
                alignItems: 'center',

                fontSize: 18,
                color: 'black',
                fontWeight: 'bold',
                flex: 1,
              }}
              value={password}
              placeholder="Password"
              onChangeText={(value) => setPassword(value)}
            />
            <Pressable
              onPress={() =>
                showPassword == true
                  ? setShowPassword(false)
                  : setShowPassword(true)
              }
            >
              {showPassword == true ? (
                <Ionicons name="eye" size={24} color="#CCC5C5" />
              ) : (
                <Ionicons name="eye-off-sharp" size={24} color="#CCC5C5" />
              )}
            </Pressable>
          </View>
          {showError == true ? (
            <Text style={{ color: 'red', marginBottom: 15 }}>
              {errorPassword}
            </Text>
          ) : null}

          <View style={{ marginLeft: 15, marginTop: -10, marginBottom: 15 }}>
            <Text style={{ color: '#7E8383', fontWeight: 'bold' }}>
              Must be 8-20 characters
            </Text>
          </View>

          <View
            style={{
              width: 325,
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
              onPress={() => emailValidator()}
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
                Create Account
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Already have an account?&nbsp;
            </Text>
          </View>

          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: '#92AADA' }}
            >
              Login
            </Text>
          </Pressable>
        </View>
        {/* <Background /> */}
      </View>
    </TouchableWithoutFeedback>
    // </ScrollView>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    color: '#FCFDFF',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'lowercase',
    // marginTop: 100,
  },
  container: {
    display: 'flex',
    fontSize: 20,
    fontWeight: 'bold',
    // top: -270,
    textAlign: 'center',
    marginBottom: 15,
  },
  buttons: {
    // backgroundColor: '#8DBAC5',
    padding: 15,
    width: 325,
    height: 56,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: '#CCC5C5',
    borderRadius: 10,
    borderWidth: 1,
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
export default SignUpEmail;
