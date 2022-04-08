import { useContext } from "react";
import {Link} from "react-router-dom"
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorite-context";

function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext)

    return <header className={classes.header}>
        <div className={classes.logo}>REACT MEETUPS</div>
        <nav>
            <ul>
                <li><Link to={"/"}>All Meetups</Link></li>
                <li><Link to= {"/favorites"}>Favorites
                <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                </Link></li>
                <li><Link to= {"/new-meetup"}>New Meetup</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;