import React from 'react';

//`http://www.omdbapi.com/?apikey=c5a24e96`;

// browse, search

const FetchMovie = {
   search: (site, params) => {
      return fetch(`${site}${params}`)
      .then(response => {
         return response.json();
      }).then(jsonResponse => {
         console.log(jsonResponse);
         return jsonResponse;
      })
   }
}

module.exports = FetchMovie;