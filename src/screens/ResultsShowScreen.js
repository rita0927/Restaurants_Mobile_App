import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const [result, setResult] = useState(null)

  // console.log(result)

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }


  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.phone}</Text>
      <Text>{result.location.address1}, {result.location.city}</Text>

      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    marginVertical: 15,
    fontWeight: 'bold'
  },
  container: {
    alignItems: 'center',
    marginBottom: 15
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 10
  }
})

export default ResultsShowScreen