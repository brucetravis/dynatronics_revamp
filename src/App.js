import { Routes, Route } from 'react-router-dom';
import './App.css';
import Machines from './pages/machines/Machines';
import Automation from './pages/automation/Automation';
import Gadgets from './pages/gadgets/Gadgets';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Machines />} />
        <Route path='/gadgets' element={<Gadgets />} />
        <Route path='/automation' element={<Automation />} />
      </Routes>
    </div>
  );
}

export default App;
