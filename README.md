# node-project-template
### set up your node project quickly

This is a node starter template, includes eslint, prettier, gulp and mocha. If you're just starting out I hope this makes the process easier for you.

Notes:
- The [eslint](https://github.com/eslint/eslint) is set up the way I like it. Please modify according to your own needs. 
- [Prettier](https://github.com/prettier/prettier) automatically fixes syntax errors that are out of sync with the eslint file
- [Gulp](https://github.com/gulpjs/gulp) is a task runner – it helps you automate things. Currently it's just set up to convert es6/2018 format javascript to node compatible javascript and output it to the dist folder
- [Mocha](https://github.com/mochajs/mocha) is at testing framework. It is set up to run tests located in the test folder. Run mocha by typing `$> npm test` into the terminal. Note there is an eslint file in the test folder, which is necessary for the linter to ignore mocha commands that normally appear undefined to the linter.

### Instructions:

##### clone the git repo
```
$> git clone https://github.com/mikeybkats/node-project-template.git
```

##### run npm install
```
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
        "src/app.js",
        // ADD NEW FILE PATHS HERE
        // src/newApp.js
    ])
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(gulp.dest("dist"))
)
```

##### run gulp
```
$> gulp
// [11:08:42] Using gulpfile ~/javascript/node-project-template/gulpfile.js
// [11:08:42] Starting 'default'...
// [11:08:42] Finished 'default' after 137 ms
```

##### run your program
```
$> cd dist
$> node newApp.js 
```

##### modify the project settings to your liking
