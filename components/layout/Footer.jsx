import Link from "next/link";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={classes.container}>
        <div className={classes.contacts_container}>
          <h1>COZY EMBER.</h1>
          <div className={classes.contacts}>
            <div className={classes.company}>
              <h2>COMPANY</h2>
              <Link href="/#products">Products</Link>
              <Link href="/#about">Our Story</Link>
            </div>
            <div className={classes.contact_us}>
              <h2>CONTACT US</h2>
              <a>info@cozyember.com</a>
              <a>1-900-100-200</a>
              <a>1010 Sunset Blvd, Palo Alto, CA</a>
            </div>
          </div>
        </div>
        <p className={classes.copyright}>
          Cozy Ember Candles. Copyright: © 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
