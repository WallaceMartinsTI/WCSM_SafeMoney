import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/pages/Home";
import Main from "./components/pages/Main"
import About from "./components/pages/About";
import Team from "./components/pages/Team";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import UpdateCost from "./components/main/UpdateCost";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/:id/update/" element={<UpdateCost />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
