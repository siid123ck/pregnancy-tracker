import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  SectionList,
  TextInput,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from '../../firebase/config';
import DropDownProfile from './DropDownProfile';
import { age } from '../../data/age';
import { youare } from '../../data/youare';
import { useGlobalContext } from '../../context/context';
const AccountDetails = [
  {
    id: 1,
    title: 'First name',
    image: 'pencil',
  },
  {
    id: 2,
    title: 'Last name',
    image: 'pencil',
  },
  {
    id: 3,
    title: 'Age',
    image: 'numeric-8-box',
  },
  {
    id: 4,
    title: 'You are the',
    image: 'nature-people',
  },
];

const Item = ({ title, image, options }) => (
  <View style={styles.container}>
    <View style={{ marginRight: 15 }}>
      <MaterialCommunityIcons name={image} size={24} color="black" />
    </View>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Account = ({ navigation }) => {
  const [nameval, setNameVal] = useState('');
  const { updateUser, data, setData } = useGlobalContext();
  // const dataFetch = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/users.json'
  //     );
  //     const resData = await response.json();

  //     const result = Object.values(resData);
  //     // console.log(result);
  //     if (result) {
  //       setData(result);
  //     } else {
  //       new Error('The result is empty cant trigger rerender');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // // console.log(data);
  // useEffect(() => {
  //   dataFetch();
  // }, []);

  const OnChange = () => {
    updateUser(nameval);
  };
  useEffect(() => {
    OnChange;
  }, [nameval]);
  return (
    <View>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 15 }}>
          Account
        </Text>
        <SafeAreaView
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            flexDirection: 'row',
          }}
        >
          <View style={{ flex: 1 }}>
            {AccountDetails.map((item, index) => {
              return (
                <View key={index}>
                  <Item
                    title={item.title}
                    image={item.image}
                    options={item.options}
                  />
                </View>
              );
            })}
          </View>

          <View style={{ alignItems: 'flex-end' }}>
            {data.map((item, index) => {
              const { email } = item;
              // console.log(name);
              // console.log(auth.currentUser.email);
              // console.log(email);
              if ((auth.currentUser.email === email) === true) {
                // return console.log(true);
                // setNameVal(item.name);
                return (
                  <View key={index}>
                    <TextInput
                      style={styles.title}
                      value={nameval}
                      placeholder={item.name}
                      onChange={(value) => setNameVal(value)}
                    />
                    <TextInput
                      style={styles.title}
                      value={
                        item.name.includes(' ')
                          ? item.name.slice(' ')
                          : 'surname'
                      }
                    />
                    <DropDownProfile
                      data={age}
                      placeholderName="Age"
                      ageof={item.age}
                      name={item.name}
                    />
                    <DropDownProfile
                      data={youare}
                      placeholderName="YouAre"
                      youArethe={item.youAre}
                    />
                    {/* <Text style={styles.title}>{item.age}</Text>
                    <Text style={styles.title}>{item.youAre}</Text> */}
                  </View>
                );
              } else {
                return false;
              }
            })}
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
});
export default Account;
