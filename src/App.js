//import logo from './logo.svg';
import './App.css';
import Cita from './components/Cita'
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="row">
        <h2>Crear mi Cita</h2>
        <Formulario name1 ="Nombre Mascota"/>
        <input type="text" class="u-full-width" placeholder="Nombre Mascota" value=""/>
        <Formulario name1 ="Nombre Dueño"/>
        <input type="text" class="u-full-width" placeholder="Nombre Dueño" value=""/>
        <Formulario name1 ="Fecha"/>
        <input type="date" name="fecha" class="u-full-width" value=""/>
        <Formulario name1 ="Hora"/>
        <input type="time" name="hora" class="u-full-width" value=""/>
        <Formulario name1 ="Sintomas"/>
        <textarea name="sintomas" class="u-full-width"/>
        <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
      </div>
      <div class="row">
        <h2>Administra tus citas</h2>
        <Cita name="Blacky" user="Jere" date="2023-05-08" hora="16:15" sintomas="No está comiendo"/>
        <Cita name="Nina" user="Martin" date="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>
        <Cita name="Sifon" user="Flecha" date="2023-06-10" hora="09:24" sintomas="Duerme mucho"/>
      </div>
    </div>
  );
}

export default App;
