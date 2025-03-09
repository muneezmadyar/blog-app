import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sec2 from "./components/Sec2";
import Post from "./components/Post";
import Kamblogs from "./components/Kamblogs";
import Game from "./components/Game";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ye routes sirf Blog ke ilawa sab kuch dikhayenge */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <Sec2 />
              <Post />
              <Kamblogs />
              <Game />
              <Footer/>
            </>
          }
        />
        
        {/* Blog ka route: Sirf Blog dikhega, koi aur component nahi */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sign" element={<SignUpForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
