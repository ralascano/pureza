import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Loader } from "./Loader";

const ProductCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);

  if (!Array.isArray(images) || images.length === 0) {
    return <div className="carousel-container-style">No hay imágenes</div>;
  }

  const showLoaderThen = (action) => {
    setLoading(true);
    setTimeout(() => {
      action();
      setLoading(false);
    }, 300);
  };

  const prev = () =>
    showLoaderThen(() =>
      setCurrent((current - 1 + images.length) % images.length)
    );

  const next = () =>
    showLoaderThen(() => setCurrent((current + 1) % images.length));

  return (
    <div className="carousel-container-style">
      {loading ? (
        <Loader />
      ) : (
        <img
          src={images[current]}
          alt={`Imagen ${current + 1}`}
          className="image-carousel-style"
        />
      )}

      <button onClick={prev} className="button-style-left">
        <FaChevronLeft />
      </button>
      <button onClick={next} className="button-style-right">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProductCarousel;
