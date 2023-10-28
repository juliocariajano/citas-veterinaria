import {useState, useEffect} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";

function App() {
 
const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
const [paciente, setPaciente] = useState({})

// useEffect(() =>{
//   const obtenerLocalStorage=()=>{
//   const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
//   setPacientes(pacientesLocalStorage)
//   }
//   obtenerLocalStorage()
// },[])


useEffect(() =>{
  localStorage.setItem('pacientes',JSON.stringify(pacientes))
},[pacientes])

const deletedPatient = (id)=>{
  const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
  setPacientes(pacientesActualizados)
}

  return (
  
      <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
      <Form
      pacientes={pacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      setPacientes={setPacientes}
      deletedPatient={deletedPatient}
      />
      <ListPatients
      pacientes={pacientes}
      setPaciente={setPaciente}
      deletedPatient={deletedPatient}
      />

      </div>
      </div>
    

  )
}

export default App
