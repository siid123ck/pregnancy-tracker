import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useGlobalContext } from '../../context/context';
import { auth } from '../../firebase/config';

const DropDownProfile = (props) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const {
    age,
    setAge,
    youAre,
    setYouAre,
    firstChild,
    setFirstChild,
    text,
    dueDate,
    name,
    sex,
    setSex,
    updateUser,
    data,
  } = useGlobalContext();

  //   const renderLabel = () => {
  //     if (value || isFocus) {
  //       return (
  //         <Text style={[styles.label, isFocus && { color: '#b2b2b2' }]}>
  //           {props.name}
  //         </Text>
  //       );
  //     }
  //     return null;
  //   };
  const result = () => {
    if (props.placeholderName === 'Unknown') {
      return props.sex;
    } else if (props.placeholderName === 'Yes') {
      return props.first;
    } else if (props.placeholderName === 'Age') {
      return props.ageof;
    } else if (props.placeholderName === 'YouAre') {
      return props.youArethe;
    }
  };
  {
    data.map((item, index) => {
      if ((auth.currentUser.email === item.email) === true) {
        useEffect(() => {
          updateUser(
            undefined,
            age || props.age,
            youAre || props.youAre,
            firstChild || props.firstChild,
            dueDate,
            sex,
            undefined
          );
        }, [age, youAre, firstChild, dueDate, sex]);
      }
    });
  }

  return (
    <View style={styles.container}>
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#878383' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={props.data}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? props.placeholderName : '...'}
        searchPlaceholder="Search..."
        value={result()}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          if (props.placeholderName === 'Unkown') {
            setSex(item.value);
            setIsFocus(false);
          } else if (props.placeholderName === 'Yes') {
            setFirstChild(item.value);
            setIsFocus(false);
          } else if (props.placeholderName === 'Age') {
            setAge(item.value);
            setIsFocus(false);
          } else if (props.placeholderName === 'YouAre') {
            setYouAre(item.value);
            setIsFocus(false);
          }
        }}
      />
    </View>
  );
};

export default DropDownProfile;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // padding: 16,
    marginBottom: 11,
  },
  dropdown: {
    height: 30,
    width: 100,
    borderColor: '#CCC5C5',

    // borderWidth: 1,
    borderRadius: 8,
    // paddingHorizontal: 8,

    // backgroundColor: 'white',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: -7,
    zIndex: 9999,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // height: 500,
    flex: 1,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 18,
    color: '#b2b2b2',
    // fontWeight: 'bold',
  },
  selectedTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
