import Image from "next/image";
import classes from "./ProductsSlideShow.module.css";
import { products } from "@/util/product_details.js";
import { useEffect, useState } from "react";

export default function ProductsSlideShow() {
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const [currTextIndex, setCurrTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImageIndex((prevIndex) =>
        prevIndex < products.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTextIndex((prevIndex) =>
        prevIndex < products.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={classes.products}>
      <div className={classes.container}>
        <div className={classes.image_slideshow}>
          {products.map((item, index) => (
            <Image
              key={index}
              className={index === currImageIndex ? classes.active : ""}
              src={item.lifestyle}
              alt={item.alt}
              loading="lazy"
            />
          ))}
        </div>
        <div className={classes.text_slideshow}>
          <div className={classes.content}>
            <h1>Our Best-Selling Scents</h1>
            {products.map((item, index) => (
              <div key={index}>
                <h2 className={index === currTextIndex ? classes.active : ""}>
                  {item.name}
                </h2>
                <p className={index === currTextIndex ? classes.active : ""}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
