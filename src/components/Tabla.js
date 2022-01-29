import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faListAlt } from '@fortawesome/free-solid-svg-icons';
const Tabla = ({data}) => {
    console.log(data)
    const [vehiculos, setVehiculos] = useState([])
    //este estado es para seleccionar todos los registros a la vez
    const [todos, setTodos] = useState(false)
    //este metodo sirve para seleccionar todos los registros que hay en la tabla
    const SeleccionarTodos = () => setTodos(!todos)
    useEffect(()=>{
        setVehiculos(data)
    }, [data])
    return ( 
        <div className="col contenedor">
                <div className="col-12 caja-head ">
                    <div className="col d-flex justify-content-between align-items-center contenedor-head">
                        <div className="col col-5 d-flex">
                            <div className="col-1">
                                <FontAwesomeIcon className='icon-page' icon={faListAlt} />
                            </div>
                            <div className="col-9">
                                <h2>Vehículos</h2>
                            </div>
                        </div>
                        <div className="col col-2">
                            <button type='button'>Nuevo vehículo</button>
                        </div>
                    </div>
                </div>
                <div className="caja-tabla">
                    <div className="tabla">
                        <div className="header-tabla d-flex align-items-center ">
                            <input type="checkbox" className='checkbox' onChange={SeleccionarTodos}/>
                            <div className='corto'>
                                <h4>Matrícula</h4>
                            </div>
                            <div className='corto'>
                                <h4>Marca</h4>
                            </div>
                            <div className='largo'>
                                <h4>Modelo</h4>
                            </div>
                            <div className='corto'>
                                <h4>Kilómetros</h4>
                            </div>
                            <div className='corto'>
                                <h4>Contrato</h4>
                            </div>
                            <div className='medio'>
                                <h4>Tipo de vehículo</h4>
                            </div>
                            <div className='corto'>
                                <h4>Capacidad</h4>
                            </div>
                            <div className='corto'>
                                <h4>Cliente</h4>
                            </div>
                            <div className='corto'>
                                <h4>Rotulación</h4>
                            </div>
                            <div className='medio'>
                                <h4>Fecha de adquisición</h4>
                            </div>
                            <div className='medio'>
                                <h4>Fecha de devolución</h4>
                            </div>
                            <div className='corto'>
                                <h4>Estado</h4>
                            </div>
                            <div className='medio'>
                                <h4>Próxima ITV</h4>
                            </div>
                            <div className='medio'>
                                <h4>Tipo de Servicio</h4>
                            </div>
                        </div>
                        {
                            vehiculos.map(item => (
                                <div key={item.id} className="row-tabla d-flex align-items-center ">
                                    <input type="checkbox" className='checkbox' checked={todos}/>
                                    <div className='corto'>
                                        <p>{item.matricula}</p>
                                    </div>
                                    <div className='corto'>
                                        <p>{item.marca}</p>
                                    </div>
                                    <div className='largo'>
                                        <p>{item.modelo}</p>
                                    </div>
                                    <div className='corto'>
                                        <p>{item.kilometros}</p>
                                    </div>
                                    <div className='corto'>
                                        <p>{item.contrato}</p>
                                    </div>
                                    <div className='medio'>
                                        <p>{item.tipo}</p>
                                    </div>
                                    <div className='corto'>
                                        <p>{item.capacidad}</p>
                                    </div>
                                    <div className='corto'>
                                        <p>{item.cliente}</p>
                                    </div>
                                    <div className='corto'>
                                        <p>{item.rotulacion}</p>
                                    </div>
                                    <div className='medio'>
                                        <p>{item.adquisicion}</p>
                                    </div>
                                    <div className='medio'>
                                        <p>{item.devolucion}</p>
                                    </div>
                                    <div className='corto'>
                                        <p>{item.estado}</p>
                                    </div>
                                    <div className='medio'>
                                        <p>{item.itv}</p>
                                    </div>
                                    <div className='medio'>
                                        <p>{item.servicio}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
     );
}
 
export default Tabla;