import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MyContextProvider } from './MyContext';


import HomeScreen from './Screens/HomeScreen';
import ReservarCita from './Screens/ReservarCita';
import ListaDoctoresScreen from './Screens/ListaDoctoresScreen';
import ListaEspecialidadesScreen from './Screens/ListaEspecialidadesScreen'
import EspecialidadScreen from './Screens/EspecialidadScreen';
import DoctorScreen from './Screens/DoctorScreen';
import PagoScreen from './Screens/PagoScreen';
import CitasScreen from './Screens/CitasScreen';

const Stack = createStackNavigator()

export default function App() {

  const headerOptions = {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: 'black',
  };

  return (
    <MyContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Citas" component={CitasScreen} options={{headerOptions}}/>
          <Stack.Screen name="Agenda tu cita" component={ReservarCita} options={{headerOptions}}/>
          <Stack.Screen name="Doctores" component={ListaDoctoresScreen} options={{headerOptions}}/>
          <Stack.Screen name="Especialidades" component={ListaEspecialidadesScreen} options={{headerOptions}}/>
          <Stack.Screen name="Doctor" component={DoctorScreen} options={{headerOptions}}/>
          <Stack.Screen name="Especialidad" component={EspecialidadScreen} options={{headerOptions}}/>
          <Stack.Screen name="Pago" component={PagoScreen} options={{headerOptions}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </MyContextProvider>
  );
}

