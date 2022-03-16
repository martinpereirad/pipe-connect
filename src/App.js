import './App.css';
import PersonasList from './personas/personsList';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import OrganizationsList from './organizaciones/organizationsList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/personas">Personas</Link>
            </li>
            <li>
              <Link to="/organizaciones">Organizaciones</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/personas" exact element={<PersonasList/>}/>
          <Route path="/organizaciones" exact element={<OrganizationsList/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
