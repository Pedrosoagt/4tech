import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';

export default class App extends React.Component {

  renderList() {
    const vagas = [
      {nome: 'minha vaga', id: '1'},
      {nome: 'minha vaga', id: '2'},
      {nome: 'minha vaga', id: '3'},
      {nome: 'minha vaga', id: '4'}
    ]
    const separatorStyle ={
      flexGrow:1, height:5, backgroundColor: '#fff'
    }

    return(
      <FlatList 
        data={vagas}
        style={{ flex: 1, backgroundColor: 'white'}}
        renderItem={({item}) => this.renderItem(item)}
        ItemSeparatorComponent= {() => <View style={separatorStyle}/>}
        keyExtractor= {(item) => `${item.id}`}
      />
    )
  }

  renderItem(vaga) {
    return (
      <Text style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight: 48,
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#ccc'
      }}>
        {vaga.nome}
      </Text>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderList()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
