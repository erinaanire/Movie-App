/**
 * Getting the parent div from index.html by ID
 */
const parentContainer = document.getElementById("container");
console.log("parentContainer",parentContainer);

var moviess= [
{"id": "287947",
  "title": "Shazam!",
  "poster": "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
  "overview": "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
  "release_date": 1553299200,
  "genres": [
    "Action",
    "Comedy",
    "Fantasy"
  ]
},
{
"id": "299537",
"title": "Captain Marvel",
"poster": "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
"overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
"release_date": 1551830400,
"genres": [
    "Action",
    "Adventure",
    "Science Fiction"
]
},
{
  "id": "522681",
  "title": "Escape Room",
  "poster": "https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
  "overview": "Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
  "release_date": 1546473600,
  "genres": [
    "Thriller",
    "Action",
    "Horror",
    "Science Fiction"
  ]
},
{
  "id": "166428",
  "title": "How to Train Your Dragon: The Hidden World",
  "poster": "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
  "overview": "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
  "release_date": 1546473600,
  "genres": [
    "Animation",
    "Family",
    "Adventure"
  ]
},
{
  "id": "450465",
  "title": "Glass",
  "poster": "https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
  "overview": "In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
  "release_date": 1547596800,
  "genres": [
    "Documentary"
  ]
},
{
  "id": "495925",
  "title": "Doraemon the Movie: Nobita's Treasure Island",
  "poster": "https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
  "overview": "The story is based on Robert Louis Stevenson's Treasure Island novel.",
  "release_date": 1520035200,
  "genres": [
    "Animation"
  ]
},
{
  "id": "329996",
  "title": "Dumbo",
  "poster": "https://image.tmdb.org/t/p/w500/deTOAcMWuHTjOUPQphwcPFFfTQz.jpg",
  "overview": "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
  "release_date": 1553644800,
  "genres": [
    "Adventure",
    "Family",
    "Fantasy"
  ]
},
{
  "id": "299536",
  "title": "Avengers: Infinity War",
  "poster": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
  "release_date": 1524618000,
  "genres": [
    "Adventure",
    "Action",
    "Science Fiction"
  ]
},
{
  "id": "458723",
  "title": "Us",
  "poster": "https://image.tmdb.org/t/p/w500/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
  "overview": "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
  "release_date": 1552521600,
  "genres": [
    "Documentary",
    "Family"
  ]
},
{
  "id": "424783",
  "title": "Bumblebee",
  "poster": "https://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
  "overview": "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
  "release_date": 1544832000,
  "genres": [
    "Action",
    "Adventure",
    "Science Fiction"
  ]
},
{
  "id": "920",
  "title": "Cars",
  "poster": "https://image.tmdb.org/t/p/w500/qa6HCwP4Z15l3hpsASz3auugEW6.jpg",
  "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
  "release_date": 1149728400,
  "genres": [
    "Animation",
    "Adventure",
    "Comedy",
    "Family"
  ]
},
{
  "id": "299534",
  "title": "Avengers: Endgame",
  "poster": "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
  "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
  "release_date": 1556067600,
  "genres": [
    "Adventure",
    "Science Fiction",
    "Action"
  ]
},
{
  "id": "324857",
  "title": "Spider-Man: Into the Spider-Verse",
  "poster": "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
  "overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson 'Kingpin' Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
  "release_date": 1544140800,
  "genres": [
    "Action",
    "Adventure",
    "Animation",
    "Science Fiction",
    "Comedy"
  ]
}
]

/**
 * Create a Header
 */
const headerDiv = document.createElement("div");
const headerTag = document.createElement("h1");
const headerContent = document.createTextNode("Movie App");
headerTag.appendChild(headerContent);
headerDiv.appendChild(headerTag);
headerTag.setAttribute("class","heading-css");
parentContainer.appendChild(headerDiv);




/**
 * Create a search input element
 */
var parentDivForInputnGenreElement = document.createElement("div");
parentDivForInputnGenreElement.setAttribute('class','inputdiv-css');
var inputElement = document.createElement("input");
inputElement.setAttribute("class",'inputElement-css');
inputElement.setAttribute("type", "text");
inputElement.setAttribute("placeholder", "Search Movies");
inputElement.setAttribute("id","input-id");
inputElement.setAttribute('onfocus','onfocusFunction()');
inputElement.setAttribute('onblur','onblurFunction()');
inputElement.onchange = function(e){
    //e.target.value.indexOf()
    toFilterMovieContent(e.target.value);
    
    

    //console.log("qwe",e);
};

function onfocusFunction(){
  document.getElementById("input-id").size = "50";
}

function onblurFunction(){
  document.getElementById("input-id").size = "15";
}


parentDivForInputnGenreElement.appendChild(inputElement);
parentContainer.appendChild(parentDivForInputnGenreElement);

/**
 * Create a dropdown menu for genres.
 */
//var parentDivForSearchByGenre = document.createElement("div");
//parentDivForSearchByGenre.setAttribute('class','inputgenre-css');
var selectForGenre = document.createElement("select");
selectForGenre.setAttribute("id","select-id");
selectForGenre.onchange = function(e){
  toFilterGenre(e.target.value);
  //console.log("val",e.target.value);
}


/**
 * Collecting all the genres in an array
 */

function toGenerateGenreData(){
  var genreArray =[];
  for(let item of moviess){
    //console.log("mo",item);
    for(let genresData of item.genres){
      //console.log("gen",genresData);
      if(genreArray.indexOf(genresData) === -1){
        genreArray.push(genresData);
      }
      
    }
    //console.log("array",genreArray);
  }
  return genreArray;
}




var genreList = toGenerateGenreData();
for(let item of genreList){
    //console.log("item",item);
    var option =document.createElement("option");
    var text = document.createTextNode(item);
    //console.log("text",text);
    option.appendChild(text);
    selectForGenre.appendChild(option);
}

