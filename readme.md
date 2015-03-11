Tokorua
=======================

Tokorua, Maori for 'pairs', is a game that is often called
[concentration or memory](http://en.wikipedia.org/wiki/Concentration_(game))
and was primarily built to learn a specific set of web development technologies
and techniques.

## The game

The game is played by selecting 2 tiles. If they match, they stay visible and
you get points. If they don't match, the tiles flip back over. You continue
selecting and matching tiles, and the game ends when all tiles have been matched.
Your goal is to complete the game as quick as you can with as few flips as possible.

## The stack

Some of the technologies used in this app are:

* Server-side
  * [Sails.js](http://sailsjs.org)
  * [Azure websites](http://azure.microsoft.com/en-us/services/websites)
  * [MongoDB](http://mongodb.com) on [MongoLab](http://mongolab.com)
* Client-side
  * [React](http://facebook.github.io/react) with the Flux Dispatcher
  * [Material UI](http://material-ui.com)
  * [Less](http://lesscss.org)
  * (Haven't decided on a router yet)
* Builds
  * [Gulp.js](http://gulpjs.com)
  * [Browserify](http://browserify.org)
  * Maybe [Yeoman](http://yeoman.io)

## The rationale and approach

I have a larger side project I intend to rebuild using different technologies that
its using today. I'm considering some of these (and some new techniques) and want
to try them out in an environment that has less risk and complexity.

I'm interested in applying [isomorphic JavaScript](http://isomorphic.net/) by
using React on the server and the client. I have quite a bit of experience with
[Meteor](http://meteor.com) and want to see what the alternatives feel like.
I'm also in building a UI that uses Google's
[Material Design](http://www.google.com/design/spec/material-design/introduction.html).
