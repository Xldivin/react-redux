export const Tasklist = ({ id,  descrption, todo, complete}) => {
  console.log(todo)
  return (
    <div className={`tasks`}>
        <div className="task2">
        <p className="taskname">{todo}</p>
        <h6 className="taskdesc">{descrption}</h6>
      </div>
      <button className="done">Complete</button>
      <button className="delete">Delete</button>
    </div>
  )
}
