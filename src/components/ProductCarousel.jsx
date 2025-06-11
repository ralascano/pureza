import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Loader } from "./Loader";
import { RxCross1 } from "react-icons/rx";

const ProductCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [zoomed, setZoomed] = useState(false);

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
    <>
      <div className="carousel-container-style">
        {loading ? (
          <Loader />
        ) : (
          <img
            src={images[current]}
            alt={`Imagen ${current + 1}`}
            className="image-carousel-style"
            onClick={() => setZoomed(true)}
          />
        )}

        <button onClick={prev} className="button-style-left">
          <FaChevronLeft />
        </button>
        <button onClick={next} className="button-style-right">
          <FaChevronRight />
        </button>
      </div>

      {/* ZOOM MODE */}
      {zoomed && (
        <div className="zoom-overlay">
          <a
            onClick={() => {
              setZoomed(false);
            }}
            className="close-btn-style"
          >
            <RxCross1 />
          </a>
          <button className="button-style-left" onClick={prev}>
            <FaChevronLeft />
          </button>

          {loading ? (
            <Loader />
          ) : (
            <img
              src={images[current]}
              alt={`Imagen ampliada ${current + 1}`}
              className="zoomed-image"
              onClick={() => setZoomed(false)}
            />
          )}

          <button className="button-style-right" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default ProductCarousel;
