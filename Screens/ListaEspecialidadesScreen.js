import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import Especialidad from '../Components/Especialidad'

const ListaEspecialidadesScreen = ({navigation}) => {

  const renderDoctores = ({item}) => {
    return(
        <Especialidad item={item} navigation={navigation}/>
    );
};

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <FlatList
            data={especialidades}
            renderItem={renderDoctores}
            keyExtractor={(item) => item.idespecialidad}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f5f5f5'
  }
})

export default ListaEspecialidadesScreen