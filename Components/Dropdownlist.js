import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useGlobalContext } from '../context/context';

const Dropdownlist = (props) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { age, setAge, yourAre, setYouAre, firstChild, setFirstChild, text } =
    useGlobalContext();
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#878383' }]}>
          {props.name}
        </Text>
      );
    }
    return null;
  };
  const result = () => {
    if (props.placeholderName === text[0]) {
      return age;
    } else if (props.placeholderName === text[1]) {
      return yourAre;
    } else if (props.placeholderName === text[2]) {
      return firstChild;
    }
  };
  return (
    <View style={styles.container}>
      {renderLabel()}
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
          if (props.placeholderName === text[0]) {
            setAge(item.value);
            setIsFocus(false);
          } else if (props.placeholderName === text[1]) {
            setYouAre(item.value);
            setIsFocus(false);
          } else if (props.placeholderName === text[2]) {
            setFirstChild(item.value);
            setIsFocus(false);
          }
        }}
      />
    </View>
  );
};

export default Dropdownlist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // padding: 16,
  },
  dropdown: {
    height: 50,

    borderColor: '#CCC5C5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
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
  placeholderStyle: {
    fontSize: 18,
    color: '#b2b2b2',
    // fontWeight: 'bold',
  },
  selectedTextStyle: {
    fontSize: 16,
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
