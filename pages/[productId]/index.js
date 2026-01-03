import ProductDetail from "@/components/products/ProductDetail";
import { fetch_cart_data } from "@/lib/fetch-data";
import { products } from "@/util/product_details";
import { useRouter } from "next/router";
import { useTransition } from "react";

export default function ProductDetails(props) {
  const router = useRouter();
  const [isPending, startTrasition] = useTransition();

  async function addToCartHandler(quantity, setQuantity) {
    // check if there's already an existing product to the cart
    const productAlreadyInCart = props.cart.find(
      (item) => item.name === props.selectedProduct.name
    );

    if (quantity > 0) {
      const response = await fetch("/api/add-to-cart", {
        method: "POST",
        body: JSON.stringify({
          replace: productAlreadyInCart,
          name: props.selectedProduct.name,
          price: props.selectedProduct.price,
          quantity: quantity,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      startTrasition(async () => {
        await response.json();
      })

      setQuantity(0);
      // Re-run getServerSideProps and refresh data
      router.replace(router.asPath);
    }
  }

  return (
    <ProductDetail
      isPending={isPending}
      product={props.selectedProduct}
      addToCart={addToCartHandler}
    />
  );
}

// export async function getStaticPaths() {
//   return {
//     fallback: "blocking",
//     paths: products.map((item) => ({
//       params: { productId: item.id.toString() },
//     })),
//   };
// }

export async function getServerSideProps(context) {
  const productId = context.params.productId;

  // get product data
  const selectedProduct = products.find(
    (item) => item.id === Number(productId)
  );

  // get add to cart data
  const cartData = await fetch_cart_data();

  return {
    props: {
      selectedProduct: selectedProduct,
      cart: cartData,
    },
  };
}
