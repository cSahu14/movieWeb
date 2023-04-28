
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:id' element={<Movie/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
