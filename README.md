# node-project-template
### set up your node project quickly

This is a node starter template, includes eslint, prettier, gulp and mocha. 

### Instructions:

##### 1 - clone the git repo
```
$> git clone https://github.com/mikeybkats/node-project-template.git
```

##### 2 - add your code to the src directory
```
$> cd src
$> touch newfile.js
```

##### 3 - modify the gulpfile
```
gulp.task("default", () =>
    gulp.src([
        "src/app.js",
        // ADD NEW FILE PATHS HERE
        // src/newfile.js
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
$> node newfile.js 
```

##### modify the project settings to your liking
