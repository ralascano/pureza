import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CardProduct } from "./components/CardProduct";
import Header from "./layout/Header";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Púretza - Tu tienda de productos inteligentes</title>
        <meta
          name="description"
          content="Descubre artículos únicos y prácticos para tu hogar y vida diaria. Envíos rápidos y atención garantizada."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph para redes sociales */}
        <meta
          property="og:title"
          content="Púretza - Productos que mejoran tu vida"
        />
        <meta
          property="og:description"
          content="Productos originales, útiles y únicos. ¡Haz tu vida más fácil con Púretza!"
        />
        <meta
          property="og:image"
          content="https://puretza.netlify.app/og-image.png"
        />
        <meta property="og:url" content="https://puretza.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Púretza - Productos que mejoran tu vida"
        />
        <meta
          name="twitter:description"
          content="Productos originales, útiles y únicos. ¡Haz tu vida más fácil con Púretza!"
        />
        <meta
          name="twitter:image"
          content="https://puretza.netlify.app/og-image.png"
        />
      </Helmet>
      <Header />
      <div style={{ paddingTop: "100px" }}>
        <img src="/og-image.png" style={{ display: "none" }} />
        <Routes>
          <Route path="/:id" element={<CardProduct />} />
          <Route path="/" element={<CardProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
