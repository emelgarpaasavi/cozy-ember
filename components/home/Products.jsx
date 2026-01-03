import ProductsSlideShow from "../images/ProductsSlideShow";
import classes from "./Products.module.css";
import Image from "next/image";
import Card from "./ui/Card";
import { useRouter } from "next/router";
import { usdFormatter } from "@/util/formatter";

export default function Products(props) {
  const router = useRouter();

  function showDetails() {
    router.push("/" + props.id);
  }

  return (
    <Card showDetails={showDetails}>
      <div className={classes.display_products}>
        <Image src={props.image} alt={props.alt} />
        <h2>{props.name}</h2>
        <p>{props.size}</p>
        <h3>{usdFormatter.format(props.price)}</h3>
      </div>
    </Card>
  );
}
