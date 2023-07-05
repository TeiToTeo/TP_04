import React, { useState } from "react";


const FormF = ({ submit }) => {

  const [cita, setCita] = useState({})

  const handleChange = e => {
        setCita({...cita, [e.target.name]: e.target.value})
        console.log(cita)
    }

  const handleSubmit = e => {
        e.preventDefault()
        submit(cita)
    }


  return (
    <>
      <form onSubmit={handleSubmit}>
      <input type="text" class="u-full-width" placeholder="Nombre Mascota" onChange={handleChange} name="nombre"/>
      <input type="text" class="u-full-width" placeholder="Nombre Dueño" onChange={handleChange} name="dueño"/>
      <input type="date" class="u-full-width" onChange={handleChange} name="fecha"/>
      <input type="time"  class="u-full-width"  onChange={handleChange} name="hora"/>
      <textarea  class="u-full-width" onChange={handleChange} name="sintomas"/>
      <button type="submit" class="u-full-width button-primary">Agregar Cita</button >
      </form>
    </>
  );
  }

export default FormF;
