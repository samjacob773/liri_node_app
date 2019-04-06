#liri_node_app

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI uses the following commands:

*my-tweets

*spotify-this-song

*movie-this

*do-what-it-says

Technologies used:

*Node.js
*Javascript
*npm packages: require, twitter, spotify

##How to Run LIRI-Bot

1: node liri.js my-tweets This will show my last 20 tweets and when they were created at in your terminal/bash window.

![My Tweets Input](/images/my-tweets_input.jpg)
Format: ![My Tweets Input] (url)

![My Tweets Output](/images/my-tweets_output.jpg)
Format: ![My Tweets Output] (url)

2: node liri.js spotify-this-song <song name here> This will show the following information about the song in your terminal/bash window * Artist(s) * The song's name * A preview link of the song from Spotify * The album that the song is from

![Spotify This Song Input](/images/spotify-this-song_input.jpg)
Format: ![Spotify This Song Input] (url)

![Spotify This Song Output](/images/spotify-this-song_output.jpg)
Format: ![Spotify This Song Output] (url)

3: node liri.js movie-this <movie name here>

![Movie This Input](/images/movie-this_input.jpg)
Format: ![Movie This Input] (url)

![Movie This Output](/images/movie-this_output.jpg)
Format: ![Movie This Output] (url)

This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.

4: node liri.js do-what-it-says
This will output the command placed in random.txt file

![Do What It Says Input](/images/do-what-it-says_input.jpg)
Format: ![Do What It Says Input] (url)

![Do What It Says Output](/images/do-what-it-says_output.jpg)
Format: ![Do What It Says Output] (url)