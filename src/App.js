import { React, useState } from 'react';
import './App.css';
import { Container } from 'bootstrap-4-react';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import LandingPage from './Components/LandingPage';
import FetchHook from './CustomsHooks/FetchHook';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Category from './Components/Category';
import ItemDetails from './Components/ItemDetails';

function App() {
  const [url, setUrl] = useState("https://fakestoreapi.com/products/categories");
  const { data, isPending, error } = FetchHook(url);

  return (
    <Router>
      <Container>
        {data && <Navbar categories={data}></Navbar>}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/productos" element={<Products />} />
          {data && data.map((category, index) => {
            const url = "/categoria/" + index;
            return (<Route exact key={index} path={url} element={<Category cat={category} />} />)
          })
          }
          <Route exact path='/productos/:id' element={<ItemDetails/>}></Route>
        </Routes>
      </Container>
    </Router>

  );
}

export default App;
