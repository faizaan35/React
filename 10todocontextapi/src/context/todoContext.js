import { createContext, useContext } from "react";

 export const todoContext = createContext({
    todos: [
        {
            id:1,
            todo:"todo msg",
            completed:false 
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{},
 })

 export const useTodo = () =>{
    return useContext(todoContext)
 }

 export const Todoprovider = todoContext.Provider