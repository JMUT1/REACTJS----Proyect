import { createContext, useState } from "react";


const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup)=>{},
    removeFavorite: (meetupId)=> {},
    itemIsFavorite: (meetupId)=>{},
});

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorite)=>{
            return prevUserFavorite.concat(favoriteMeetup)
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorite =>{
            return prevUserFavorite.filter(meetup => meetup.id !== meetupId);
        })
    }
    
    function itemisFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }


    const context = { 
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemisFavoriteHandler,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
};

export default FavoritesContext;