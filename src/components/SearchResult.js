import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const SearchResult = ({
    params, value
}) => {
  return (
    <View>
      <Text>SearchResult</Text>
      <Text>{value}</Text>
    </View>
)};

export default SearchResult;
