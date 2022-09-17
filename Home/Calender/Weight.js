import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';

const Weight = () => {
  const [todo, setToDo] = useState('');
  const [textvalue, settextValue] = useState('');
  const onSaveValue = () => {
    setToDo(textvalue);
    settextValue('');
  };
  //   const onChange = (e) => {
  //     settextValue(e.target.value);
  //     console.log(textvalue);
  //   };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Weight</Text>
        <View style={styles.box}>
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
            keyboardType="numeric"
            value={textvalue}
            placeholder="Enter your weight in KG"
            onChangeText={(text) => settextValue(text)}
          />
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
            onPress={onSaveValue}
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
              Save
            </Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ ...styles.text, textAlign: 'center' }}>{todo} Kg</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Weight;

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    margin: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  box: {
    height: 50,
    backgroundColor: 'white',
    borderColor: '#CCC5C5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 15,
    marginBottom: 25,
  },
});
