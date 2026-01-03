import classes from "./CallToAction.module.css";
import Image from "next/image";
import ingredientSpotLightImage from "@/public/Ingredient Spotlight Image.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function CallToAction() {
  return (
    <section className={classes.call_to_action}>
      <div className={classes.container}>
        <Image
          src={ingredientSpotLightImage}
          alt="A candle being placed in a table"
        />
        <div className={classes.text}>
          <h1>Simple, Clean and Honest Ingredients</h1>
          <p>
            We believe in transparency. That&apos;s whe every Cozy Ember candle
            is made from a short list of natural ingredients — no parabens, no
            synthetic dyes, no harmful additives. Just wax, oils, cotton wicks,
            and love.
          </p>
          <AnchorLink href="#products">
            <button>Shop All Candles</button>
          </AnchorLink>
        </div>
      </div>
    </section>
  );
}
