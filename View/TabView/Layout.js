import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screen/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
// import { Feather } from '@expo/vector-icons';
import Explore from '../Screen/Explore';
import Tools from '../Screen/Tools';
const Tab = createBottomTabNavigator();
const Layout = () => {
  // <View style={styles.container}>
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'map' : 'map';
          } else if (route.name === 'Tools') {
            iconName = focused ? 'briefcase' : 'briefcase';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        initialRouteName: 'Home',
        tabBarActiveTintColor: '#92AADA',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Tools" component={Tools} />
    </Tab.Navigator>
  );

  // </NavigationContainer>
  // </View>
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Layout;
