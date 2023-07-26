import { View, Text, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import logo from '../assets/logo-mercado-pago.webp'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Alert } from 'react-native';

const PagoScreen = ({navigation}) => {

    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [cvv, setCvv] = useState('');
    const [mmAA, setMMAA] = useState('');

    const handlePagar = () => {
        if (numeroTarjeta && cvv && mmAA) {
            Alert.alert(
                'Pago realizado con exito',
                'Se le enviará un correo con los detalles de la reserva',
                [
                  {
                    text: 'Aceptar',
                    onPress: () => console.log('Aceptar'),
                  },
                ],
                { cancelable: false }
              );
                navigation.navigate('HomeScreen')
            
        } else {
          alert('Por favor, complete todos los campos.');
        }
      };

      const formatCardNumber = (value) => {
        const cardNumber = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
        setNumeroTarjeta(cardNumber);
      };

      const formatMMAA = (value) => {
        const mmAAFormatted = value.replace(/\//g, '').replace(/(\d{2})/g, '$1/').trim();
        setMMAA(mmAAFormatted);
      };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Realiza tu pago</Text>
      <Text style={styles.texto}>Total: S./50</Text>
      <Image source={logo} style={styles.imagen}/>
      <View style={{marginVertical: 40}}>
        <TextInput
        style={styles.input}
        placeholder="Número de tarjeta"
        value={numeroTarjeta}
        onChangeText={formatCardNumber}
        keyboardType="numeric"
        maxLength={19}
        />
        <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        maxLength={3}
        />
        <TextInput
        style={styles.input}
        placeholder="MM/AA"
        value={mmAA}
        onChangeText={formatMMAA}
        keyboardType="numeric"
        maxLength={5}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.btnPagar} onPress={handlePagar}>
            <Text style={styles.pagar}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 30
    },
    imagen: {
        width: 350,
        height: 90,
    },
    texto: {
        fontSize: 20,
        marginVertical: 20,
        color: '#1512a4',
        fontWeight: 'bold'
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    btnPagar: {
        backgroundColor: '#1512a4',
        width: 200,
        padding: 10,
        borderRadius: 15
    },
    pagar: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default PagoScreen