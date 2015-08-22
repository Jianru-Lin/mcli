var assert = require('assert')
var request = require('request')
var request_debug = require('request-debug')(request)
var vstr = require('vstr')

var base_url = 'http://tv.miaodeli.com/couchdb/'

// callback function arguments:
// - error
// - result

exports.register = function(opt, cb) {
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.name === 'string', 'invalid argument: opt.name')
    assert(typeof opt.password === 'string', 'invalid argument: opt.password')

    var url = vstr(base_url + '_users/org.couchdb.user:${name|uricom}', opt)
    var body = {
        name: opt.name,
        password: opt.password,
        roles: [],
        type: 'user'
    }
    var request_opt = {
        url: url,
        method: 'PUT',
        json: true,
        body: body
    }
    return request(request_opt, request_cb)

    function request_cb(err, res, body) {
        if (err) {
            cb(err)
            return
        }

        cb(null, body)
    }
}

exports.unregister = function(opt, cb) {

}

exports.login = function(opt, cb) {

}

exports.logout = function(opt, cb) {

}

exports.create_room = function(opt, cb) {

}

exports.update_room = function(opt, cb) {

}

exports.delete_room = function(opt, cb) {

}