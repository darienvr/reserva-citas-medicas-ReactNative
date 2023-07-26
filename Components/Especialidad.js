import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Especialidad = ({item, navigation}) => {

  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Especialidad', {item:item})}>
          <View style={styles.lista}>
            <Image source={{uri: item.urlImagen}} style={styles.imagenDoctores} />
            <Text style={styles.nombreDoctor}>{item.nombreespecialidad}</Text>
          </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    imagenDoctores:{
      width: '100%',
      height: 125,
      borderRadius: 15,
      marginRight: 20,
    },
    lista:{
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 20,
      backgroundColor: '#ededed',
      borderColor: 'transparent',
      padding: 15,
    },
    nombreDoctor: {
      fontSize: 18,  
      maxWidth: 180, 
      fontWeight:'bold', 
    }
  })

export default Especialidad