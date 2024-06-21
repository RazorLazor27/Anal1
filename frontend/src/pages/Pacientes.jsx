import { useEffect, useState } from "react";

const Pacientes = () => {

    const [pacientes, setPacientes] = useState(null)

    useEffect(() => {
        const fetchPacientes = async () => {
            try {
                const response = await fetch('http:localhost:4000/api/pacientes');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setPacientes(json);
            } catch (error) {
                console.error('Error fetching pacientes:', error);
                // Puedes manejar el error de otra manera (por ejemplo, mostrar un mensaje al usuario)
            }
        };
    
        fetchPacientes();
    }, []);

    return (
        <div className="home">
            <div className="pacientes">
                {pacientes && pacientes.map((paciente) => (
                    <p key={paciente._id}>{paciente.nombre}</p>
                ))}
            </div>
        </div>
    )

}


export default Pacientes