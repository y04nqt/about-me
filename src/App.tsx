import { useEffect, useState } from 'react';
import { Button, ThemeProvider } from '@react95/core';
import '@react95/icons/icons.css';
import { Winmine1 } from '@react95/icons';

import './App.css';

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import countapi from "countapi-js";

import AdditionalInfo from './pages/AdditionalInfo';
import General from './pages/General';
import FourOhFour from './pages/404';
import TheDoor from './pages/TheDoor';

function App() {
  const [siteCounter, setSiteCounter] = useState(0);
  useEffect(() => {
    countapi.visits('y04nqt.github.io').then((result) => {
      setSiteCounter(result.value);
    });
  }, [])

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
        <footer style={{
          position: 'fixed',
          bottom: '4px',
          right: '4px',
          color: 'white',
        }}>
          <span
            className='mr-4'
            style={{color: 'red'}}
          >
            <Winmine1 className='inline mr-2' variant="32x32_4"/>
            {siteCounter}
          </span>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
