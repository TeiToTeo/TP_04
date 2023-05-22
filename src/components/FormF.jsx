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
    </>
  );
};

export default Soplon;
