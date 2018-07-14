import React from 'react';


import {MovieInput} from './components/MovieInput/MovieInput';
import {DisplayMovie} from './components/DisplayMovie/DisplayMovie';
//import FetchMovie from './utils/FetchMovie';
import './css/foundation.min.css';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         guess: 'hello',
         site: `https://www.omdbapi.com/?apikey=c5a24e96`,
         data: []
      }

      this.changeGuess = this.changeGuess.bind(this);
      this.fetchMovie = this.fetchMovie.bind(this);
   }
   
   changeGuess(newGuess) {
      this.setState(state => {
         state.guess = newGuess;
      }, () => {
         this.fetchMovie();
      });
   }

   fetchMovie() {
      return fetch(`https://www.omdbapi.com/?apikey=c5a24e96&s=${this.state.guess}`).then(response => {return(response.json())}).then(jsonResponse => {
         if(jsonResponse.Response === "True") {
            this.setState({
               data: jsonResponse.Search
            });
            console.log(this.state.data);
         }
      });
   }
   render() {
      return (
         <div className="gridcontainer">
            <div className="grid-x">
               <h2 className="large-offset-5">MovieSearch</h2>
            </div>
            <div className="grid-x">
               <MovieInput onSubmit={this.changeGuess}/>
            </div>
            <div className="grid-x">
               <DisplayMovie results={this.state.data}/>
            </div>
         </div>
      );
   }
}

export default App;
