import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Arrow from 'react-native-vector-icons/SimpleLineIcons';
import {doctores, especialidades} from '../data'
import Icon from 'react-native-vector-icons/AntDesign';

import logo from '../assets/logo.png'
import user from '../assets/user.png'

const HomeScreen = ({navigation}) => {

  const renderDoctores = ({item}) => (
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Doctor', {item:item})}>
            <Image source={item.imagen} style={styles.imagenDoctores} resizeMode="contain"/>
            <Text style={{fontSize: 15, textAlign: 'center', maxWidth: 120}}>{item.nombre}</Text>
        </TouchableOpacity>
      </View>
  );

  const renderEspecialidades = ({item}) => (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Especialidad', {item:item})}>
          <Image source={item.imagen} style={styles.imagenDoctores} />
          <Text style={{fontSize: 15, textAlign: 'center', maxWidth: 120}}>{item.nombreespecialidad}</Text>
      </TouchableOpacity>
    </View>
);

  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <Image source={logo} style={styles.logo}/>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20, gap: 20}}>
        <Image source={user} style={styles.imagenUsuario}/>
        <Text style={{backgroundColor: '#ddd', borderRadius: 15, padding: 10}}>Julia Mediana Perez</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Citas')}>
          <Icon name="book" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.scrollcontainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
          <View style={{flexDirection: 'row', alignItems:'center', marginBottom: 10}}>
            <Text style={styles.texto}>Doctores </Text>
            <Arrow name='arrow-right' size={15} color='black' style={{bottom: -3}}/>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Doctores')}>
            <Text>Ver Todos</Text>
          </TouchableOpacity>
        </View>
        <FlatList
            data={doctores}
            horizontal={true}
            renderItem={renderDoctores}
            keyExtractor={(item) => item.id}
          />
      </View>
      <View style={styles.scrollcontainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
        <View style={{flexDirection: 'row', alignItems:'center', marginBottom: 10}}>
            <Text style={styles.texto}>Especialidades </Text>
            <Arrow name='arrow-right' size={15} color='black' style={{bottom: -3}}/>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Especialidades')}>
            <Text>Ver Todos</Text>
          </TouchableOpacity>
        </View>
        <FlatList
            data={especialidades}
            horizontal={true}
            renderItem={renderEspecialidades}
            keyExtractor={(item) => item.id}
          />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.btnAgendar} onPress={()=>navigation.navigate('Agenda tu cita')}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Agendar Cita
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  imagenDoctores: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginRight: 20,
    borderColor: '#fff',
    borderWidth: 1,
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  scrollcontainer: {
    marginBottom: 30,
  },
  btnAgendar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    width: 250,
  },
  logo: {
    width: 315,
    height: 90,
  },
  imagenUsuario: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
})

export default HomeScreen