import Image from "next/image";
import checkIcon from "@/public/check_24px.svg";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Modal({ onClose }) {
  const dialogRef = useRef();

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  function handleClose() {
    dialogRef.current.close();
    onClose();
  }

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={handleClose}/>
      <dialog
        className={classes.modal_layout}
        ref={dialogRef}
      >
        <div className={classes.success_container}>
          <Image src={checkIcon} alt="Check icon" />
          <h2>Your order is completed!</h2>
          <p>Thank you. Your order has been received!</p>
          <Link href="/orders">View Orders</Link>
        </div>
      </dialog>
    </>,
    document.getElementById("modal")
  );
}
