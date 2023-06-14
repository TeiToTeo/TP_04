import React, { useState } from "react";

const Formu = () => {
  const [texto, setTexto] = useState({
    nombre: null,
    dueño: null,
    fecha: null,
    hora: null,
    sintomas: null
  });

  const handleChange = (e) => {
    setTexto({...texto, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    setTexto({...texto, [e.target.name]: e.target.value});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <span>{texto && JSON.stringify(texto)}</span>
      <input type="text" class="u-full-width" placeholder="Nombre Mascota" onChange={handleChange} name="nombre"/>
      <input type="text" class="u-full-width" placeholder="Nombre Dueño" onChange={handleChange} name="dueño"/>
      <input type="date" class="u-full-width" onChange={handleChange} name="fecha"/>
      <input type="time"  class="u-full-width"  onChange={handleChange} name="hora"/>
      <textarea  class="u-full-width" onChange={handleChange} name="sintomas"/>
      <button type="submit" class="u-full-width button-primary">Agregar Cita</button >
      </form>
    </>
  );
};

export default Formu;
