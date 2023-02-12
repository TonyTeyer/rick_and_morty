import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card ({ name, species, gender, image, onClose, detailId }) {
  return (
    <div className={style.container}>
      <div className={style.contentAll}>
        <div className={style.front} >
          <img src={image} alt={name} className={style.image}  />
        </div>
        <div className={style.back}>
          <h2 className={style.title}>Name: {name}</h2>
          <h2 className={style.title}>Specie: {species}</h2>
          <h2 className={style.title}>Gender: {gender}</h2>
        </div>
        <div className={style.btnContainer}>
          <div>
            <button onClick={onClose} className={style.btn} >Delete</button>
          </div>
          <Link to={`/detail/${detailId}`} >
            <button className={style.btn}>View more</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
