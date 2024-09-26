import { Tarea } from "./Tarea"


type ListaTareasProps = {
    listaTareas: string[]
    borrarTarea: (index:number) => void
}

export const ListaTareas = ( {listaTareas,borrarTarea} : ListaTareasProps) => {
  return (
    <div className="taskList">
        {listaTareas.map((task,index) =>(
            <Tarea key={index} tarea={task} borrarTarea={()=>borrarTarea(index)}></Tarea>
        ))

        }
    </div>
  )
}