import Image from "next/image";
import logo from "@/public/Cozy ember.svg";
import cart from "@/public/add_shopping_cart_24px.svg";
import menu from "@/public/menu_24px.svg";
import classes from "./HomeNavigation.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function HomeNavigation({ cartData }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu((prevSetup) => !prevSetup);
  }

  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalItemsInCart = cartData?.reduce(
    (acc, item) => item.quantity + acc,
    0
  );

  return (
    <div>
      <header className={classes.home_navigation}>
        {/* only put background color to nav if the page is scrolled, or if it is not in the homepage */}
        <nav
          className={classes.navigation}
          style={{
            backgroundColor:
              isScrolled || router.pathname !== "/" ? "#1A243D" : "",
          }}
        >
          <Link href="/">
            <Image src={logo} alt="Cozy Ember Logo" />
          </Link>
          <div className={classes.web_menu}>
            {router.pathname !== "/" ? (
              <Link href="/">Home</Link>
            ) : (
              <AnchorLink href="#about">About us</AnchorLink>
            )}
            <Link href="/orders">Orders</Link>
            <Link href="/cart" className={classes.cart}>
              Cart ({totalItemsInCart})
              <Image src={cart} alt="Cart Icon" />
            </Link>
          </div>
          <div className={classes.mobile_menu}>
            <Image src={menu} alt="Hamburger Menu Icon" onClick={handleMenu} />
            {showMenu && (
              <div className={classes.dropdown_menu}>
                {router.pathname !== "/" ? (
                  <Link href="/">Home</Link>
                ) : (
                  <AnchorLink href="#about">About us</AnchorLink>
                )}
                <Link href="/orders">Orders</Link>
                <Link href="/cart" className={classes.cart}>
                  Cart ({totalItemsInCart})
                  <Image src={cart} alt="Cart Icon" />
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
