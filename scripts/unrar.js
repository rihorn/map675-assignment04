var Unrar = require('node-unrar');
 
var rar = new Unrar('data/South_America_Hydrography.rar_t=1484592815');
 
/// Create '/path/to/dest/' before rar.extract()
 
rar.extract('data/SA_Hydro_unrarred.zip', null, function (err) {
    //file extracted successfully.
});