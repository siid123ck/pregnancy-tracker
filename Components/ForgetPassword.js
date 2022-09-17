import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase/config';

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email, null)
      .then(() => {
        alert('reset email send to ' + email);
      })
      .catch(function (e) {
        console.log(e);
      });
  };
  const login = () => {
    navigation.navigate('Login');
  };
  return (
    <View
      style={{
        paddingTop: 35,
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
      }}
      onPress={() => Keyboard.dismiss()}
    >
      <Text></Text>
      <View
        style={{
          padding: 15,
          width: 325,
          height: 56,
          display: 'flex',

          justifyContent: 'center',
          borderColor: '#CCC5C5',
          borderRadius: 10,
          borderWidth: 1,
          // top: -250,
          marginTop: 5,
          marginBottom: 15,
          backgroundColor: 'white',
          borderStyle: 'solid',
        }}
      >
        <TextInput
          style={styles.textbox}
          placeholder="Email"
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="username"
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Send Link"
          color={'#8DBAC5'}
          borderRadius={50}
          onPress={() => forgotPassword(email)}
        />
      </View>
      <View style={styles.button}>
        <Button title="Login" color={'#8DBAC5'} onPress={login} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textbox: {
    display: 'flex',
    alignItems: 'center',

    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
  },
  button: {
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    fontSize: 25,
    marginTop: 25,
  },
});

export default ForgetPassword;
