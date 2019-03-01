const routes = require('next-routes')();

                                                    // Name   Page      Pattern
module.exports = routes                      // ----   ----      -----
.add('index','/')                                       // about  about     /about
.add('vote', '/vote')      
//.add('home', '/HomePage')/// blog   blog      /blog/:slug
