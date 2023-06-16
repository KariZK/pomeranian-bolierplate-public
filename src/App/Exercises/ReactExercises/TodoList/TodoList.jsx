import React, { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem/TodoItem';
import './style.css';


export function TodoList () {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState();
const [isLoading, setIsLoading] = useState(false);

const getTodoList = async () => {
   
setIsLoading(true);

      const response = await fetch("http://localhost:3333/api/todo")
      const jsonResponse = await response.json();
      

      if (response.status === 200) {
       
        setTodoList(jsonResponse);
      }

      if (response.status !== 200 && jsonResponse.message) {
       setError(jsonResponse.message);
      }
   
      setIsLoading(false);
};

    useEffect(() => {
    getTodoList();
    },[]);
 

  return (
    <div className='api-requests'>
      <h2>Todo list:</h2>
      {error && (
        <h3>
          Ooops! Something went wrong!
          <br />
        {error}
        <br />
        <button onClick={() => {setError(undefined); getTodoList();}}>Retry</button>
        </h3>
      )}

{isLoading && <p>Loading...</p>}

      {!error &&
      todoList.map((item) => {
        const {id, title, createdAt } = item;

        return (
          <TodoItem
          key={id}
          id={id}
          title={title} 
          createdAt={createdAt} 
          author={item.author} 
          isDone={item.isDone} 
          note={item.note} 
          doneDate={item.doneDate}
          />
        );
      })}
      
    </div>
  );
}
