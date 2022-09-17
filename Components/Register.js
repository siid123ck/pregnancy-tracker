import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Picker,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Dropdownlist from './Dropdownlist';
import { age } from '../data/age';
import { youare } from '../data/youare';
import { firstChild } from '../data/firstChild';
import { useGlobalContext } from '../context/context';
const Register = ({ navigation }) => {
  const { text, setText, name, setName, isFocus, setIsFocus, value, setValue } =
    useGlobalContext();
  const renderLabel = () => {
    if (value || isFocus || name !== '') {
      return (
        <Text style={[styles.label, isFocus && { color: '#878383' }]}>
          Name
        </Text>
      );
    }
    return null;
  };
  const onPressDone = () => {
    navigation.navigate('DueDateCalc');
  };
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 25 }}>
          Enter details to register
        </Text>
        <View style={[styles.box, isFocus && { borderColor: '#878383' }]}>
          {renderLabel()}
          <TextInput
            style={{
              display: 'flex',
              alignItems: 'center',

              fontSize: 18,
              color: 'black',
              // fontWeight: 'bold',
              flex: 1,
              padding: -10,
            }}
            value={name}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            placeholder={!isFocus ? 'Name' : '...'}
            onChangeText={(value) => setName(value)}
          />
        </View>
        <View style={{ marginBottom: 25 }}>
          <Dropdownlist data={age} placeholderName={text[0]} />
        </View>
        <View style={{ marginBottom: 25 }}>
          <Dropdownlist data={youare} placeholderName={text[1]} />
        </View>
        <View style={{ marginBottom: 25 }}>
          <Dropdownlist data={firstChild} placeholderName={text[2]} />
        </View>
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
            onPress={onPressDone}
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
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 35,
    padding: 16,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: -7,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  box: {
    height: 50,
    borderColor: '#CCC5C5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 25,
  },
});
export default Register;
