import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Associação GEGAI</Text>
      </View>
     
      <Text style={styles.heading}>Escreva sua publicação aqui:</Text>
 
      <View style={styles.tabContent}>
        <View style={styles.tabPane}>
          <View style={styles.form}>
            <Text style={styles.label}>Conteúdo:</Text>
            <TextInput
              style={styles.textArea}
              multiline={true}
              numberOfLines={8}
              required
            />
            <TouchableOpacity
              style={styles.publishButton}
              onPress={() => console.log("Publicar")} // Replace with your submit function
            >
              <Text style={styles.buttonText}>Publicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>(19) 4567-7844 - © 2024 GEGAI</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdbc5',
  },
  header: {
    backgroundColor: '#ff4375',
    color: '#fff',
    textAlign: 'center',
    padding: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  heading: {
    fontSize: 18,
    margin: 10,
  },
  tabContent: {
    flex: 1,
  },
  tabPane: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    maxWidth: 600,
    margin: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textArea: {
    width: 600,
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  publishButton: {
    backgroundColor: '#ff4375',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#ff4375',
    color: '#fff',
    textAlign: 'center',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default App;
