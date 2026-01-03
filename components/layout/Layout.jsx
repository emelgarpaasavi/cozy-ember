import Footer from "./Footer";
import HomeNavigation from "./HomeNavigation";

export default function Layout(props) {
  return (
    <div>
      <HomeNavigation cartData={props.cartData}/>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
