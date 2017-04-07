const gulp = require("gulp");
const electron = require("electron-connect").server.create();

gulp.stask('serve', () => {
    // start browser process
    electron.start();

    //restart browser process
    gulp.watch('main.js', electron.restart);

    // reloac render process
    gulp.watch(['index.js', 'index.html'], electron.reload());
})
