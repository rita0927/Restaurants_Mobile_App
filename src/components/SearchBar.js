import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather
        name='search'
        style={styles.iconStyle}
      />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        // onChangeText={newTerm => onTermChange(newTerm)}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#dee2e6',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row'
  },
  inputStyle: {
    fontSize: 18,
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10
  }
})

export default SearchBar