const gulp = require("gulp")
const babel = require("gulp-babel")

gulp.task("default", () =>
  gulp
    .src(["src/*.js", "src/app.js"])
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(gulp.dest("dist"))
)
