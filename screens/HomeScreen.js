import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>i wanna feeeeeel it</Text>

      <Image
        source={{
          uri: 'https://mutantexis.wordpress.com/wp-content/uploads/2021/02/blog-skins-americano.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.buttonRow}>
        <Button mode="contained" onPress={() => navigation.navigate('Details')}>
          detalhes
        </Button>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('About')}
          style={styles.buttonRight}
        >
          sobre
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
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  buttonRight: {
    marginLeft: 10,
  },
});