import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Home from "./Page/Home";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import ViewUser from "./Users/ViewUser";
function App() {
  return (
    <div className="App">
      <Router >
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/AddUser" element={<AddUser />} />
      <Route exact path="/EditUser/:id" element={<EditUser />} />
      <Route exact path="/ViewUser/:id" element={<ViewUser />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
