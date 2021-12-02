import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from "./components/Navigation";
import Products from './pages/Products';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Users from "./pages/Users";
import MultipleInput from './pages/MultipleInput';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      {/* <Loading show={true} /> */}
      {/* <BrowserRouter basename="/laravel-react-app/"> */}
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <main className="mt-5 pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProtectedRoute protectedComp={Products} />} />
            {/* <Route path="/users" element={<ProtectedRoute protectedComp={Users} />} /> */}
            <Route path="/users" element={<Users />} />
            <Route path="/multipleInput" element={<ProtectedRoute protectedComp={MultipleInput} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
