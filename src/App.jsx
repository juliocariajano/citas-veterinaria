import {useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";

function App() {
 
 const [pacientes, setPacientes] = useState([])

 console.log(pacientes,"soy appppp")
  return (
  
      <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
      <Form
      pacientes={pacientes}
      setPacientes={setPacientes}
      />
      <ListPatients
      pacientes={pacientes}
      
      />

      </div>
      </div>
    

  )
}

export default App
