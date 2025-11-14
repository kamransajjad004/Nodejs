// OS Module in Node.js
/*
Node.js comes with a built-in modules called os that provides 
information about your computer,s operating system.

You don't need to install anything - just import it:
ex: import os from "os"
*/

import os from "os"


console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length)
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.freemem());
console.log(os.type());
console.log(os.version());
console.log(os.uptime());


