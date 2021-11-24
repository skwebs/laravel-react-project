import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from "./components/Navigation";
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    <>
      {/* <Loading show={true} /> */}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/add" element={<ProtectedRoute protectedComp={AddProduct} />} />
          <Route path="/product/update" element={<ProtectedRoute protectedComp={UpdateProduct} />} />
          <Route path="/users" element={<ProtectedRoute protectedComp={Users} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
