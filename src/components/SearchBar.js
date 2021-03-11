import React from 'react';
import { TextInput, View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const SearchBar = ({
  value, onChange, params, onSubmit
}) => {
  return (
    <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
      <TextInput style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.button}
        onPress={()=> onSubmit(value)}
      >
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
    </View>
)};

const styles=StyleSheet.create({
  textInput:{
    flex:3,
    borderWidth:1,
    padding:10,
    minHeight: "10%"
  },
  button:{
    flex:1,
    backgroundColor: "#d3d3d3",
    height:"100%",
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize: 16,
    color:'white'
  }
})

export default SearchBar;
