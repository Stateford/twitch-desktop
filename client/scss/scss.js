// scss.js

/**
 * @description : starts the sass helper
*/

const childProcess = require('child_process');

function sass(options) {
    this.CSS = options.css;
    this.SCSS = options.scss;

    childProcess.exec(`sass --watch ${this.SCSS}:${this.CSS}`, function(err, stdout, stderr) {
        if(err) throw err;

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

sass({scss: `${process.cwd()}\\client\\scss\\main.scss`, css: `${process.cwd()}\\client\\css\\main.css`});
