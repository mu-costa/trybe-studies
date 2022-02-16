import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const commitments = ['Estudar', 'Ir ao médico', 'Dormir'];

function App() {
  return (commitments.map((commitment ) => Task(commitment)));
}

export default App;