parentDivForInputnGenreElement.appendChild(selectForGenre);
parentContainer.appendChild(parentDivForInputnGenreElement);
 

//function tofilterMovies(movies){
   // toFilterMovieContent();
//}    

function toFilterGenre(searchgenre){
  const genreList = document.getElementsByClassName("genre-text");
  var lowerGenreSearch = searchgenre.toLowerCase();
  
  //console.log("genr",genreList);
  for(let item of genreList){
    var lowerItem = item.innerHTML.toLowerCase();
    if(lowerItem.indexOf(lowerGenreSearch) > -1){
      item.parentElement.style.display = "block";
    }
    else{
      item.parentElement.style.display = "none";
    }
  }
}


function toFilterMovieContent(searchText){
  const movieDataSet = document.getElementsByClassName('title-text');
  //console.log("hi",movieDataSet);
  var lowerSearchText =  searchText.toLowerCase();
  //console.log("uppercase",lowerSearchText);
    //getelementbyclass('title-text') []
    for(let item of movieDataSet){
      var lowerItemHtml = item.innerHTML.toLowerCase();
     // console.log("hello",lowerItemHtml);
        if(searchText == '' || lowerItemHtml.indexOf(lowerSearchText)  > -1){
              //console.log("abc",);
          item.parentElement.style.display = "block";
        }
        else{
          item.parentElement.style.display  = "none";
        }
    }  
    //[] => for=> if text/html === searchText
      //yes =>getparent.display =block
      //else-> getparent.display = none
}


//toFilterMovies('Shazam!');




var movieList = document.createElement("div");

function toRenderMovies(movies){
    let movieNo = 0;    
    for(var movie of movies){
        movieNo++;
        //console.log("movies",movie);
        //creating a div for the individual flex
        var movieTag = document.createElement("div");
        movieTag.setAttribute('class','movieTag-css movies-list');
        movieTag.setAttribute('id','movie-id');
        var movieTitleHeading = document.createElement("h2");
        var headingContent =document.createTextNode(movie.title);
        //console.log("headingContent",headingContent);
        movieTitleHeading.appendChild(headingContent);
        movieTitleHeading.setAttribute("class","title-text");
        var imageTag = document.createElement('img');
        imageTag.setAttribute("src",movie.poster);
        imageTag.setAttribute("class","img"); 
        var overViewTitle = document.createElement("h3");
        var overViewTitleContent = document.createTextNode("Overview");
        overViewTitle.appendChild(overViewTitleContent);
        var paraTag = document.createElement("p");
        let paraIdName = 'paraTagId'+movieNo;
        paraTag.setAttribute('id',paraIdName);
        const paraContent =document.createTextNode(movie.overview);
        paraTag.appendChild(paraContent);
        paraTag.setAttribute("class","text-size");
        paraTag.style.display = 'none';
        overViewTitle.onclick = function(){
            console.log("called it")
            toggleOverview(paraIdName)   
        }
        // overViewTitle.setAttribute('onclick',``);
        overViewTitle.setAttribute('class','default');
        //var divForOverview = document.createElement("div");
        //paraTag.appendChild(divForOverview);
       // var paraTag = document.createElement("p");
        //var paraContent =document.createTextNode(movie.overview);
        //console.log("paraContent",paraContent);
        //paraTag.appendChild(paraContent);
        //paraTag.setAttribute("class","text-size"); 

        var releaseDateTitle = document.createElement("h3");
        var releaseDateTitleContent = document.createTextNode("Release Date");
        releaseDateTitle.appendChild(releaseDateTitleContent);
        var releaseDateParaTag = document.createElement("p");
        var releasedateContent = document.createTextNode(moment.unix(movie.release_date).format("MM/DD/YYYY"));
        //console.log("releasedateContent",releasedateContent);
        releaseDateParaTag.appendChild(releasedateContent);
        //releaseDateParaTag.setAttribute("moment",moment().format('YYYY-MM-DD'));
        var genresTitle = document.createElement("h3");
        var genresTitleContent = document.createTextNode("Genres");
        genresTitle.appendChild(genresTitleContent);
        var genresSpan = document.createElement("span");
        //genresSpan.setAttribute("class","genre-text");
        var genresData = document.createTextNode(movie.genres);
        genresSpan.appendChild(genresData);
        genresSpan.setAttribute("class","genre-text text-size");
        movieTag.appendChild(movieTitleHeading);
        movieTag.appendChild(imageTag);
        movieTag.appendChild(overViewTitle);
        movieTag.appendChild(paraTag);
        movieTag.appendChild(releaseDateTitle);
        movieTag.appendChild(releaseDateParaTag);
        movieTag.appendChild( genresTitle);
        movieTag.appendChild(genresSpan);
        movieList.appendChild(movieTag);
        movieList.setAttribute("class","row");
    }
    
    parentContainer.appendChild(movieList);
   
}

toRenderMovies(moviess);


function toggleOverview(paraIdname){
    //console.log("paraId", paraId);
    //var paraTag = document.createElement("p");
    var paraId = document.getElementById(paraIdname);
    if(paraId.style.display == 'block'){
        paraId.style.display = 'none'
    }else{
        paraId.style.display = 'block'
    }
    //paraTag.setAttribute("class","text-size"); 
   
    //movieList.appendChild(movieTag);
    //return paraTag;
 }


/**
 * Create Footer
 */
const footerDiv = document.createElement("div");
const footerTag = document.createElement("p");
const footerNode = document.createTextNode("Made with love in js and flex");
footerTag.appendChild(footerNode);
footerDiv.appendChild(footerTag);
footerTag.setAttribute("class","footer-css");
parentContainer.appendChild(footerDiv);