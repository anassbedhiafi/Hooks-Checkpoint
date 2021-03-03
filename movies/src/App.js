import './App.css';
import NavBar from "./Component/Navbar/Navbar"
import MovieList from "./Component/Movies/MovieList"
import Footer from "./Component/Footer/Footer"
import VideoCarousel from "./Component/VideoCarousel/VideoCarousel"
import TodoList from "./Component/AddList/TodoList"
import AddMovie from "./Component/AddMovie/AddMovie"
import React from 'react';
import {useState} from 'react';



function App() {
  const [DataMovie, setDataMovie] = useState({})
const handleDataMovie = (DataMovie) => {
  setDataMovie(DataMovie);
}
  return (
    <div>
      <NavBar/>
      <VideoCarousel/>
      <TodoList />
<MovieList/>
<Footer />
    </div>
  );
}

export default App;
