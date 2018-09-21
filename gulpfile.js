const gulp = require("gulp")
const babel = require("gulp-babel")

gulp.task("default", () =>
  gulp
    .src(["src/*.js"])
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(gulp.dest("dist"))
)

gulp.task("tests", () =>
  gulp
    .src(["test/*.js"])
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(gulp.dest("dist/test"))
)

gulp.task("watch", () => {
  gulp.watch("test/*.js", ["tests"])
  gulp.watch("src/*.js", ["default"])
})
