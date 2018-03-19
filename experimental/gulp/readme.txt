To run this example you've to install gulp globally using
npm install gulp -g
(you may have to use "sudo" at the beginning of the command)

You also have to install gulp as project dependency using:
npm install gulp --save-dev
within you project folder. "--save-dev" is used to save gulp as developer
dependency so it won't be downloaded if you run the default "npm install"
command to exclude unnecessary dependencies while running in production

Gulp uses default JS to run, that's the reason why the "gulpfile.js" ends with
".js". The "gulpfile.js" is the default gulp file which is used to do everything
you want to do with gulp.

In this example I create some folders and files I'm using for a basic NodeJS
setup for my projects. The task I've defined to create this basic structure is
called "basicServerSetup". I also have added "basicServerSetup" as default
task to the gulp file by adding it to the task array of the "default"-task
definition on line 9.

The "default" task will be called if you run "gulp" as command itself.

To run a specific task you've to use "gulp taskName"
