import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDateData] = useState(new Date());
  const [dueDate, setDueDate] = useState(date);
  const [getDate, setGetDate] = useState('');
  const [text, setText] = useState([
    'Age',
    'You are the',
    'Is this your first child?',
  ]);
  // const [valueFor, setValueFor]=useState(['Sex','FirstChild', 'Age', "Your are the"])
  const [value, setvalue] = useState(null);
  const [data, setData] = useState([{}]);
  const [isFocus, setIsFocus] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [youAre, setYouAre] = useState('');
  const [firstChild, setFirstChild] = useState('');
  const [signed, setSigned] = useState(false);
  const [sex, setSex] = useState('Unkown');
  const [image, setImage] = useState('');
  const [key, setKey] = useState('');
  const [week, setWeek] = useState('week');
  const [personname, setPersonName] = useState('');
  const [body, setBody] = useState('');
  const [baby, setBaby] = useState('');
  const [healthtips, setHealthtips] = useState('');
  const emailValidator = () => {
    if (email == '') {
      setShowError(true);
      return setErrorEmail('Please enter an Email address !');
    }

    if (password == '') {
      setShowError(true);
      return setErrorPassword('Please enter your Password !');
    } else if (password !== '' && email !== '') {
      return setShowError(false);
    }
  };
  const duedateCalcHappen = () => {
    setIsOpen(true);
    setDueDate(date.setDate(date.getDate() + 280));
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateData(currentDate);
    duedateCalcHappen();
    setIsOpen(false);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const createUsers = async (
    email,

    password,
    name,
    age,
    youAre,
    firstChild,
    dueDate
  ) => {
    try {
      const response = await fetch(
        'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/users.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,

            password: password,
            name: name,
            age: age,
            youAre: youAre,
            firstChild: firstChild,
            dueDate: dueDate,
          }),
        }
      );
      const resData = await response.json();
      console.log(resData);

      return resData;
    } catch (error) {
      console.log(error);
    }
  };
  // const showTimepicker = () => {
  //   showMode('time');
  // };
  // const dueDateCalculator = (item) => {
  //   return item.setDate(date.getDate() + 280);
  // };
  const updateUser = async (
    name,
    age,
    youAre,
    firstChild,
    dueDate,
    sex,
    babyName
  ) => {
    try {
      const response = await fetch(
        'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/users.json',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            age: age,
            youAre: youAre,
            firstChild: firstChild,
            dueDate: dueDate,
            babySex: sex,
            babyName: babyName,
          }),
        }
      );
      const resData = await response.json();
      console.log(resData);

      return resData;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dueDate;
  }, [date]);

  const calculator = (endDate, startDate) => {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;

    return Math.round(Math.abs(endDate - startDate) / msInWeek);
  };
  return (
    <AppContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        showPassword,
        setShowPassword,
        errorEmail,
        setErrorEmail,
        errorPassword,
        setErrorPassword,
        showError,
        setShowError,
        emailValidator,
        modalVisible,
        setModalVisible,
        date,
        setDateData,
        showDatepicker,
        dueDate,
        setDueDate,
        isOpen,
        setIsOpen,
        createUsers,
        text,
        setText,
        value,
        setvalue,
        name,
        setName,
        isFocus,
        setIsFocus,
        signed,
        setSigned,
        age,
        setAge,
        youAre,
        setYouAre,
        firstChild,
        setFirstChild,
        sex,
        setSex,
        updateUser,
        data,
        setData,
        key,
        setKey,
        calculator,
        getDate,
        setGetDate,
        week,
        setWeek,
        personname,
        setPersonName,
        baby,
        setBaby,
        healthtips,
        setHealthtips,
        body,
        setBody,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
