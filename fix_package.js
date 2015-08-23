var fs = require('fs')
var path = require('path')

var package_path = path.resolve(__dirname, 'package.json')
var bin_path = path.resolve(__dirname, 'bin')

// load package object
var package = JSON.parse(fs.readFileSync(package_path, {encoding: 'utf8'}))

// enumerate bin directory
var files = fs.readdirSync(bin_path)

// update bin property of the package object
package.bin = {}
files.forEach(function(file) {
    package.bin[file] = 'bin/' + file
})

// update version
var version = parse_version(package.version)
++version.c
package.version = stringify_version(version)

// log result
console.log(JSON.stringify(package, null, 4))

// save result
fs.writeFileSync(package_path, JSON.stringify(package, null, 4))

function parse_version(v) {
    var match = /^(\d+)\.(\d+)\.(\d+)$/.exec(v)
    if (!match) {
        console.log('unknown version format: ' + v)
        process.exit(0)
    }
    return {
        a: parseInt(match[1]),
        b: parseInt(match[2]),
        c: parseInt(match[3])
    }
}

function stringify_version(v) {
    return v.a + '.' + v.b + '.' + v.c
}