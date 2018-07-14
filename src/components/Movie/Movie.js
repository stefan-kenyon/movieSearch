import React from 'react';
import './movie.css';

class MovieList extends React.Component {
   render() {
      return (
         <div className="Movie">
            <p><img src={this.props.movie.Poster} class="img-width"/> {this.props.movie.Title} - {this.props.movie.Year}</p>
         </div>
      );
   }
}

export default MovieList;