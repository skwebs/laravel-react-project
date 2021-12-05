import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Products from './pages/Products';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import MultipleInput from './pages/MultipleInput';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="vh-100 d-flex flex-column">
      <BrowserRouter>
        {/* <Loading show={true} /> */}
        {/* <BrowserRouter basename="/laravel-react-app/"> */}
        <header>
          <Navigation />
        </header>
        <main className="mt-5 pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />} >
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
            </Route>
            <Route path="/multipleInput" element={<ProtectedRoute protectedComp={MultipleInput} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <footer className="bg-dark">
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
