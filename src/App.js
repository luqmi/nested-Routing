import {Routes,Route} from "react-router-dom"
import Nav from "./component/Nav"
import "./component/App.css"
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Product from "./component/Product";

import Bikes from "./component/Products/Bikes";
import Cars from "./component/Products/Cars";
import Bicycles from "./component/Products/BiCycles";


function App() {
  return (
    <div className="App">
      <Nav/>

      <Routes>
         <Route path="/"  element={<Home/>}/>
         <Route path="about"  element={<About/>}/>
         <Route path="service"  element={<Service/>}/>
         
         <Route path="product"  element={<Product/>}>
             <Route path="bikes"  element={<Bikes/>}/>
             <Route path="cars"  element={<Cars/>}/>
             <Route path="bicycles"  element={<Bicycles/>}/>
         </Route>
      
      </Routes>
    </div>
  );
}

export default App;
