import React from 'react';
import '../../css/foundation.min.css';
import './MovieInput.css';

export class MovieInput extends React.Component {
   constructor(props) {
      super(props);

      this.handleGuess = this.handleGuess.bind(this);
   }
   handleGuess(e) {
      e.preventDefault();

      const guess = e.target.movieGuess.value;
      this.props.onSubmit(guess);
   }
   render() {
      return (
         <div className="movie-input large-offset-5">
            <form onSubmit={this.handleGuess}>
               <input className="cell small-4" type="text" name="movieGuess"/>
               <input className="cell small-4 button" type="submit" name="guess"/>
            </form>
         </div>
      );
   }
}