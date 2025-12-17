import { Routes, Route } from 'react-router-dom';
import './App.css';
import Machines from './pages/machines/Machines';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Machines />} />
      </Routes>
    </div>
  );
}

export default App;
