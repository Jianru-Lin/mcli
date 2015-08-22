var assert = require('assert')
var vstr = require('vstr')

var base_url = 'http://tv.miaodeli.com/couchdb/'

// callback function arguments:
// - error
// - result

// 注册一个新用户
// 注意：完成此操作后并不会自动登录
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
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
}

// 反注册当前用户（需要先登录）
exports.unregister = function(opt, cb) {

}

// 修改当前用户密码（需要先登录）
exports.change_password = function(opt, cb) {

}

// 登录
exports.login = function(opt, cb) {
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

exports.logout = function(opt, cb) {
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