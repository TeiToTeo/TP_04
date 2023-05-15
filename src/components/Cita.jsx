
//Usar props para pasar citas
const Cita = (props) => {
    return (<div class="cita">
              <p>Mascota: <span>{props.name}</span></p>
              <p>Dueño: <span>{props.user}</span></p>
              <p>Fecha: <span>{props.date}</span></p>
              <p>Hora: <span>{props.hora}</span></p>
              <p>Sintomas: <span>{props.sintomas}</span></p><button class="button elimnar u-full-width">Eliminar x</button>
            </div>
            );
}
export default Cita;