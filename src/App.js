import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import AllMeetupsPage from "./pages/allMeetups";
import FavoritesPage from "./pages/favorites";
import NewMeetupPage from "./pages/newMeetup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetupsPage/>}/>
        <Route path="/new-meetup" element={<NewMeetupPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
