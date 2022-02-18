
import { Button, ThemeProvider } from '@react95/core';
import '@react95/icons/icons.css';

import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AdditionalInfo from './pages/AdditionalInfo';
import General from './pages/General';
import FourOhFour from './pages/404';
import TheDoor from './pages/TheDoor';

function App() {
  return (
    <ThemeProvider theme="matrix">
      <div className="App">
        <Router>
          <nav
            className='navbar navbar-expand-lg navbar-light bg-light'
          >
            <ul className='flex justify-between px-8'>
              <li className="p-4">
                <Link to='/'>
                  <Button>
                    General
                  </Button>
                </Link>
              </li>
              <li className="p-4">
                <Link to='/info+'>
                  <Button>
                    Additional Info
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="*" element={<FourOhFour />} />
            <Route path="/" element={<General />} />
            <Route path="/info+" element={<AdditionalInfo />} />
            <Route path="/through-the-door" element={<TheDoor />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
