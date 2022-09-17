import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import TaskItem from './TaskItem';
const ToDo = () => {
  const [todo, setToDo] = useState([]);
  const [textvalue, settextValue] = useState('');
  const onSave = () => {
    if (todo === null) {
      setToDo([textvalue]);
      settextValue('');
    } else if (todo !== null) {
      setToDo([...todo, textvalue]);
      settextValue('');
    }
  };
  const deleteTask = (deleteIndex) => {
    setToDo(todo.filter((value, index) => index != deleteIndex));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>ToDo</Text>
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
            value={textvalue}
            placeholder="Enter your list"
            onChangeText={(value) => {
              settextValue(value);
            }}
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
            onPress={() => (textvalue != '' ? onSave() : null)}
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
        <View style={{ backgroundColor: 'white', marginTop: 15, height: 500 }}>
          {todo !== [null] ? (
            todo.map((item, index) => {
              return (
                <View key={index} style={{ marginBottom: 15, marginTop: 15 }}>
                  <TaskItem
                    index={index + 1}
                    task={item}
                    deleteTask={() => deleteTask(index)}
                  />
                </View>
              );
            })
          ) : (
            <Text>Please Write Something</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ToDo;

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
