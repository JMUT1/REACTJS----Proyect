import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import AllMeetupsPage from "./pages/allMeetups";
import FavoritesPage from "./pages/favorites";
import NewMeetupPage from "./pages/newMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes> 
        <Route path="/" element={<AllMeetupsPage/>}/>
        <Route path="/new-meetup" element={<NewMeetupPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
