import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {searchAction} from './actions/searchAction';

import Picture from './components/Picture';
import AuthorAndFavourite from './components/AuthorAndFavourite';

const FavouritePage = ({
}) => {
  const {favourite} = useSelector(state =>state.favourite)
  return (
    <View style={{backgroundColor: favourite.length == 0 ? null: "#000", flex: 1,}}>
      <FlatList
        data={favourite}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item})=>{
          return (
            <View style={{backgroundColor:'#fff', marginBottom: 30}}>
              <Picture 
                imageUrl={item.imageUrl}
                imagelink={item.imagelink}
              />
              <AuthorAndFavourite
                imageUrl={item.imageUrl}
                imagelink={item.imagelink}
                author_name={item.author_name}
                author_id={item.author_id}
                title={item.title}
              />
              <Text style={{alignSelf:'center', fontSize: 20, textAlign:'center', fontWeight:'bold'}}>{item.title}</Text>
            </View>
          )
        }}
      />
    </View>
)};

export default FavouritePage;
