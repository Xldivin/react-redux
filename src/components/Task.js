import { Tasklist } from "./Tasklist"
import { useSelector } from "react-redux";
export const Task = () => {
const tasks = useSelector((state) => state.tasks)
  return (
    <>
    {tasks.map((task) => ( 
    <Tasklist todo={task.todo} description={task.descrption} id={task.id} complete={task.complete}/>
    ))}
    </>
  )
}