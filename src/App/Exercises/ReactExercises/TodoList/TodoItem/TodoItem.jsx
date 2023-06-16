import './TodoItem.css';


const parseDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toDateString();
};

export const TodoItem = ({
    id, 
    title, 
    createdAt, 
    author, 
    isDone, 
    note, 
    doneDate,
}) => {
    // const deleteTodo = (id) => {
    //     fetch('http://localhost:3333/api/todo/1', {method: 'DELETE'})
    //     .then(() => TodoItem.innerHTML = 'Delete successful');
    // };

    return (
        <div className="todo-item">

            <div className='todo-content'>

            <div className="todo-title">{title}
            </div>

            <div>{author}
            </div>

            <div>{parseDate(createdAt)}
            </div>

            <p>{note}</p>

            </div>
            <button className='wastebasket-icon' 
            // onClick={deleteTodo}
            >&#128465;</button>
            <div>

             {isDone && (

             <div>



             <div className="checked-icon">&#10004;
             </div>

             <div>{parseDate(doneDate)}
             </div>

            
             </div>
          )}

        </div>
        </div>
    );
};

