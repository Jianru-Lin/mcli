var assert = require('assert')
var fs = require('fs')
var vstr = require('vstr')

var base_url = 'http://tv.miaodeli.com/couchdb/'

// callback function arguments:
// - error
// - result

exports.create_user = function(opt, cb) {
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
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
}

exports.update_user = function(opt, cb) {
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.name === 'string', 'invalid argument: opt.name')
    assert(typeof opt.password === 'string', 'invalid argument: opt.password')
    assert(typeof opt.rev === 'string', 'invalid argument: opt.rev')

    var url = vstr(base_url + '_users/org.couchdb.user:${name|uricom}?rev=${rev|uricom}', opt)
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
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
}

exports.retrive_user = function(opt, cb) {
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.name === 'string', 'invalid argument: opt.name')

    var url = vstr(base_url + '_users/org.couchdb.user:${name|uricom}', opt)
    var request_opt = {
        url: url,
        method: 'GET',
        json: true
    }
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
}

exports.delete_user = function(opt, cb) {
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.name === 'string', 'invalid argument: opt.name')
    assert(typeof opt.rev === 'string', 'invalid argument: opt.rev')

    var url = vstr(base_url + '_users/org.couchdb.user:${name|uricom}?rev=${rev|uricom}', opt)
    var request_opt = {
        url: url,
        method: 'DELETE',
        json: true
    }
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
}

exports.update_user_portrait = function(opt, cb) {

    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.name === 'string', 'invalid argument: opt.name')
    assert(typeof opt.file === 'string', 'invalid argument: opt.file')
    assert(typeof opt.rev === 'string', 'invalid argument: opt.rev')
    assert(typeof /\.jpg$/i.test(opt.file), 'invalid argument: opt.file')

    var url = vstr(base_url + '_users/org.couchdb.user:${name|uricom}/portrait.jpg?rev=${rev|uricom}', opt)
    var request_opt = {
        url: url,
        method: 'PUT'
    }
    return fs.createReadStream(opt.file).pipe(xrequest(request_opt, request_cb))

    function request_cb(err, res, body) {debugger
        // TODO
    }}

exports.retrive_user_portrait = function(opt, cb) {

    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.name === 'string', 'invalid argument: opt.name')

    var url = vstr(base_url + '_users/org.couchdb.user:${name|uricom}/portrait.jpg', opt)
    var request_opt = {
        url: url,
        method: 'GET'
    }
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
}

exports.delete_user_portrait = function(opt, cb) {

    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.name === 'string', 'invalid argument: opt.name')
    assert(typeof opt.rev === 'string', 'invalid argument: opt.rev')

    var url = vstr(base_url + '_users/org.couchdb.user:${name|uricom}/portrait.jpg?rev=${rev|uricom}', opt)
    var request_opt = {
        url: url,
        method: 'DELETE'
    }
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
    
}

exports.create_session = function(opt, cb) {
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.name === 'string', 'invalid argument: opt.name')
    assert(typeof opt.password === 'string', 'invalid argument: opt.password')

    var url = base_url + '_session'
    var body = {
        name: opt.name,
        password: opt.password
    }
    var request_opt = {
        url: url,
        method: 'POST',
        json: true,
        body: body
    }
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
}

exports.delete_session = function(opt, cb) {
    // ignore opt
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    var url = base_url + '_session'
    var request_opt = {
        url: url,
        method: 'DELETE',
        json: true
    }
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
}

exports.retrive_session = function(opt, cb) {
    // ignore opt
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    var url = base_url + '_session'
    var request_opt = {
        url: url,
        method: 'GET',
        json: true
    }
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
}

exports.create_room = function(opt, cb) {

}

exports.update_room = function(opt, cb) {

}

exports.delete_room = function(opt, cb) {

}

exports.create_chat = function(opt, cb) {

}

exports.update_chat = function(opt, cb) {

}

exports.delete_chat = function(opt, cb) {

}

exports.create_video = function(opt, cb) {

}

exports.update_video = function(opt, cb) {

}

exports.delete_video = function(opt, cb) {

}

exports.set_state = set_state
exports.get_state = get_state
exports.clear_state = clear_state
exports.state_filename = state_filename

function set_state(state) {
    assert(typeof state === 'object' && state != null, 'invalid argument: state')

    var fs = require('fs')
    var filename = state_filename()
    fs.writeFileSync(filename, JSON.stringify(state, null, 4))
}

function get_state() {
    var fs = require('fs')
    var filename = state_filename()
    if (!fs.existsSync(filename)) {
        return null
    }
    try {
        var content = JSON.parse(fs.readFileSync(filename, {encoding: 'utf8'}))
        return content
    }
    catch (err) {
        return null
    }
}

function clear_state() {
    var fs = require('fs')
    var filename = state_filename()
    try {
        fs.unlinkSync(filename)
        return true
    }
    catch(err) {
        // ignore error
        return false
    }
}

function state_filename() {
    var path = require('path')
    var tmp_dir = process.env['temp']
    var state_filename = process.env['mcli-state'] || 'mcli-state.json'
    var full_filename = path.resolve(tmp_dir, state_filename)
    return full_filename
}

function xrequest(opt, cb) {
    var request = require('request')
    var request_debug = require('request-debug')(request)

    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    // load last cookie
    var state = get_state()
    var cookie = state && state.cookie ? state.cookie : null

    // send request
    return request(opt, request_cb)

    function request_cb(err, res, body) {
        if (err) {
            cb(err, res, body)
            return
        }

        // remember new cookie
        if (res.headers['set-cookie']) {
            state = state || {}
            state.cookie = res.headers['set-cookie']
            set_state(state)
        }

        // invoke cb
        cb(res, body)
    }
}