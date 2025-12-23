import { Routes, Route } from 'react-router-dom';
import './App.css';
import Machines from './pages/machines/Machines';
import Automation from './pages/automation/Automation';
import Gadgets from './pages/gadgets/Gadgets';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Machines />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/gadgets' element={<Gadgets />} />
        <Route path='/automation' element={<Automation />} />
      </Routes>
    </div>
  );
}

export default App;
