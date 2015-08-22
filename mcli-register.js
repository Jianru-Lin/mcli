var m = require('./index')
var vstr = require('vstr')
var argv = require('yargs').usage('Usage: mcli-register -n <name> -p <password>')
                           .option('name', {alias: 'n', demand: true})
                           .option('password', {alias: 'p', demand: true})
                           .argv

var opt = {
    name: argv.name,
    password: argv.password
}
m.register(opt)