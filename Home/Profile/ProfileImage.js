import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ProfileImage = () => {
  return (
    <View>
          
      <MaterialCommunityIcons
        name="face-man-profile"
        size={70}
        color="#CCC5C5"
      />
   
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({})