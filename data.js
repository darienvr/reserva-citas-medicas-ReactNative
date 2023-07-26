export const doctores = [
  {
    id: 1,
    nombre: "Dr. Juan Pérez",
    especialidad: 1,
    imagen: require('./assets/doctores/doctor1.png'),
    disponibilidad: [
      { fecha: "2023-12-01", hora: "08:00" },
      { fecha: "2023-12-02", hora: "09:00" },
      { fecha: "2023-12-03", hora: "10:00" },
      { fecha: "2023-12-14", hora: "14:00" },
      { fecha: "2023-12-15", hora: "15:00" },
    ],
  },
  {
    id: 2,
    nombre: "Dr. Lilia Cervantez",
    especialidad: 2,
    imagen: require('./assets/doctores/doctor2.png'),
    disponibilidad: [
      { fecha: "2023-12-01", hora: "10:00" },
      { fecha: "2023-12-02", hora: "11:00" },
      { fecha: "2023-12-03", hora: "12:00" },
      { fecha: "2023-12-14", hora: "16:00" },
      { fecha: "2023-12-15", hora: "17:00" },
    ],
  },
  {
    id: 3,
    nombre: "Dra. Mario Hernández",
    especialidad: 3,
    imagen: require('./assets/doctores/doctor3.jpeg'),
    disponibilidad: [
      { fecha: "2023-12-01", hora: "09:00" },
      { fecha: "2023-12-02", hora: "10:00" },
      { fecha: "2023-12-03", hora: "11:00" },
      { fecha: "2023-12-14", hora: "15:00" },
      { fecha: "2023-12-15", hora: "16:00" },
    ],
  },
  {
    id: 4,
    nombre: "Dr. Andrés López",
    especialidad: 4,
    imagen: require('./assets/doctores/doctor4.jpg'),
    disponibilidad: [
      { fecha: "2023-12-01", hora: "13:00" },
      { fecha: "2023-12-02", hora: "14:00" },
      { fecha: "2023-12-03", hora: "15:00" },
      { fecha: "2023-12-14", hora: "19:00" },
      { fecha: "2023-12-15", hora: "20:00" },
    ],
  },
  {
    id: 5,
    nombre: "Dra. Patricio Ramírez",
    especialidad: 5,
    imagen: require('./assets/doctores/doctor5.jpg'),
    disponibilidad: [
      { fecha: "2023-12-01", hora: "11:00" },
      { fecha: "2023-12-02", hora: "12:00" },
      { fecha: "2023-12-03", hora: "13:00" },
      { fecha: "2023-12-14", hora: "17:00" },
      { fecha: "2023-12-18", hora: "18:00" },
    ],
  },
  {
    id: 6,
    nombre: "Dr. Julia Cervantez",
    especialidad: 2,
    imagen: require('./assets/doctores/doctor2.png'),
    disponibilidad: [
      { fecha: "2023-12-01", hora: "10:00" },
      { fecha: "2023-12-02", hora: "11:00" },
      { fecha: "2023-12-03", hora: "12:00" },
      { fecha: "2023-12-04", hora: "16:00" },
      { fecha: "2023-12-15", hora: "17:00" },
    ],
  },
];

export const especialidades = [
  { id: 1, nombre: "Medicina General", imagen: require('./assets/especialidades/especialidad1.png') },
  { id: 2, nombre: "Odontología", imagen: require('./assets/especialidades/especialidad2.png')  },
  { id: 3, nombre: "Dermatología", imagen: require('./assets/especialidades/especialidad3.jpeg')  },
  { id: 4, nombre: "Oftalmología", imagen: require('./assets/especialidades/especialidad4.jpg')  },
  { id: 5, nombre: "Cardiología", imagen: require('./assets/especialidades/especialidad5.jpeg')  },
];



