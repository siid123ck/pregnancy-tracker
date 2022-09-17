import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  SectionList,
  TextInput,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Account from './Account';
import { auth } from '../../firebase/config';

import DropDownProfile from './DropDownProfile';
import { babySex } from '../../data/babySex';
import { firstChild } from '../../data/firstChild';
import { useGlobalContext } from '../../context/context';
// import sex from "./data.js"
const Data = [
  {
    id: 1,
    title: "Baby's sex",
    image: 'gender-male-female-variant',
    options: [
      { label: 'Boy', value: 'Boy' },
      {
        label: 'Girl',
        value: 'Girl',
        selected: true,
      },
      { label: 'Twins', value: 'Twins' },
      { label: 'Unknown', value: 'Unknown' },
    ],
    // sex:{1:'Boy',2:'Girl',3:'Twins',4:'Unknown'}
  },
  {
    id: 2,
    title: "Baby's name",
    image: 'baby',
    options: '',
  },
  {
    id: 3,
    title: 'Due date',
    image: 'update',
    options: '',
  },
  {
    id: 4,
    title: 'Due date calculator',
    image: 'calculator',
    options: '',
  },
  {
    id: 5,
    title: 'FirstChild',
    image: 'human-male-female-child',
    options: '',
    // option:{1:'yes', 2:'No'}
  },
];

const Pregnancy = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const [babyNameh, setBabyName] = useState('');
  // const [profile, setProfile] = useState({});
  const { updateUser, data, setKey, key, setGetDate } = useGlobalContext();
  const sex = [
    { label: 'Boy', value: 'Boy' },
    {
      label: 'Girl',
      value: 'Girl',
      selected: true,
    },
    { label: 'Twins', value: 'Twins' },
    { label: 'Unknown', value: 'Unknown' },
  ];
  const renderItem = ({ item }) => {
    return (
      <Item title={item.title} image={item.image} options={item.options} />
    );
  };
  // const dataFetch = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/users.json'
  //     );
  //     const resData = await response.json();

  //     const result = Object.values(resData);
  //     setKey(Object.keys(resData));
  //     console.log(key);
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
  // useEffect(() => {
  //   dataFetch();
  // }, [data]);
  // const onChangeName = (e) => {
  //   setBabyName(e.target.value);
  // };
  // useEffect(() => {
  //   updateUser(
  //     undefined,
  //     undefined,
  //     undefined,
  //     undefined,
  //     undefined,
  //     undefined,
  //     babyNameh
  //   );
  // }, []);
  // console.log(babySex);

  const Item = ({ title, image, options }) => (
    <View style={styles.container}>
      <View style={{ marginRight: 15 }}>
        <MaterialCommunityIcons name={image} size={24} color="black" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 15 }}>
        Your Pregnancy
      </Text>
      <SafeAreaView
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          marginBottom: 15,
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 1 }}>
          {Data.map((item, index) => {
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
              // setGetDate(item.dueDate);
              return (
                <View key={index}>
                  <DropDownProfile
                    data={babySex}
                    placeholderName={'Unkown'}
                    sex={item.babySex}
                  />
                  <TextInput
                    style={styles.title}
                    placeholder={'Name'}
                    value={babyNameh}
                    onChange={(value) =>
                      setBabyName(value) &&
                      updateUser(
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        babyNameh
                      )
                    }
                  />
                  <TextInput style={styles.title} placeholder={item.dueDate} />
                  <Text style={styles.title}> </Text>

                  <DropDownProfile
                    data={firstChild}
                    placeholderName={'Yes'}
                    first={item.firstChild}
                  />
                </View>
              );
            } else {
              return false;
            }
          })}
        </View>
      </SafeAreaView>

      <Account Item={Item} />
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
export default Pregnancy;
