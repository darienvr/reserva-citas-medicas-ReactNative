import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import Doctor from '../Components/Doctor'

const DoctorScreen = ({navigation}) => {

  const renderDoctores = ({item}) => {
    return(
        <Doctor item={item} navigation={navigation}/>
    );
};

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <FlatList
            data={doctores}
            renderItem={renderDoctores}
            keyExtractor={(item) => item.idMedico}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  }
})

export default DoctorScreen