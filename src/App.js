import './App.css';
import Cita from './components/Cita'
// import Formulario from './components/Formulario';
import FormF from './components/FormF'
import { useState } from 'react'

function App() {
  const [listaCitas, setListaCitas] = useState([{
    mascota: "Blacky",
    dueño: "Jere",
    fecha: "2023-05-08",
    hora: "16:15",
    sintomas: "No está comiendo"
  },{
    mascota: "Nina",
    dueño: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  },{
    mascota: "Sifon",
    dueño: "Flecha",
    fecha: "2023-06-10",
    hora: "09:24",
    sintomas: "Duerme mucho"
  }])

  const agregarCita = (cita) => {
    setListaCitas(listaCitas => [cita, ...listaCitas])
  }
  const eliminarCita = index => {
    setListaCitas(listaCitas => listaCitas.filter((cita, i) => i !== index))
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
      <div className="row">
        <div className="one-half column">
          <h2>Crear mi Cita</h2>
          <FormF submit={agregarCita} />
        </div>
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          {
            listaCitas.map((cita, index) => (
              <Cita key={index} cita={cita} eliminar={() => eliminarCita(index)} />
            ))
          }
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
