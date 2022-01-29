import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faListAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/filter-vehiculos.css';
import '../css/container-vehiculos.css';
import Data from './data.json'
import Tabla from './Tabla';
const Vehiculos = (props) => {
    
    //este estado es el que controla la tabla con respecto a los filtros
    const [vehiculos, setVehiculos] = useState([])
    //este estado es el que resguarda la informacion obtenida por la peticion get (en este caso es simulada con un archivo .json)
    const [data, setData] = useState([])
    //este estado es el que almacena los cambios en los filtros para poder compararlos con la tabla
    const [filter, setFilter] = useState({
        marca: "",
        modelo: "",
        kilometros: "",
        capacidad: "",
        cliente: "",
        adquisicion: "", 
        devolucion: "", 
        matricula: "",
        rotulacion: "",
        tipo: "",
        itv: "",
        estado: "",
        servicio: "",
        contrato: ""
    })
    //este metodo es el que guarda los cambios en los filtros y envia los parametros para ser comparados con la tabla
    const handleChange = e => {
        console.log(e.target.name+' '+ e.target.value)

        setFilter({
            ...filter,
            [e.target.name]:e.target.value
        })
        Filter(e.target.value)
    }
    //este metodo es el que compara y devuelve los valores filtrados
    const Filter = (item) => {
        var resultado = data.filter(elemento => {
            if(elemento.matricula.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.marca.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.modelo.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.contrato.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.tipo.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.capacidad.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.kilometros.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.cliente.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.rotulacion.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.adquisicion.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.devolucion.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.estado.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.itv.toString().toLowerCase().includes(item.toLowerCase())||
                elemento.servicio.toString().toLowerCase().includes(item.toLowerCase())){
                return elemento;
            }
        })
        setVehiculos(resultado)
    }
    //este metodo limpia todos los filtros
    const cleanFilters = () => {
        setFilter({
            marca: "",
            modelo: "",
            kilometros: "",
            capacidad: "",
            cliente: "",
            adquisicion: "", 
            devolucion: "", 
            matricula: "",
            rotulacion: "",
            tipo: "",
            itv: "",
            estado: "",
            servicio: "",
            contrato: ""
        })
        setVehiculos(data)
    }

    

    //aqui se simula la peticion get a traves de la llamada al archivo data.json
    useEffect(()=>{
        setData(Data)
        setVehiculos(Data)
    }, [])
    return ( 
        <div className="col d-flex justify-content-center">
            <div className='filtro'>
                <div className="col caja-logo d-flex justify-content-center align-items-start pt-4">
                    <div className="col-2 d-flex justify-content-center mt-2">
                        <FontAwesomeIcon className='icon-search' icon={faSearch}/>
                    </div>
                    <div className="col-9 mt-2">
                        <h3>Filtros</h3>
                    </div>
                </div>
                <div className="col caja-filtros ">
                    <label className='limpiar' onClick={cleanFilters}><FontAwesomeIcon icon={faTrashAlt}/> Limpiar filtros</label>
                    <input type="text" name="matricula" placeholder='Matrícula' className='form-control mb-3' value={filter.matricula} onChange={handleChange}/>
                    <select name="contrato" className='form-select mb-3' value={filter.contrato} onChange={handleChange}>
                        <option disabled selected value="">Contrato *</option>
                        <option value="hoy">Hoy</option>
                        <option value="mañana">Mañana</option>
                    </select>
                    <select name="marca" className='form-select mb-3' value={filter.marca} onChange={handleChange}>
                        <option disabled selected value="">Marca *</option>
                        <option value="renault">Renault</option>
                        <option value="toyota">Toyota</option>
                        <option value="iveco">Iveco</option>
                        <option value="peugeot">Peugeot</option>
                    </select>
                    <input type="text" name="modelo" placeholder='Modelo' className='form-control mb-3' value={filter.modelo} onChange={handleChange}/>
                    <select name="tipo" className='form-select mb-3' value={filter.tipo} onChange={handleChange}>
                        <option disabled selected value="">Tipo de Vehículo *</option>
                        <option value="ligero">Ligero</option>
                        <option value="sedan">Sedan</option>
                        <option value="bus">Bus</option>
                        <option value="camion">Camión</option>
                    </select>
                    <input type="number" name="capacidad" placeholder='Capacidad' className='form-control mb-3' value={filter.capacidad} onChange={handleChange}/>
                    <input type="number" name="kilometros" placeholder='Kilometraje' className='form-control mb-3' value={filter.kilometros} onChange={handleChange}/>
                    <select name="cliente" className='form-select mb-3' value={filter.cliente} onChange={handleChange}>
                        <option disabled selected value="">Cliente *</option>
                        <option value="Bimbo">Bimbo</option>
                        <option value="Coca-cola">Coca-cola</option>
                        <option value="Nestle">Nestle</option>
                        <option value="Sony">Sony</option>
                    </select>
                    <select name="rotulacion" className='form-select mb-3' value={filter.rotulacion} onChange={handleChange}>
                        <option disabled selected value="">Rotulación *</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <input type="text" name="adquisicion" placeholder='Fecha de adquisición' className='form-control mb-3' value={filter.adquisicion} onChange={handleChange}/>
                    <input type="text" name="devolucion" placeholder='Fecha de devolución' className='form-control mb-3' value={filter.devolucion} onChange={handleChange}/>
                    <select name="estado" className='form-select mb-3' value={filter.estado} onChange={handleChange}>
                        <option disabled selected value="">Estado *</option>
                        <option value="nuevo">Nuevo</option>
                        <option value="usado">Usado</option>
                    </select>
                    <input type="text" name="itv" placeholder='Proxima ITV' className='form-control mb-3' value={filter.itv} onChange={handleChange}/>
                    <select name="servicio" className='form-select mb-3' value={filter.servicio} onChange={handleChange}>
                        <option disabled selected value="">Tipo de servicio *</option>
                        <option value="carga">Carga</option>
                        <option value="transporte">Trasporte</option>
                        <option value="traslado">Traslado</option>
                    </select>
                </div>
            </div>
            <Tabla data={vehiculos}/>
        </div>
     );
}
 
export default Vehiculos;