import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Slideshow from 'react-native-image-slider-show';
const Images = () => {
  const [data, setData] = useState([{}]);
  const [rawData, setRawData] = useState([]);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState();

  let dataImage = [];
  const dataFetch = async () => {
    try {
      const response = await fetch(
        'https://pregnancytracker-6648d-default-rtdb.firebaseio.com/pregnancy.json'
      );
      const resData = await response.json();
      // console.log(resData);

      const result = Object.values(resData);
      console.log(result);
      if (result) {
        let i = 0;
        let ImageData;
        setData(result);
        setRawData(resData);
        // for (i; i === 40; i++) {
        //   return console.log(result[i].DImage);
        // }
        setTitle(Object.keys(resData));
        // console.log(resData..DImage);
        console.log(title);
        console.log(data);
        // console.log(image);
        // console.log(title.sort());
        // for (i; i <= 40; i++) {
        //   return console.log(resData.title[i].DImage);
        // }
        // {
        //   resData.map((item, index) => {
        //     console.log(item);
        //   });
        // }
      } else {
        new Error('The result is empty cant trigger rerender');
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);
  useEffect(() => {
    dataFetch();
    // setImage(rawData.title.DImage);
  }, []);

  {
    data.map((item, index) => {
      console.log(item.DImage);
      // const manu = () => {
      //   let i = 0;
      //   for (i; i <= 42; i++) {
      //     if (item.DImage === '') {
      //       return
      //     }
      //   }
      // };
      const imageData = { title: `Week ${index}`, url: item.scanImage };
      return dataImage.push(imageData);
      // console.log(imageData);
      // setImage(image.push(item.DImage));
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Images</Text>
      <View style={{ height: 500 }}>
        <Slideshow
          titleStyle={{ fontSize: 20, color: 'white' }}
          height={500}
          dataSource={dataImage.splice(4)}
        />
      </View>
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 15,
    // // margin: 15,
    // marginTop: 16,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
  },
});
