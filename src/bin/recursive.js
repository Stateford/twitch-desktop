const fs = require('fs');
const path = require('path');



class FS {
    static checkPath(dir) {
        return new Promise((resolve, reject) => {
            fs.stat(dir, err => {
                if(err) return reject(err);
                return resolve(true)
            })
        });
    }

    static writeFile(dir, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(dir, data, err => {
                if(err) return reject(err);
                return resolve('DONE');
            })
        });
    }

    static mkDir(dir) {
        return new Promise((resolve, reject) => {
            fs.mkdir(dir, err => {
                if(err) return reject(err);
                return resolve("DONE");
            })
        });
    }


    static recursive(dir, data) {
        return new Promise((resolve, reject) => {
            this.checkPath(dir)
                .then(
                    this.writeFile(dir, data)
                        .then(resolve)
                        .catch(reject)
                )
                .catch(
                    FS.mkDir(dir)
                        .then(
                            this.writeFile(dir, data)
                                .then(resolve)
                                .catch(reject)
                        )
                        .catch(reject)
                )
        });
    }
}

FS.recursive("./test/test/test.json", JSON.stringify({test: "test"}, null, 4))
    .then(console.log)
    .catch(console.error);
