import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import LetterCount from './components/LetterCount';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <Header />
          </nav>
        </header>

        <div style={{ border: '2px solid RGB(75, 129, 177)', height: 700, margin: 10 }}>
          <Routes>
            <Route path='/' element={<p>메인</p>} />
            <Route path='/timer' element={<Timer />} />
            <Route path='/letter' element={<LetterCount />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
