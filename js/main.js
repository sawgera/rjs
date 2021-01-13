const numberOfFilms = +prompt('Сколько вы фильмов посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10){
    alert('Посмотрено мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert('Вы классический зритель!!!!');
} else if (personalMovieDB.count > 30){
    alert('ВЫ КИНОМАН');
} else {
    alert("произошла ошибка");
}


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


console.log(personalMovieDB);

