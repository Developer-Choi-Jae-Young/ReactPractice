import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Practice1 from './components/Practice1';
import Practice2 from './components/Practice2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to='/'>HOME</Link>
            <Link to='/pt1'>연습</Link>
            <Link to='/pt2'>연습2</Link>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<p>안녕리액트?</p>} />
          <Route path='/pt1' element={<Practice1 />} />
          <Route path='/pt2' element={<Practice2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;