import Patient from "./Patient"

const ListPatients =({pacientes})=>{


    return(
        <div className="md:w-1/2  lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length?(
            <>
            <h2 className="font-black text-3xl text-center">
                Lista de Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {""}
                <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
            </p>
            
            </>
        ):(
            <>
            <h2 className="font-black text-3xl text-center">
            No hay pacientes registrados
        </h2>
        <p className="text-xl mt-5 mb-10 text-center">
                Registra pacientes y  {""}
                <span className="text-indigo-600 font-bold"> Apareceran aquí</span>
            </p>
            
            </>
        )

        }


{pacientes.map(paciente =>(
<Patient
key={paciente.id}
paciente={paciente}
/>
))}
      


        </div>
    )

}



export default ListPatients


