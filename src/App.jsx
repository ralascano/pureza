import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CardProduct } from "./components/CardProduct";
import Header from "./layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/:id" element={<CardProduct />} />
          <Route path="/" element={<CardProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
