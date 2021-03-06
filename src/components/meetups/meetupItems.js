import { useContext } from "react";
import classes from "./meetupitems.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorite-context";

function MeetupItem(props) {
      const favoritesCtx = useContext(FavoritesContext);
      const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

      function toogleFavoriteStatusHandler(){
        if (itemIsFavorite){
          favoritesCtx.removeFavorite(props.id);
        }else{
          favoritesCtx.addFavorite({
            id:props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.addFavorite
          });
        }
      }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toogleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" :  "to Favorites"}
            </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
