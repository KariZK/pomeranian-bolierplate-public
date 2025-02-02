import './TodoStatus.css';

export const TodoStatus = ({
  isDone,
  isDoneDate,
  markAsDone,
  markAsDoneError,
}) => {
  const checkStatus = () => {
    switch (isDone) {
      case true:
        return 'checked-icon';
      case false:
        return 'unchecked-icon';
    }
  };

  return (
    <div className="todo-status">
      <div>
        <div
          onClick={isDone ? null : markAsDone}
          className={markAsDoneError ? 'mark-error' : checkStatus()}
        >
          &#10004;
        </div>
        <div>{isDoneDate || markAsDoneError}</div>
      </div>
    </div>
  );
};
