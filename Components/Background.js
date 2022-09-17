import { StyleSheet, View } from 'react-native';

const Background = () => {
  return (
    <View style={styles.container}>
      <View style={styles.eclipesbox}>
        <View style={styles.eclipesone} />
        <View style={styles.eclipestwo} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    // position: 'absolute',
    // justifyContent: 'center',
    height: '100%',
    top: -50,
  },
  eclipesone: {
    backgroundColor: 'rgb(55, 189, 219)',
    // position: 'absolute',
    borderRadius: 500,
    width: 200,
    height: 200,
    left: -75,
    top: -5,
    opacity: 0.3,
  },
  eclipestwo: {
    backgroundColor: 'rgb(55, 189, 219)',
    // position: 'absolute',
    borderRadius: 500,
    width: 200,
    height: 200,
    left: -130,
    top: -150,
    opacity: 0.3,
  },
  // eclipesbox: {
  //   width: 276.5,
  //   height: 276.5,
  // },
});

export default Background;
