import './App.css';
import PersonasList from './personas/personsList';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import OrganizationsList from './organizaciones/organizationsList';
import DealsList from './tratos/dealsList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li >
              <Link to="/personas" >Personas</Link>
            </li>
            <li>
              <Link to="/organizaciones">Organizaciones</Link>
            </li>
            <li>
              <Link to="/tratos">Tratos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/personas" exact element={<PersonasList/>}/>
          <Route path="/organizaciones" exact element={<OrganizationsList/>}/>
          <Route path="/tratos" exact element={<DealsList/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
