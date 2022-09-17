import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './context/context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Components/SignUp';
import SignUpEmail from './Components/SignUpEmail';
import Login from './Components/Login';
import Register from './Components/Register';
import DueDateCal from './Components/DueDateCalc';
import Calculator from './Components/Calculator';
import ForgetPassword from './Components/ForgetPassword';
import Layout from './View/TabView/Layout';
import Profile from './Home/Profile';
import BabyName from './Home/Calender/BabyName';
import ToDo from './Home/Calender/ToDo';
import ThreeImages from './Home/Calender/ThreeImages';
import Appointment from './Home/Calender/Appointment';
import Images from './Home/Calender/Images';
import DueDate from './Home/DueDate';
import Weight from './Home/Calender/Weight';
import AfricanNames from './Home/Calender/AfricanNames';
import YourBaby from './View/Screen/YourBaby';
import YourBody from './View/Screen/YourBody';
import HealthTips from './View/Screen/HealthTips';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="DueDateCalc" component={DueDateCal} />
            <Stack.Screen name="Calculator" component={Calculator} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="Profile" component={Profile} />

            <Stack.Screen name="Tab" component={Layout} />
            <Stack.Screen name="BabyName" component={BabyName} />
            <Stack.Screen name="ToDo" component={ToDo} />
            <Stack.Screen name="Weight" component={Weight} />
            <Stack.Screen name="ThreeImages" component={ThreeImages} />
            <Stack.Screen name="AfricanNames" component={AfricanNames} />
            <Stack.Screen name="Appointment" component={Appointment} />
            <Stack.Screen name="Images" component={Images} />
            <Stack.Screen name="DueDate" component={DueDate} />
            <Stack.Screen name="YourBaby" component={YourBaby} />
            <Stack.Screen name="YourBody" component={YourBody} />
            <Stack.Screen name="HealthTips" component={HealthTips} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </AppProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingLeft: 35,
    // paddingRight: 35,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
    maxWidth: '100%',
    maxHeight: '100%',
  },
});
