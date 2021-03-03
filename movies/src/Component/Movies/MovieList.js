// import { Movie } from '@material-ui/icons';
import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap';
import ReactStars from 'react-stars'
import "./MovieList.css"
import AddMovie from "../AddMovie/AddMovie"

const ratingChanged = (newRating) => {
  console.log(newRating)
};
const handleData=(name)=> {
  alert(`Movie Name : ${name}`)
}

const App = (DataMovie, {isMovieList}) => {
  const [input, setInput] = useState("")
  const [show, setShow] = useState(false)
  
  let moviesdata = [
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
      rating: 4,
      name: "Devil's Mile",
      date: "2014",
      type: "Action | Crime",
      description:
        "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
    },
    {
      id: Math.random(),
      image:
        "https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg",
      rating: 5,
      name: "Once Upon A Time In The west",
      date: "1968",
      type: "Western",
      description:
        "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    },
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/564x/37/bd/f8/37bdf8f405a30977959e112d6f48aec0.jpg",
      rating: 4,
      name: "Taxi Driver",
      date: "1976",
      type: "Crime | Drama",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
    },
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/564x/78/55/ac/7855acc7002b1ae619b1edaa4b595df3.jpg",
      rating: 4,
      name: "Mad Max",
      date: "1979",
      type: "Action | Adventure",
      description:
        "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
    },
    {
      id: Math.random(),
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b1330b14202071.5627f4dc23472.jpg",
      rating: 3,
      name: "Little Miss Sunshine",
      date: "2006",
      type: "Comedy | Drama",
      description:
        "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
    },
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/564x/32/49/1c/32491ccd2f4ce577dea8871988c5828c.jpg",
      rating: 5,
      name: "KILL BILL",
      date: "2003",
      type: "Action",
      description:
        "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.'The Bride' decided to escape her life as a killer.",
      details:
        "https://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl",
    },
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/originals/3e/f1/ba/3ef1baaaceb5a95c4f57a7cb2393b39d.jpg",
      rating: 5,
      name: "The Wolf Of Wall Street",
      date: "2013",
      type: " Biography | Crime | Drama  ",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    },
  ]
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  if(input.length > 0){
    moviesdata = moviesdata.filter((index) => {
return index.name.toLowerCase().match(input.toLowerCase());
    })
    if (DataMovie.date>1900){
      moviesdata.push(DataMovie)
    }
  }

  return (
    <div>
      <div className="searchholder1">
            <button id="#searchmovie" className="searchbutton" onClick={()=>setShow(!show)}><i className="fas fa-search" ></i></button>
            {show? <section className="searchingholder">
    <input type="text" placeholder="Search Movies..." className="prompt" onChange={handleChange} value={input}/>
    </section> : null}
        </div>
       {moviesdata.map((movie, i) => (
    <div key={i} className="movie-card">
      {isMovieList ?
      <Card className="gif2" style={{ width: '18rem' }}>
<Card.Img variant="top"/>
<Card.Body>
<Card.Title></Card.Title>
<Card.Text>
  <AddMovie/>
</Card.Text>
</Card.Body>
</Card> 
:
<Card className="gif2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <div className="movietype">
      {movie.type} 
      </div>
      <Card.Text>
      <br/>
      {movie.description}
      </Card.Text>
      <div className="Stars">
        <ReactStars
        className="Star"
      count={5}
      onChange={ratingChanged}
      size={24}
      color2={'#ffd700'}
      background-color={'transparent'}
      value={movie.rating}/>
        <span className="Star1">{(`Rating : ${movie.rating}`)}</span>
      </div>
      <Button onClick={()=> handleData(movie.name)} variant="primary">Check</Button>
      
      </Card.Body>
      </Card>
      }
    

</div>
      ))}
    </div>
  )
}

export default App;

