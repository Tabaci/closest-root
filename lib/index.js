'use strict'

let fs = require('fs')
let path = require('path')

/**
 * @author Alexander Hållenius
 * 
 * Allows the user to traverse upwards to locate the root folder of an npm-
 * initialized project.
 * 
 * @param {string} fromDir - The directory to begin traversing upwards from.
 * 
 * @return {string} The root directory.
 */
function closestRoot (fromDir)
{
	return traverseUp(fromDir)
}

/**
 * Traverse upwards recursively until the root directory has been located.
 * 
 * @param {string} curDir - The current directory.
 */
function traverseUp (curDir)
{
	if (isRootDir(curDir))
		return curDir
	else
	{
		// Traverse up one level and return the result of that
		let dirAbove = path.resolve(curDir, '..')
		
		return traverseUp(dirAbove)
	}
}

/**
 * Checks if the directory is a root directory.
 * 
 * @param {string} dir - The directory to check if is root.
 */
function isRootDir (dir)
{
	let files = fs.readdirSync(dir)
	
	/* Notice!
	 * We are assuming that there is a 'package.json' file in the root of the 
	 * application. This means that we cannot have files called 'package.json' 
	 * in the traversal path, as that will then be viewed as a correct root 
	 * directory.
	 * 
	 * What we do know for sure, however, is that according to 
	 * https://github.com/npm/npm/issues/8222, the name of the 'package.json' 
	 * will most certainly not change anytime soon. As such, it is imperative 
	 * that any other files that needs to be called 'package.json' are moved 
	 * to another directory, where it does not intervene with this module.
	 */
	return files.includes('package.json')
}

if (process.env.IS_TEST)
{
	module.exports = {
		closestRoot: closestRoot, 
		isRootDir: isRootDir,
		traverseUp: traverseUp
	}
}
else
	module.exports = closestRoot
