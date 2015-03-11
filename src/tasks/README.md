# About the `tasks` folder

The `tasks` directory is a suite of Gulp tasks and their configurations, bundled for your convenience.  The Gulp integration is mainly useful for bundling front-end assets, (like stylesheets, scripts, & markup templates) but it can also be used to run all kinds of development tasks, from browserify compilation to database migrations.

If you haven't used [Gulp](http://gulpjs.com/) before, be sure to check out the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) guide, as it explains how to create a Gulpfile as well as install and use Gulp plugins. Once you're familiar with that process, read on!


### How does this work?

The asset pipeline bundled in Sails is a set of Gulp tasks configured with conventional defaults designed to make your project more consistent and productive.

The entire front-end asset workflow in Sails is completely customizable-- while it provides some suggestions out of the box, Sails makes no pretense that it can anticipate all of the needs you'll encounter building the browser-based/front-end portion of your application.  Who's to say you're even building an app for a browser?



### What tasks does Sails run automatically?

Sails runs some of these tasks (the ones in the `tasks/register` folder) automatically when you run certain commands.

###### `sails lift`

Runs the `default` task (`tasks/register/default.js`).

###### `sails lift --prod`

Runs the `prod` task (`tasks/register/prod.js`).

###### `sails www`

Runs the `build` task (`tasks/register/build.js`).

###### `sails www --prod` (production)

Runs the `buildProd` task (`tasks/register/buildProd.js`).


### Can I customize this for SASS, Angular, client-side Jade templates, etc?

You can modify, omit, or replace any of these Gulp tasks to fit your requirements. You can also add your own Gulp tasks- just add a `someTask.js` file in the `tasks/config` directory to configure the new task, then register it with the appropriate parent task(s) (see files in `tasks/register/*.js`).


### What if I'm not building a web frontend?

That's ok! A core tenant of Sails is client-agnosticism-- it's especially designed for building APIs used by all sorts of clients; native Android/iOS/Cordova, serverside SDKs, etc.

If you still want to use Gulp for other purposes, but don't want any of the default web front-end stuff, just delete your project's `assets` folder and remove the front-end oriented tasks from the `tasks/register` and `tasks/config` folders.  You can also run `sails new myCoolApi --no-frontend` to omit the `assets` folder and front-end-oriented Gulp tasks for future projects.  You can also replace your `sails-generate-frontend` module with alternative community generators, or create your own.  This allows `sails new` to create the boilerplate for native iOS apps, Android apps, Cordova apps, SteroidsJS apps, etc.

