var exec = require('child_process').exec;
exec('NET SESSION', function(err,so,se) {
      console.log(se.length === 0 ? "admin" : "not admin");
});
