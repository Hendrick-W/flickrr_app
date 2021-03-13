import React from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {  useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import {searchAction} from '../actions/searchAction';

const SearchBar = ({
  value, onChange, onDelete, mode, changeMode
}) => {
  const dispatch = useDispatch();
  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
    <View style={{flexDirection:'row', alignItems:'center', margin:10, borderTopRightRadius:20, borderBottomRightRadius: 20, overflow:'hidden'}}>
      <TextInput style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        placeholder={'Add tag(s)...'}
        onChangeText={onChange}
      />
      {value.trim().length > 0 && 
      <TouchableOpacity style={{position:'absolute', right: 100}}
        onPress={()=> onDelete()}
      >
        <IconFeather name="x" size={24} color="#000"/>
      </TouchableOpacity>
      }
      
      <TouchableOpacity style={styles.button}
        onPress={()=> dispatch(searchAction({tags:value, mode:mode}))}
      >
          <Icon name="search1" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
      <TouchableOpacity style={{flexDirection:'row'}}
        onPress={()=>changeMode('all')}
      >
        <IconMI name={mode == 'all' ? "radio-button-checked" : "radio-button-unchecked"} size={20}/>
        <Text>Include all tags</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row'}}
        onPress={()=>changeMode('any')}
      >
        <IconMI name={mode == 'any' ? "radio-button-checked" : "radio-button-unchecked"} size={20}/>
        <Text>Include any tag</Text> 
      </TouchableOpacity>
    </View>
    </View>
)};

const styles=StyleSheet.create({
  textInput:{
    flex:3,
    borderWidth:1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding:10,
    paddingRight: 50,
  },
  button:{
    flex:1,
    backgroundColor: "#d3d3d3",
    height:"95%",
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize: 16,
    color:'white'
  }
})

export default SearchBar;
