import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import NoPage from './components/noPage';
import NavBarLogout from './components/navBarLogout';
import Login from "./components/login";
import Register from "./components/register";
import Category from "./components/category";
import Location from "./components/location";
import PostAnAdd from "./components/postAnAdd";
function App() {

  return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<NavBarLogout/>}> */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="category" element={<Category />} />
            <Route path="location" element={<Location />} />
            <Route path="post-add" element={<PostAnAdd />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App
