const numberOfFilms = +prompt('Сколько вы фильмов посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмо просмотреных?',''),
    b = prompt('На сколько бы его оценили?',''),
    c = prompt('Один из последних фильмо просмотреных?',''),
    d = prompt('На сколько бы его оценили?','');

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);

