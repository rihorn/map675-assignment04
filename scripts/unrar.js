var Unrar = require('node-unrar');
 
var rar = new Unrar('../project-files/South_America.rar');
 
/// Create '/path/to/dest/' before rar.extract()
 
rar.extract('../data/South_American_Hydrography/', null, function (err) {
    //file extracted successfully.
});