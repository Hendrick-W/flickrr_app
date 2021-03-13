import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, Image, Dimensions} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {searchAction} from '../actions/searchAction';
import Picture from './Picture'

const SearchResult = ({
    params, onChangeOffset
}) => {
  const {loading, result, title} = useSelector(state => state.search);
  const [offsetY, setOffsetY] = useState(0)
  const dispatch = useDispatch();
  const [aspectRatio, setAspectRatio] = useState(0)
  useEffect(()=>{
    dispatch(searchAction({tags:"", tagmode:'all'}))
  }, [])
  return (
    <>
      <FlatList
        data={result}
        onScrollBeginDrag={(event)=>{setOffsetY(event.nativeEvent.contentOffset.y)}}
        onScrollEndDrag={(event)=>{offsetY<event.nativeEvent.contentOffset.y?onChangeOffset(false):onChangeOffset(true)}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item})=>{
          return (
            <Picture imageUrl={item.media.m} author={item.author} title={item.title}/>
          )
        }}
      />
    </>
)};

export default SearchResult;
