import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>i bet losing dogs</Text>
      <Image source={{ uri: 'https://m.media-amazon.com/images/M/MV5BMTYwMjQ4MDE3Nl5BMl5BanBnXkFtZTcwNzQ0NDAyNA@@._V1_.jpg' }} style={styles.image} />
      
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button mode="contained" onPress={() => navigation.navigate('About')}>
          sobre
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Home')}>
          inicio
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 50,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white'
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
});