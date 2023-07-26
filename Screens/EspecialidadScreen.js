import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Especialidad from '../Components/Especialidad'

const EspecialidadScreen = ({navigation, route}) => {

  const {item} = route.params

  return (
    <View style={styles.container}>
      <Especialidad item={item} navigation={navigation}/>
      <View>
        <Text style={styles.titulo}>{item.nombreespecialidad}</Text>
        <Text style={styles.texto}>
            {item.descriespecialidad}
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.btnAgendar} onPress={()=>navigation.navigate('Agenda tu cita')}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            Agendar Cita
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  titulo: {
    fontSize: 20,
    color: '#1512a4',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15
  },
  texto: {
    color: '#3c3c43'
  },
  btnAgendar: {
    marginVertical: 60,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    width: 150,
  },
  imagenDoctores: {
    width: '70%',
    height: 150,
    borderRadius: 15
  },
})

export default EspecialidadScreen