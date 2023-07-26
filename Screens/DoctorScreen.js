import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Doctor from '../../the_cure_app/Components/Doctor'

const DoctorScreen = ({navigation, route}) => {

  const {item} = route.params

  const especialidad = especialidades.find(
    (especialidad) => especialidad.idespecialidad === item.idEspecialidad
  );

  const descripcionEspecialidad = especialidad
    ? especialidad.descriespecialidad
    : '';

  return (
    <View style={styles.container}>
      <Doctor item={item}/>
      <View>
        <Text style={styles.titulo}>Nuestra especialidad</Text>
        <Text style={styles.texto}>
          {descripcionEspecialidad}
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
  }
})

export default DoctorScreen