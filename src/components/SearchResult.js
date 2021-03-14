import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {searchAction} from '../actions/searchAction';

import Picture from './Picture';
import AuthorAndFavourite from './AuthorAndFavourite';

const SearchResult = ({onChangeOffset}) => {
  const {result} = useSelector((state) => state.search);
  const [offsetY, setOffsetY] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchAction({tags: '', tagmode: 'all'}));
  }, []);
  return (
    <>
      <FlatList
        data={result}
        onScrollBeginDrag={(event) => {
          setOffsetY(event.nativeEvent.contentOffset.y);
        }}
        onScrollEndDrag={(event) => {
          offsetY < event.nativeEvent.contentOffset.y
            ? onChangeOffset(false)
            : onChangeOffset(true);
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          const author_name = item.author.match(/"(.*?)"/)[1];
          return (
            <View style={{backgroundColor: '#fff', marginBottom: 30}}>
              <Picture imageUrl={item.media.m} imagelink={item.link} />
              <AuthorAndFavourite
                imageUrl={item.media.m}
                imagelink={item.link}
                author_name={author_name}
                author_id={item.author_id}
                title={item.title}
              />
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  alignSelf: 'center',
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {item.title}
              </Text>
            </View>
          );
        }}
      />
    </>
  );
};

export default SearchResult;
