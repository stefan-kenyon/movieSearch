import React from 'react';

import Movie from '../../components/Movie/Movie.js';

export class DisplayMovie extends React.Component {
   render() {
      return (
         <div className="large-offset-4">
            {
               this.props.results.map(movie => {
                  return <Movie movie={movie} key={movie.imdbID}/>;
               })
            }
         </div>
      );
   }
}