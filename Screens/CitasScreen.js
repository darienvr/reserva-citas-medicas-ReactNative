import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CitasScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={{marginVertical: 20, fontSize: 20, color:"#1512a4"}}>Citas pendientes</Text>
      {
        reservas.map((item, index)=>{
          const medico = doctores.find(doctor => doctor.idMedico === item.idmedico);
          const especialidad = especialidades.find(especialidad => especialidad.idespecialidad === item.idespecialidad);
          return(
            <View key={index} style={styles.cita}>
              <Image style={styles.imagenDoctor} source={{uri: medico.urlImagen}} />
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{medico.nombre}</Text>
                <Text>{especialidad.nombreespecialidad}</Text>
                <Text>Dia: {item.fechaagenda.substring(0, 10)}</Text>
                <Text>Hora: {item.horaagenda.substring(0, 5)}</Text>
              </View>
            </View>
          )
        })
      }
      <Text style={{marginVertical: 20, fontSize: 20, color:"#1512a4"}}>Citas anteriores</Text>
      <View style={styles.cita}>
              <Image style={styles.imagenDoctor} />
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Dr. Perez</Text>
                <Text>Gastroenterologia</Text>
                <Text>Dia: 2023-06-12</Text>
                <Text>Hora: 09:00</Text>
              </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  cita: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#dedede',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: 'center'
  },
  imagenDoctor: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 100,
    height: 100,
  }
})

export default CitasScreen