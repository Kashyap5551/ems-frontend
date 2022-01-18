import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import { ListEmployee } from "./components/ListEmployee";
import "./App.css";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/employees" element={<ListEmployee />} />
            <Route path="/add-employee" element={<CreateEmployee />} />
            <Route path="/edit-employee/:id" element={<CreateEmployee />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
