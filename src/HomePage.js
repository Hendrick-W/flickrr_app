import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, KeyboardAvoidingView, Platform} from 'react-native';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult'

const HomePage = ({
  navigation,
}) => {
  const [searchText, setSearchText] = useState('');
  const [resultPict, setResultPict] = useState('');

  const handleTextChange = (value) => {
    setSearchText(value)
  }
  const handleSubmitSearch = (pict) => {
    setResultPict(pict)
  }

  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : -500}
    > 
      <View style={styles.searchBar}>
        <SearchBar
          value={searchText}
          onChange={handleTextChange}
          onSubmit={handleSubmitSearch}
        />
      </View>
      <View style={styles.searchResult}>
        <SearchResult
          value={resultPict}
        />
      </View>
      <View>
        <Button title="Refresh"/>
      </View>
    </KeyboardAvoidingView>
)};

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:'#fff'},
  searchBar: {
    flex : 1,
    minHeight: "4%"
  },
  searchResult:{
    flex: 10,
  }
})

export default HomePage;
