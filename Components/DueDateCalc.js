import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useGlobalContext } from '../context/context';
import { auth, db } from '../firebase/config';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
const DueDateCal = ({ navigation }) => {
  const {
    date,
    dueDate,
    setDateData,
    showDatepicker,
    isOpen,
    name,
    age,
    youAre,
    firstChild,
    email,
    password,
    createUsers,
    signed,
    setSigned,
  } = useGlobalContext();
  const calcDueDate = new Date(dueDate).toLocaleDateString();
  const onDone = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((re) => {
        console.log(re);

        createUsers(
          email,

          password,
          name,
          age,
          youAre,
          firstChild,
          new Date(dueDate).toLocaleDateString()
        );

        setSigned(true);
        const uid = re.user.uid;
        const data = {
          email,

          password,
          name,
          age,
          youAre,
          firstChild,
          dueDate,
        };
        const usersRef = async () => {
          await setDoc(collection(db, 'users'), {
            data,
          });
        };
        // usersRef
        //   .doc(uid)
        //   .set(data)
        //   .then(() => {
        //     navigation.navigate('Home');
        //   });
        usersRef();
        Alert.alert('Registration Sucessful');
        navigation.navigate('Login');
      })

      .catch((re) => {
        switch (re.code) {
          case 'auth/invalid-email':
            setSigned(false);
            Alert.alert('Email is not valid');
            break;
          case 'auth/email-already-in-use':
            setSigned(false);
            Alert.alert('Email already in use');
            break;
            break;
          case 'auth/weak-password':
            setSigned(false);
            Alert.alert('Password should be at least 6 character');
        }

        console.log(re);
      });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Set due date</Text>
        <Text style={{ fontSize: 16, color: '#878383', marginBottom: 20 }}>
          One final thing to ensure your app is specific to your needs! Please
          enter your due date.
        </Text>
      </View>
      <Pressable onPress={showDatepicker}>
        <View style={styles.box}>
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              left: 22,
              top: -7,
              zIndex: 999,
              paddingHorizontal: 8,
              fontSize: 14,
              color: '#CCC5C5',
            }}
          >
            Due date
          </Text>

          <Text
            style={{
              display: 'flex',
              alignItems: 'center',

              fontSize: 18,
              color: 'black',
              // fontWeight: 'bold',
              flex: 1,
              padding: 10,
            }}
          >
            {date.toLocaleDateString()}
          </Text>
        </View>
      </Pressable>
      <Text style={{ textAlign: 'center', marginBottom: 20 }}>OR</Text>
      <View
        style={{
          // width: 325,
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
          onPress={() => navigation.navigate('Calculator')}
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
            Calculate Due Date
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          // width: 325,

          height: 56,
          borderRadius: 10,
          backgroundColor: '#8DBAC5',

          marginTop: 150,
        }}
      >
        <Pressable
          style={{
            borderRadius: 10,
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
          }}
          onPress={() => onDone()}
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
            Done
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DueDateCal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
    marginTop: 35,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  box: {
    height: 50,
    borderColor: '#CCC5C5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 25,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
