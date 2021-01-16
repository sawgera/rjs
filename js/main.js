let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько вы фильмов посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько вы фильмов посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm(){
    for(let i=0;i < 2;i++) {
        const a = prompt('Один из последних фильмо просмотреных?',''),
              b = prompt('На сколько бы его оценили?','');
    
        if(a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movie[a] = b;
            console.log('done');  
        } else {
            console.log('error');
            i--;
        }     
    
    } 
}

rememberMyFilm();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        alert('Посмотрено мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert('Вы классический зритель!!!!');
    } else if (personalMovieDB.count > 30){
        alert('ВЫ КИНОМАН');
    } else {
        alert("произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);    
    }
}

showMyDB(personalMovieDB.privat);

/* function writeYourGenres() {
    for (let i = 1; i <=3; i++){
        const genres = prompt(`Ваш любимы фильм под номером ${i}`);
        personalMovieDB.genres[i-1] = genres;
    }
}
writeYourGenres(); */

function writeYourGenres(){
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимы фильм под номером ${i}`);
    }
}
writeYourGenres();


// ПРИМЕР ЦЫКЛА do .. while
/* let i = 0;
do {
    const a = prompt('Один из последних фильмо просмотреных?',''),
          b = prompt('На сколько бы его оценили?','');
          if(a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movie[a] = b;
            console.log('done');  
        } else {
            console.log('error');
            i--;
        } 
    i++;           

}while(i<2); */

// ПРИМЕР ЦЫКЛА while

/* let i = 0;
while(i<2){
    const a = prompt('Один из последних фильмо просмотреных?',''),
          b = prompt('На сколько бы его оценили?','');
          if(a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movie[a] = b;
            console.log('done');  
        } else {
            console.log('error');
            i--;
        } 
    i++;       
} */




