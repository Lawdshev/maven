import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import "./App.css"
import Login from "./pages/authPages/login";
import Register from "./pages/authPages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
