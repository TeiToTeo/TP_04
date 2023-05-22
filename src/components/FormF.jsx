import React, { useState } from "react";

const Soplon = () => {
  const [texto, setTexto] = useState("");

  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <span>{texto}</span>
      poner asi todo
      <Formulario name1="Nombre Mascota" />
      <input type="text" class="u-full-width" placeholder="Nombre Mascota" value="" />
      <Formulario name1="Nombre Dueño" />
      <input type="text" class="u-full-width" placeholder="Nombre Dueño" value="" />
      <Formulario name1="Fecha" />
      <input type="date" name="fecha" class="u-full-width" value="" />
      <Formulario name1="Hora" />
      <input type="time" name="hora" class="u-full-width" value="" />
      <Formulario name1="Sintomas" />
      <textarea name="sintomas" class="u-full-width" />
      <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
    </>
  );
};

export default Soplon;
