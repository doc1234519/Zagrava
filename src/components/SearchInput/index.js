import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles';

const SearchInput = props => {
  const {onChangeText, text, counterBasket} = props;

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name={'search-outline'} size={24} />
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search..."
        />
        <Pressable style={styles.close}>
          <Icon name={'backspace-outline'} size={24} />
        </Pressable>
      </View>
      <TouchableOpacity style={styles.basketIcon}>
        <View>
          <IconFontAwesome5 name={'shopping-basket'} size={24} />
          <View style={styles.basketCounterContainer}>
            <Text style={styles.basketCounter}>{counterBasket}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  close: {
    width: '10%',
    backgroundColor: colors.secondary,
    height: 40,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: colors.secondary,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '10%',
  },
  textInput: {
    height: 40,
    backgroundColor: colors.secondary,

    flex: 1,
    width: '100%',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    flex: 1,
  },
  basketIcon: {
    alignSelf: 'center',
    padding: 2,
    marginRight: 15,
    // backgroundColor:colors.secondary
  },
  basketCounterContainer:{
    height:18,
    width:18,
    backgroundColor:colors.secondary,
    position:'absolute',
    bottom:-8,
    right:-5,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
  },
  basketCounter:{
    // alignSelf:'center',
    color:colors.main,
    fontSize:10,
    fontWeight:'500'
  }
});

export default SearchInput;
