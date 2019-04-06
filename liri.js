//I npm installed request spotify and twitter
require("dotenv").config();
let keys = require("./keys.js");
let Twitter = require('twitter');
//var spotify = require('spotify');
let request = require('request');
let Spotify = require('node-spotify-api');
let fs = require('fs'); 

//var spotify = require("node-spotify-api");
let spotifyClass = new Spotify(keys.spotify);
let axios = require("axios");
let moment = require("moment");

//this function was created for experimentation purposes
//I tried a second approach to key protection in this example
let getMyTweets = function() {
let client = new Twitter(keys.twitterKeys);
const params = {screen_name: 'tigon'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if(!error) {
//console.log(tweets);
//for loop goes through each of my (tigon's) tweets and
//pulls out these specific attributes
    for(var i=0; i<tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log(' ');
        console.log(tweets[i].text);  
    }
}
});
}

let getArtistNames = function(artist) {
    return artist.name;
}

let getMeSpotify = function(songName) {

spotifyClass.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    var songs = data.tracks.items;
    for(var i=0; i<songs.length; i++) {
        console.log(i);
        console.log('artist(s): ' + songs[i].artists.map( 
           getArtistNames)); 
        console.log('songName: ' + songs[i].name);
        console.log('preview song: ' + songs[i].preview_url);
        console.log('album: ' + songs[i].album.name);
        console.log('-------------------------------------------------------'); 
    }
 }
//    console.log(data);
);
}

var getMeConcert = function(concertName) {
   concertName.split(" ").join("+");
    request("https://rest.bandsintown.com/artists/" + concertName + "/events?app_id=codingbootcamp", function (error, response, body) {
        let concertInfo = JSON.parse(body);

        if (concertInfo.length < 1) {
            console.log("No concert information is currently listed for this band.");
            return;
        }
    for (let i = 0; i < 5 && i < concertInfo.length; i++) {
        console.log('Venue: ' + concertInfo[i].venue.name + '\n' + 'Location: ' + 
        concertInfo[i].venue.city + ', ' + concertInfo[i].venue.country);
        
        var concertDate = concertInfo[i].datetime.split('T')[0];

        concertDate = moment(concertDate, 'YYYY-MM-DD').format('MMM DD, YYYY');

        if (concertDate) {
            console.log('Date: ' + concertDate + '\n');
        } else {
            console.log('Date: TBA');
        }

        
    }
    
    });
}


var getMeMovie = function(movieName) {
 
    request('http://www.omdbapi.com/?t=' + movieName + 
    '&y=&plot=short&apikey=trilogy', 
    function (error, response, body) {
if (!error && response.statusCode == 200) {

    var jsonData = JSON.parse(body);
    console.log('-------------------------------------------------------');
    console.log('Title: ' + jsonData.Title);
    console.log('Year: ' + jsonData.Year);
    console.log('Rated: ' + jsonData.Rated);
    console.log('IMDB Rating: ' + jsonData.imdbRating);
    console.log('Country: ' + jsonData.Country);
    console.log('Language: ' + jsonData.Language);
    console.log('Plot: ' + jsonData.Plot);
    console.log('Actors: ' + jsonData.Actors);
    console.log('Rotten tomatoes rating: ' + jsonData.tomatoRating);
    console.log('Rotten tomatoes URL: ' + jsonData.tomatoURL);
    console.log('-------------------------------------------------------');
    

    }
 });
}

var doWhatItSays = function() {
//callback function from fs documentation formatted with error and data argument
fs.readFile('random.txt', 'utf8', function (err, data)  {
    if (err) throw err;
    
    var dataArr = data.split(',');
//creates an array of two indices from random.txt parsed by ,
    if (dataArr.length == 2) {
        pick(dataArr[0], dataArr[1]);
    } else if (dataArr.length == 1) {
        pick(dataArr[0]);
    }

    });
}



//switch statement takes user input to decide which function to run
var pick = function(caseData, functionData) {
    switch(caseData) {
      case 'my-tweets':
        getMyTweets();
        break;
      case 'spotify-this-song':
        getMeSpotify(functionData);
        break;
      case 'movie-this':
        getMeMovie(functionData);
        break;
      case 'concert-this': 
        getMeConcert(functionData);
        break;
      case 'do-what-it-says':
        doWhatItSays();
        break;
        default:
        console.log('LIRI does not know that');
    }
}

//function that i can pass arguments into when I run pick
var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};
//referencing arguments user enters: passes them to runthis
//(.argv[0] is node and .argv[1] is filename)
runThis(process.argv[2], process.argv[3]);