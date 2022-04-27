import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../redux/todoSlice'

const Taskadd = () => {
  const [inputTodo, setInput] = useState('');
  const [inputDesc, setDesc] = useState('')
 
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    let count = 0;
    e.preventDefault()
    if(inputTodo){
      dispatch(saveTodo({
        todo: inputTodo,
        descrption: inputDesc,
        completed:false,
        id: count = count+1
      }))
    }
   }
  return (
    <div className="app">
    <h1 className="head" title="header" data-testid="head">My Todos</h1>
    <div className="holder">
        <form className="header" data-testid="form" onSubmit={onSubmit}>
            <div className="input-holder">
            <label className="labels" title="desc1">Tasks</label>
            <br />
            <input 
            type="text"
            id="name"
            placeholder="Enter your name"
            title="input"
            value={inputTodo}
            onChange={e=>setInput(e.target.value)}
            />
            </div>
            <div className="input-holder">
            <label className="labels" title="desc">Descrption</label>
            <br />
            <input 
            type="text"
            id="name"
            placeholder="Descrption"
            title="input1"
            value={inputDesc}
            onChange={e=>setDesc(e.target.value)}
            />
            </div>
            <button title="button">ADD TODO</button>
        </form>
    </div>
</div>
)
}
export default Taskadd