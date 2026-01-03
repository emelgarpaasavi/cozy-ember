import classes from "./Card.module.css";


export default function Card({ children, showDetails }) {
  return (
    <div onClick={showDetails} className={classes.card}>
      {children}
    </div>
  );
}
