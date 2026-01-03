import aboutImage from "@/public/About Cozy Ember.png";
import classes from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.container}>
        <div className={classes.text}>
          <h1>About Cozy Ember</h1>
          <p>
            Cozy Ember began in our small family kitchen, where we experimented
            with natural waxes and essential oils to make gifts for loved ones.
          </p>
          <p>
            Today, we continue to hand-pour every candle with the same care,
            using only eco-friendly ingredients and sustainable materials. Our
            mission is simple: bring warmth, comfort, and clean scents into
            every home.
          </p>
        </div>
        <Image
          src={aboutImage}
          alt="A lighted candle with a dark rose"
        />
      </div>
    </section>
  );
}
