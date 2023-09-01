import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import CategoriesDetail from './CategoriesDetail';
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/categoriesDetail' element={<CategoriesDetail/>}/>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
