import Image from "next/image";
import heroBanner from "@/public/Hero Image.webp";
import classes from "./Hero.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.hero_text}>
        <h1>Natural Scents, Hand-Poured With Family Love</h1>
        <p>
          Each candle is made from pure soy wax and essential oils — perfect for
          cozy spaces.
        </p>
        <AnchorLink href="#products"><button>Shop All Candles</button></AnchorLink>
      </div>

        <Image
          src={heroBanner}
          alt="A Hero Banner with Candles and Aesthetic Pumpkins"
          className={classes.hero_img}
          loading="eager"
        />

    </section>
  );
}
