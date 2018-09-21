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

gulp.task("test", () =>
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
  gulp.watch("src/*.js", ["default"])
  gulp.watch("test/*.js", ["test"])
})
