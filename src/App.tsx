import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SavedGifs from "./pages/SavedGifs";
import MyFavoriteGif from "./pages/MyFavouriteGif";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedGifs />} />
        <Route path="/my-favorite-gif" element={<MyFavoriteGif />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
