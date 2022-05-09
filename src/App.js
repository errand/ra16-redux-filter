import './App.css';

import Form from './components/Form';
import TasksList from './components/TasksList';
import Filter from "./components/Filter";

const App = () => {
  return (
    <div className="tasks container">
      <h1 className="title">Tasks</h1>
      <Form />
      <Filter />
      <TasksList />
    </div>
  );
};

export default App
