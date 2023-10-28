/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react';
import Error from './Error';


const Form =(props)=>{

    const {pacientes,setPacientes, paciente, setPaciente, deletedPatient} = props;

const [name, setName] = useState("")
const [owner, setOwner] = useState("")
const [email, setEmail]=useState("")
const [date, setDate]=useState("")
const [symptoms, setSymptoms]=useState("")

const [error, setError] = useState(false)

useEffect(() => {
  if (Object.keys(paciente).length > 0){
    setName(paciente.name)
    setOwner(paciente.owner)
    setEmail(paciente.email)
    setDate(paciente.date)
    setSymptoms(paciente.symptoms)
  }

}, [paciente])


const generarId=()=>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha 
}


const handleSubmit =(e)=>{
    e.preventDefault();

    if([name, owner, email, date, symptoms].includes("")){
        setError(true)
        return;
    }

        setError(false);
        const objPaciente={
            name,
            owner,
            email,
            date,
            symptoms,
        }

        if(paciente.id){
            objPaciente.id=paciente.id

            const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id=== paciente.id ? objPaciente : pacienteState)
            setPacientes(pacienteActualizado)
            setPaciente({})
        }else{
            objPaciente.id=generarId()
            setPacientes([...pacientes, objPaciente])
        }
        setName("")
        setOwner("")
        setEmail("")
        setEmail("")
        setSymptoms("")
    

}
    

    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5" >

        <h2 className="font-black text-3xl text-center">
            Seguimiento pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold ">
                Administralos
            </span>
        </p>

        <form
        onSubmit={handleSubmit}
        className="bg-white shadow-sm rounded-lg py-10 px-5"
        >
            {error && (<Error
            mensaje="Todos los campos son obligatorios"
            /> ) }
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de Mascota</label>
                <input
                id="mascota"
                type="text"
                placeholder="Nombre de Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={name}
                onChange={(e)=>setName(e.target.value)}
/>
</div>
        
        
<div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre de Propietario</label>
                <input
                id="propietario"
                type="text"
                placeholder="Nombre de Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={owner}
                onChange={(e)=>setOwner(e.target.value)}
/>
            </div>



            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo Electronico del Propietario</label>
                <input
                id="email"
                type="email"
                placeholder="Correo Electronico Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
/>
            </div>


            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
                <input
                id="alta"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
/>
            </div>


            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea
                
                id="sintomas"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Describe los sintomas"
                value={symptoms}
                onChange={(e)=>setSymptoms(e.target.value)}
/>
            </div>

            <input
            
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-opacity:2"
            value={paciente.id? "Editar Paciente" : "Agregar Paciente"}

          />

        </form>
        </div>
    )

}



export default Form


