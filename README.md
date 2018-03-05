# closest-root

This *npm* module allows for the user to locate the closest *npm* root directory 
from a specified path.

## Notice

It is assumed that there is a 'package.json' file located at the root of the 
application (or module). This means that we cannot have files called 
'package.json' in the traversal path, as that will then be viewed as a correct 
root directory.

What we do know for sure, however, is that according to 
[an issue for npm on GitHub](https://github.com/npm/npm/issues/8222), the name 
of the 'package.json' file will most certainly not change anytime soon. As such, 
it is imperative that any other files that need to be called 'package.json' are 
moved to another directory, where it does not interfere with this module

## Usage

```javascript
let rootDirectory = require('closest-root')(__dirname)

/* This will output the closest root directory from the current file, as 
 * '__dirname' returns the name of the current directory we are inside.
 */
console.log(rootDirectory)
```

## License

This module, and the code therein, is licensed under ISC.
