var exec = require('child_process').exec;

var cmd = 'unrar x project-files/South_America.rar data/';



exec(cmd, function(error, stdout, stderr) {

 if(error) throw error

 console.log(stdout, stderr)

});;