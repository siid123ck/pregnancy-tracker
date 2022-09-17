import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useGlobalContext } from '../context/context';
const ImageBar = ({ navigation }) => {
  const { week, personname } = useGlobalContext();
  return (
    <View style={{ maxWidth: '100%' }}>
      <Pressable
        style={{
          color: 'blue',
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'white',
          borderRadius: 100,
          left: 300,
          bottom: -40,
          top: -30,
        }}
        onPress={() => navigation.navigate('Profile')}
      >
        <MaterialCommunityIcons
          name="face-man-profile"
          size={90}
          color="#CCC5C5"
        />
      </Pressable>
      <View>
        <View style={styles.box}>
          <View
            style={{
              width: '100%',
              height: 500,
              borderRadius: 15,
              // position: 'absolute',
            }}
          >
            <Image
              style={{
                width: '100%',
                height: 500,
                borderRadius: 15,
                //   aspectRatio:2.25/3
                // position: 'absolute',
              }}
              source={{
                uri: 'https://tse4.mm.bing.net/th?id=OIP.R13seHsZfnXNFg2pU10EZAHaEK&pid=Api&P=0',
              }}
            />
          </View>

          <View
            style={{
              padding: 15,
              position: 'absolute',
              display: 'flex',
              justifyContent: 'flex-start',
              // top: 0,
              height: 500,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                zIndex: 5,
              }}
            >
              Good Morning,
            </Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
              {personname}
            </Text>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'white',
                  // display: 'flex',
                  // flexDirection: 'row',
                  // flex: 1,
                  // justifyContent: 'flex-end',
                }}
              >
                Week {week}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    height: 500,
    width: 393,
    borderRadius: 15,
    backgroundColor: 'black',
    position: 'relative',
    top: -80,
    opacity: 0.9,
    display: 'flex',
  },
});
export default ImageBar;
