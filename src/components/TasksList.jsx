import Task from './Task';
import { useSelector } from "react-redux";

export default function TasksList() {
  const tasks = useSelector(state => {

  });

  return (
    <ul className="list-group">
      {tasks.length > 0 ? tasks.map((task) => (
        <Task key={task.id} id={task.id} title={task.title} price={task.price} />
      )) : 'Nothing found'}
    </ul>
  );
}
