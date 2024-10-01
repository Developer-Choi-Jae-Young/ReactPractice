import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import LetterCount from './components/LetterCount';
import Home from './components/Home';
import { createContext, useState } from 'react';
import Stopwatch from './components/Stopwatch';

export const ResultContext = createContext();
let defaultUser = {
  id: '',
  pwd: ''
}

function App() {
  const [loginUser, setloginUser] = useState(defaultUser);
  const defaultContext = {
    data: loginUser,
    setData: setloginUser
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <Header />
          </nav>
        </header>

        <div style={{ border: '2px solid RGB(75, 129, 177)', height: 700, margin: 10 }}>
          <ResultContext.Provider value={defaultContext}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/timer' element={<Timer />} />
              <Route path='/letter' element={<LetterCount />} />
              <Route path='/stopwatch' element={<Stopwatch />} />
            </Routes>
          </ResultContext.Provider>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
