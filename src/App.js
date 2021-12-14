import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import AllShows from './Components/AllShows/AllShows';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AllShows/>}></Route>
        <Route exact path="/:id" element={<Details/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
