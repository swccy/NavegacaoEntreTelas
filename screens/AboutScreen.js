import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>i always want you when im finally fine</Text>
      <Image source={{ uri: 'https://m.media-amazon.com/images/M/MV5BOGNlNGJmNDYtNGE5MC00ZGIyLWFkNmMtMjgzNzAzZTgyYjk1XkEyXkFqcGc@._V1_.jpg' }} style={styles.image} />
      <Text style={styles.text}>
        Nome: raul{"\n"}
        Email: raul.carvalho12@etec.sp.gov.br{"\n"}
        GitHub: github.com/swccy
      </Text>
      
      {/* Ajuste apenas aqui: botões em linha com espaçamento */}
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button mode="contained" onPress={() => navigation.navigate('Home')}>
          inicio
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('Details')}>
          detalhes
        </Button>
      </View>
    </View>
  );
}

// Mantive seus estilos originais (não mexi em nada)
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
    marginBottom: 15,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
});