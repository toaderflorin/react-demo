import Task from'./task'

const TaskList = ({ taskList, deleteTask }) => {
  const els = taskList.map((task) => {
    return <Task task={task} deleteTask={deleteTask} />
  });

  return (
    <div>
      {els}
    </div>
  );
};

export default TaskList