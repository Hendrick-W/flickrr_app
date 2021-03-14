import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import {searchAction} from './actions/searchAction';

const HomePage = ({}) => {
  const {result} = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [mode, setMode] = useState('all');
  const [showHeader, setShowHeader] = useState(true);

  const handleSearchText = (value) => {
    setSearchText(value);
  };

  const handleMode = (value) => {
    setMode(value);
  };

  const handleDelete = () => {
    setSearchText('');
  };

  const handleShowHeader = (value) => {
    setShowHeader(value);
  };
  useEffect(() => {
    setShowHeader(true);
  }, [result]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : -500}>
      {showHeader && (
        <View style={styles.searchBar}>
          <SearchBar
            value={searchText}
            onChange={handleSearchText}
            onDelete={handleDelete}
            mode={mode}
            changeMode={handleMode}
          />
        </View>
      )}
      <View style={styles.searchResult}>
        <SearchResult onChangeOffset={handleShowHeader} />
      </View>
      {showHeader && (
        <View>
          <Button
            title="Refresh"
            onPress={() => {
              dispatch(
                searchAction({tags: `${searchText}`, tagmode: `${mode}`}),
              );
            }}
          />
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000'},
  searchBar: {
    flex: 1,
    minHeight: '6%',
  },
  searchResult: {
    flex: 10,
  },
});
export default HomePage;
