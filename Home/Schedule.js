import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Bar from './Bar';
import { Fontisto, Feather, FontAwesome5 } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Weeks = ({ navigation }) => {
  return (
    <View style={{ ...styles.container, ...styles.elevation }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}>
        Actions
      </Text>
      <View style={{ display: 'flex', flex: 1, marginBottom: 5 }}>
        <View style={styles.actionbox}>
          <View style={styles.icons}>
            <Fontisto name="date" size={24} color="#92AADA" />
          </View>

          <View style={styles.borderStyle}>
            <Pressable onPress={() => navigation.navigate('Appointment')}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Appointment
              </Text>
            </Pressable>

            <Text
              style={{
                color: '#7E8383',
              }}
            >
              Mark your next appointment
            </Text>
          </View>
        </View>
        <View style={styles.actionbox}>
          <View style={styles.icons}>
            <Feather name="list" size={24} color="#92AADA" />
          </View>

          <View style={styles.borderStyle}>
            <Pressable onPress={() => navigation.navigate('ToDo')}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Your to-do list
              </Text>
            </Pressable>

            <Text style={{ color: '#7E8383' }}>To-Do List</Text>
          </View>
        </View>
        <View style={styles.actionbox}>
          <View style={styles.icons}>
            <FontAwesome5 name="weight" size={24} color="#92AADA" />
          </View>

          <View style={{ marginLeft: 30 }}>
            <Pressable onPress={() => navigation.navigate('Weight')}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Current Weight
              </Text>
            </Pressable>

            <Text style={{ color: '#7E8383' }}>Current Weight</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    // height: 200,
    backgroundColor: 'white',
    borderRadius: 15,
    top: -35,
    padding: 10,
    // borderColor: 'black',

    // borderStyle: 'solid',
    // borderWidth: 1,

    // borderWidth: 25,
  },
  elevation: {
    elevation: 2,
    shadowColor: 'black',
  },
  borderStyle: {
    borderColor: '#7E8383',
    borderBottomWidth: 0.5,
    marginLeft: 30,
    marginBottom: 15,
  },
  actionbox: {
    flexDirection: 'row',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 15,
  },
});
export default Weeks;
