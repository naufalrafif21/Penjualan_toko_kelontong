import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="add" element={<AddProduct/>}/>
        <Route path="edit/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;