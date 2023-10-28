

const Patient = ({paciente}) => {
  return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {""}
            <span className="font-normal normal-case"> {paciente.name}</span>
            
            </p>


            <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {""}
            <span className="font-normal normal-case"> {paciente.owner} </span>
            
            </p>


            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {""}
            <span className="font-normal normal-case"> {paciente.email}</span>
            
            </p>


            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha de alta: {""}
            <span className="font-normal normal-case"> {paciente.date}</span>
            
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {""}
            <span className="font-normal normal-case">{paciente.symptoms}</span> 
            </p>
            
            <div className="flex justify-between mt-10">


            <button
            type="button" 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md"
            >
                Editar
            </button>

            <button
            type="button" 
            className="py-2 px-10 bg-red-500 hover:bg-red-800 text-white font-bold uppercase rounded-md"
            >
                Eliminar
            </button>
            </div>

        </div>

  )
}

export default Patient
