import CartDetails from "@/components/cart/CartDetails";
import { fetch_cart_data } from "@/lib/fetch-data";
import { useRouter } from "next/router";
import useSWR from "swr";

import Modal from "@/components/cart/ui/Modal";
import { useState } from "react";

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}

export default function Cart(props) {
  const [isOrdered, setIsOrdered] = useState(false);
  const { data: cart, mutate } = useSWR("/api/fetch-cart", fetcher);
  const router = useRouter();

  // if cart is still not available
  if (!cart) return;

  async function handleDelete(id) {
    // optimistic ui update
    mutate(
      cart.filter((item) => item.id !== id),
      // don't send to server yet
      false
    );

    // send to server
    await fetch("/api/delete-to-cart", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json",
      },
    });
    // revalidate and sync the UI to the real server data
    mutate();
    // Re-run getServerSideProps and refresh data
    router.replace(router.asPath);
  }

  async function handleQuantity(id, quantity) {
    // optimistic ui update
    const optimisticCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );

    mutate(
      optimisticCart,
      // don't send to server yet
      false
    );

    // delete product to cart if its quantity is already 0
    const foundItem = optimisticCart.find((item) => item.id === id);
    if (foundItem.quantity === 0) {
      handleDelete(id);
    }

    // send to server
    await fetch("/api/update-cart", {
      method: "POST",
      body: JSON.stringify({
        id,
        quantity,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    // revalidate and sync the UI to the real server data
    mutate();
    // Re-run getServerSideProps and refresh data
    router.replace(router.asPath);
  }

  async function handleOrder() {
    if (cart.length > 0) {
      // move added-to-cart products to order
      await fetch("/api/add-to-order", {
        method: "POST",
        body: JSON.stringify({
          cart,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      console.log("Hey heypiberthdery!")

      // triggers to show a success modal
      setIsOrdered(true);
    }
   
    // Re-run getServerSideProps and refresh data
    router.replace(router.asPath);
  }

  return (
    <>
      {isOrdered && (
        <Modal onClose={() => setIsOrdered(false)}/>
      )}
      <CartDetails
        cartData={cart}
        changeQuantity={handleQuantity}
        deleteToCart={handleDelete}
        addToOrder={handleOrder}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const cartData = await fetch_cart_data();
  context.res.setHeader("Cache-Control", "no-store");

  return {
    props: {
      cart: cartData,
    },
  };
}
