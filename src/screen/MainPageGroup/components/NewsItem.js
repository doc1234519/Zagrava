import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {dimension} from '../../../styles';
import {NEWS_LIST} from '../../../data/news';

const NewsItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <Image source={item.image} style={styles.image} resizeMode={'stretch'}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  image: {
    height: dimension.width * 0.7,
    width: dimension.width * 0.85,
    margin:dimension.small,
    borderRadius:dimension.borderRadius
  },
});
export default NewsItem;
