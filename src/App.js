import { Route } from "react-router-dom";
import AllMeetupsPage from "./pages/allMeetups";
import FavoritesPage from "./pages/favorites";
import NewMeetupPage from "./pages/newMeetup";

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetupsPage/>
      </Route>
      <Route path="/new-meetup">
        <NewMeetupPage/>
      </Route>
      <Route path="/favorites">
      <FavoritesPage/>
      </Route>
    </div>
  );
}

export default App;
