import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { doctores, especialidades } from '../data';
import PasosCita from '../Components/PasosCita';
import DoctorLogo from 'react-native-vector-icons/Fontisto';
import EspecialidadLogo from 'react-native-vector-icons/Octicons';
import FechaLogo from 'react-native-vector-icons/AntDesign';
import HoraLogo from 'react-native-vector-icons/Ionicons';


const ReservarCita = ({navigation}) => {  

  const [selectedEspecialidad, setSelectedEspecialidad] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedFecha, setSelectedFecha] = useState('');
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [especialidad, setEspecialidad] = useState('');
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleConfirmStep = () => {
    if (step === 1  && selectedEspecialidad && selectedDoctor) {
      handleNextStep();
    } else if (step === 2 && selectedFecha && selectedHorario) {
      handleNextStep();
    } else if (step === 3) {
      registrarReserva(selectedClinicaId); 
      navigation.navigate('Pago');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  const handleEspeChange = (especialidadId) => {
    setSelectedEspecialidad(especialidadId);
    setEspecialidad(especialidades.find(item=>{
      if(item.id === especialidadId){
        return item.nombre
      }
    }))
    setSelectedDoctor(null);
    setSelectedFecha(null);
  };

  const handleDoctorChange = (doctorId) => {
    const doctor = doctores.find((item) => item.id === doctorId);
    setSelectedDoctor(doctor || null);
    setSelectedFecha(null);
  };

  const handleFechaChange = (fecha) => {
    setSelectedFecha(fecha);
    setSelectedHorario('');
  };

  const handleHorarioChange = (horario) => {
    setSelectedHorario(horario);
  };

 

  return (
    <View style={styles.container}>
      <PasosCita paso={step}/>
      {step === 1 && ( 
        <View>
          <Text style={styles.tituloPasos}>Paso 1: Elige los detalles</Text>

          <View style={{ marginBottom: 30 }}>
            <Text style={styles.label}>Especialidad</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedEspecialidad}
                onValueChange={handleEspeChange}
                style={styles.picker}
              >
                <Picker.Item label="Escoge una especialidad" value="" enabled={false} style={{color: '#aaa'}} />
                {especialidades.map((item) => (
                  <Picker.Item
                    key={item.id}
                    label={item.nombre}
                    value={item.id}
                  />
                ))}
              </Picker>
            </View>
          </View>
        
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.label}>Doctores</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedDoctor ? selectedDoctor.id : ""}
                onValueChange={handleDoctorChange}
                style={styles.picker}
              >
                <Picker.Item label="Escoge una doctor" value="" enabled={false} style={{color: '#aaa'}} />
                  {
                  doctores
                  .filter((item) => item.especialidad === selectedEspecialidad)
                  .map((doctor) => (
                    <Picker.Item
                      key={doctor.id}
                      label={doctor.nombre}
                      value={doctor.id}
                    />
                  ))}
              </Picker>
            </View>
          </View>
          <View style={styles.contenedorBoton}>
            <TouchableOpacity style={styles.btnContinuar} onPress={handleConfirmStep}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View> 
      )}

      {step === 2 && (

      <View>
        <Text style={styles.tituloPasos}>Paso 2: Escoga fecha y hora</Text>
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.label}>Fecha</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedFecha}
              onValueChange={handleFechaChange}
              style={styles.picker}
            >
              <Picker.Item label="Escoge una fecha" value="" enabled={false} style={{ color: '#aaa' }} />
              {selectedDoctor &&
              selectedDoctor.disponibilidad.map((item) => (
                <Picker.Item
                  key={item.fecha}
                  label={item.fecha}
                  value={item.fecha}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={{ marginBottom: 30 }}>
          <Text style={styles.label}>Horario</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedHorario}
              onValueChange={handleHorarioChange}
              style={styles.picker}
            >
              <Picker.Item label="Escoge un horario" value="" enabled={false} style={{ color: '#aaa' }} />
              {selectedDoctor &&
              selectedDoctor.disponibilidad
                .filter((item) => item.fecha === selectedFecha)
                .map((item) => (
                  <Picker.Item
                    key={item.hora}
                    label={item.hora}
                    value={item.hora}
                  />
                ))}
            </Picker>
          </View>
        </View>

        <View style={styles.contenedorBoton}>
            <TouchableOpacity style={styles.btnContinuar} onPress={handleConfirmStep}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Continuar</Text>
            </TouchableOpacity>
          </View>
      </View>
      )}

      {step === 3 && (
        <ScrollView>
          <View>
            <Text style={styles.tituloPasos}>Paso 3: Revise el resumen de su cita</Text>
              <View style={styles.container}>
                  <View style={styles.confirmarContainer}>
                    <EspecialidadLogo name="checklist" size={30} color="#000" />
                    <View>
                      <Text style={styles.textConfirmar}>Especialidad</Text>
                      <Text style={styles.text}>{especialidad.nombre}</Text>
                    </View>
                  </View>
                
                  <View style={styles.confirmarContainer}>
                      <DoctorLogo name="doctor" size={30} color="#000" />
                      <View>
                        <Text style={styles.textConfirmar}>Doctor</Text>
                        <Text style={styles.text}>{selectedDoctor.nombre}</Text>
                      </View>
                  </View>

                  <View style={styles.confirmarContainer}>
                      <FechaLogo name="calendar" size={30} color="#000" />
                      <View>
                        <Text style={styles.textConfirmar}>Fecha</Text>
                        <Text style={styles.text}>{selectedFecha.substring(0, 10)}</Text>
                      </View>
                  </View>

                  <View style={styles.confirmarContainer}>
                      <HoraLogo name="timer-outline" size={30} color="#000" />
                          <View>
                            <Text style={styles.textConfirmar}>Hora</Text>
                      <Text style={styles.text}>{selectedHorario.substring(0, 5)}</Text>
                      </View>
                </View>

                <TouchableOpacity style={styles.btnContinuar} onPress={handleConfirmStep}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>Confirmar</Text>
                </TouchableOpacity>
              </View>
          </View>
        </ScrollView>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff'
  },
  label: {
    marginBottom: 10,
    color: '#1512a4',
    fontWeight: 'bold',
    fontSize: 25,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 300,
    backgroundColor: '#ddd'
  },
  picker: {
    height: 40,
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },
  btnContinuar: {
    padding: 10,
    backgroundColor: '#ccc',
    width: 180,
    borderRadius: 10,
    alignItems: 'center'
  },
  contenedorBoton: {
    alignItems: 'center',
    marginTop: 30,
  },
  tituloPasos: {
    alignItems: 'center',
    fontSize: 16,
    marginBottom: 10,
    color: '#1512a4',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30
  },
  confirmarContainer: {
    borderColor: '#ccc',
    borderRadius: 10,
    width: 300,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    padding: 18,
    gap: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  textConfirmar: {
    color: '#777', 
    paddingBottom: 5
  }
});

export default ReservarCita;
