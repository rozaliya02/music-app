import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Catalog from "./components/Catalog";
import CreatePage from "./components/CreatePage";
import Details from "./components/Details";
import EditPage from "./components/EditPage";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/create-album" element={<CreatePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
