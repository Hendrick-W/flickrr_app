import React, {useState, useEffect} from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {addFavourite, deleteFavourite} from '../actions/favouriteAction';
import favouriteReducers from '../reducers/favouriteReducers';

const AuthorAndFavourite = ({
  author_id, author_name, imageUrl, title, imagelink
}) => {
  const {favourite} = useSelector(state =>state.favourite)
  const [included, setIncluded] = useState(favourite.some(item => item.imageUrl == imageUrl))
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleDelete = (value) => {
    dispatch(deleteFavourite(value))
  }
  const handleFavourite = (value) => {
    dispatch(addFavourite(value))
  }
  useEffect(() => {
    setIncluded(favourite.some(item => item.imageUrl == imageUrl))
  }, [favourite]);
  return (
    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal: 10}}
       onPress={()=>{
         navigation.navigate('Detail', {imagelink:`https://www.flickr.com/photos/${author_id}/`})
       }}
     >
       <View style={{flexDirection:'row', alignItems:'center'}}>
         <Icon name="person-circle" size={45} color={'#d8d8d8'}/>
         <Text>{author_name}</Text>
       </View>
       <TouchableOpacity onPress={()=>
         {
           if(included){
             handleDelete(imageUrl)
           } else {
             setIncluded(true)
             handleFavourite({imageUrl, title, imagelink, author_name, author_id})
           }
         }
       }>
         <MaterialIcons name={included ? "favorite":"favorite-border"} size={25} color={included ? "#f4511e" : null} />
       </TouchableOpacity>
     </TouchableOpacity>
)};

export default AuthorAndFavourite;
