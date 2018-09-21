# node-project-template
### set up your node project quickly

This is a node starter template, includes eslint, prettier, gulp and mocha. If you're just starting out I hope this makes the process easier for you. This template allows you to write es2018 syntax with node. It's set up to watch your src directory and write to the dist directory. It uses gulp to watch and write to the folder automatically. Setting up like this takes a minute, maybe this template can save you some time?

Notes:
- The [eslint](https://github.com/eslint/eslint) is set up the way I like it. Please modify according to your own needs. 
- [Prettier](https://github.com/prettier/prettier) automatically fixes syntax errors that are out of sync with the eslint file
- [Gulp](https://github.com/gulpjs/gulp) is a task runner – it helps you automate things. Currently it's just set up to convert es6/2018 format javascript to node compatible javascript and output it to the dist folder
- [Mocha](https://github.com/mochajs/mocha) is at testing framework. It is set up to run tests located in the test folder. Run mocha by typing `$> npm test` into the terminal. Note there is an eslint file in the test folder, which is necessary for the linter to ignore mocha commands that normally appear undefined to the linter.

### Instructions:

##### clone the git repo
```
$> git clone https://github.com/mikeybkats/node-project-template.git [add destination folder here]
```

##### run npm install
```
$> cd [into destination folder]
$> npm install
```

##### add your code to the src directory
```
$> cd src
$> touch newApp.js
```

##### modify the gulpfile
```
gulp.task("default", () =>
    gulp.src([
        "src/*.js",
        // ADD NEW FILE PATHS HERE
        // src/subFolder/newApp.js
    ])
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(gulp.dest("dist"))
)
```

##### run gulp
```
$> gulp watch
[14:22:04] Using gulpfile ~/javascript/node-project-template/gulpfile.js
[14:22:04] Starting 'watch'...
[14:22:04] Finished 'watch' after 6.58 ms
// this is setup to write tests and src js files to the dist folder
```

##### run your program
```
$> cd dist
$> node newApp.js 
```

##### run your tests
```
$> npm test
// Mocha
//    ✓ should run our tests using npm
//
//
//  1 passing (4ms)
```

##### modify the project settings to your liking
Now you should have a simple Node Js template ready for your project. Happy Coding.
