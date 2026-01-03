import classes from "./ProductShowcase.module.css";
import Products from "@/components/home/Products";
import { products } from "@/util/product_details";

export default function ProductShowcase() {
  return (
    <div id="products" className={classes.products}>
      <div>
        <h1>Explore Our Products</h1>
      </div>
      <div className={classes.web_showcase}>
        {products.map((item) => (
          <Products
            key={item.id}
            id={item.id}
            image={item.main}
            name={item.name}
            alt={item.alt}
            price={item.price}
            size={item.size}
          />
        ))}
      </div>
      <div className={classes.mobile_showcase}>
        {products.map((item) => (
          <Products
            key={item.id}
            id={item.id}
            image={item.main}
            name={item.name}
            alt={item.alt}
            price={item.price}
            size={item.size}
          />
        ))}
      </div>
    </div>
  );
}
