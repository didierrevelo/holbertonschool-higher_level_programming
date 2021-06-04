#!/usr/bin/node
$.get('https://swapi-api.hbtn.io/api/films/?format=json', function (movies) {
  for (const title of movies.results) {
    const allTitles = $('<li></li>').text(title.title);
    $('#list_movies').append(allTitles);
  }
});