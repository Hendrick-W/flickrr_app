import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {searchAction} from '../actions/searchAction';

const SearchResult = ({
    params
}) => {
  const {loading, result} = useSelector(state => state.search);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(searchAction({tags:"", tagmode:'all'}))
  }, [])
  return (
    <View>
      <Text>SearchResult</Text>
      <FlatList
        data={result}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item})=>{
          return (
            <Text>{item.title}</Text>
          )
        }}
      />
    </View>
)};

export default SearchResult;
