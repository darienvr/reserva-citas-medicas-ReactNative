import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PasosCita = ({paso}) => {
  return (
    <View style={styles.pasos}>
            <Text style={paso === 1 ? styles.numeroPasos : styles.pasoHecho}>{paso === 1 ? '1' : '✓'}</Text>
            <View style={styles.separacionPasos}></View>
            <Text style={paso === 2 ? styles.numeroPasos : (paso === 3 ? styles.pasoHecho : styles.numeroPasosOculto)} >{paso === 2 ? '2' : '✓'}</Text>
            <View style={styles.separacionPasos}></View>
            <Text style={paso === 3 ? styles.numeroPasos : styles.numeroPasosOculto}>3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    pasos: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
    numeroPasos: {
        backgroundColor: '#1512a4',
        color: '#fff',
        padding: 5,
        fontSize: 40,
        borderRadius: 15,
        width: 60,
        textAlign: 'center'
    },
    separacionPasos: {
        width: 30,
        borderWidth: 1,
        height: 1,
    },
    numeroPasosOculto: {
        backgroundColor: '#ededed',
        color: '#ededed',
        padding: 5,
        fontSize: 40,
        borderRadius: 15,
        width: 60,
        textAlign: 'center'
    },
    pasoHecho: {
        backgroundColor: 'rgba(20, 18, 164, 0.5)',
        color: '#fff',
        padding: 5,
        fontSize: 40,
        borderRadius: 15,
        width: 60,
        textAlign: 'center'
    }
})

export default PasosCita