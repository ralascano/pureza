import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Producto from "../../public/data.json";
import { useParams } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import ProductCarousel from "./ProductCarousel";
import { Loader } from "./Loader";

export const CardProduct = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(
    Producto.find((p) => p.id === "harry")[0]
  );
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(false);

    setTimeout(() => {
      const encontrado = Producto.find((p) => p.id === id);

      if (!encontrado) {
        setProducto(Producto[0]);
      } else {
        setProducto(encontrado);
      }
      setLoader(true);
    }, 300);
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <Card className="card-product-style">
      {loader ? (
        <>
          {producto.imagenes && <ProductCarousel images={producto.imagenes} />}

          <CardBody>
            <CardTitle tag="h5">{producto.nombre}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {producto.descripcion}
            </CardSubtitle>
            <CardText style={{ display: "flex", flexDirection: "column" }}>
              <span>Precio ${producto.precio}</span>
              {producto.video !== "" && (
                <span>
                  Miralo en{" "}
                  <a href={producto.video} target="_blank">
                    <FaTiktok />
                  </a>
                </span>
              )}
            </CardText>
            <a
              href={`https://wa.me/${
                producto.whatsapp
              }?text=${encodeURIComponent(
                `Hola, estoy interesado en el producto *${producto.nombre}* que vi en su página.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wsp"
            >
              ¡Lo quiero!
            </a>
          </CardBody>
        </>
      ) : (
        <Loader />
      )}
    </Card>
  );
};
