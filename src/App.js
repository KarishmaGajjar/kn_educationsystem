import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import CategoriesDetail from './CategoriesDetail';
import Categories from './Categories';
import Footer from './Footer';
import HomePage from './HomePage';
import MainSection from './MainSection';

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
