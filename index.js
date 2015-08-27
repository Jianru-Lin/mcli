var assert = require('assert')
var fs = require('fs')
var path = require('path')
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

    function request_cb(err, res, body) {
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
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.creator === 'string', 'invalid argument: opt.creator')
    assert(typeof opt.title === 'string', 'invalid argument: opt.title')
    assert(typeof opt.intro === 'string', 'invalid argument: opt.intro')

    var url = base_url + 'room/'
    var body = {
        creator: opt.creator,
        next_channel_id: 1,
        channels: [{
            channel_id: 0,
            parent_channel_id: null,
            creator: opt.creator,
            title: opt.title,
            intro: opt.intro,
            videos: []
        }]
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

exports.retrive_room = function(opt, cb) {
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.id === 'string', 'invalid argument: opt.id')

    var url = vstr(base_url + 'room/${id|uricom}', opt)
    var request_opt = {
        url: url,
        method: 'GET',
        json: true
    }
    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        cb(err, body)
    }
}

exports.update_room = function(opt, cb) {

}

exports.delete_room = function(opt, cb) {
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.id === 'string', 'invalid argument: opt.id')
    assert(typeof opt.rev === 'string', 'invalid argument: opt.rev')

    var url = vstr(base_url + 'room/${id|uricom}?rev=${rev|uricom}', opt)
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

exports.create_channel = function(opt, cb) {
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    assert(typeof opt.room_id === 'string', 'invalid argument: opt.room_id')
    assert(is_null(opt.parent_channel_id) || is_number(opt.parent_channel_id), 'invalid argument: opt.parent_channel_id')
    assert(typeof opt.creator === 'string', 'invalid argument: opt.creator')
    assert(typeof opt.title === 'string', 'invalid argument: opt.title')
    assert(typeof opt.intro === 'string', 'invalid argument: opt.intro')

    // retrive room info first
    exports.retrive_room({id: opt.room_id}, function(err, result) {
        // failed?
        if (err || result.error) {
            cb('fail to retrive room info', null)
            return
        }

        // ok, we can construct what we want to update now
        var room = result
        var new_channel = {
            creator: opt.creator,
            channel_id: room.next_channel_id,
            parent_channel_id: opt.parent_channel_id,
            title: opt.title,
            intro: opt.intro,
            videos: []
        }
        room.next_channel_id += 1
        room.channels = room.channels || []
        room.channels.push(new_channel)

        // well, it's time to apply our modify
        var url = vstr(base_url + 'room/${_id|uricom}?rev=${_rev|uricom}', room)
        var request_opt = {
            url: url,
            method: 'PUT',
            json: true,
            body: room
        }
        
        xrequest(request_opt, request_cb)

        function request_cb(err, res, body) {
            // TODO
        }    
    })

}

exports.retrive_channel = function(opt, cb) {
    
}

exports.update_channel = function(opt, cb) {
    
}

exports.delete_channel = function(opt, cb) {
    
}

exports.create_chat = function(opt, cb) {
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    // creator
    assert_nonempty_string(opt.creator, 'invalid argument: opt.creator')

    // private
    assert_bool(opt.private, 'invalid argument: opt.private')

    // mentions
    assert(is_null(opt.mentions) || is_array_of_type(opt.mentions, 'string'), 'invalid argument: opt.mentions')

    // content
    assert(typeof opt.content === 'string', 'invalid argument: opt.content')

    // content_type
    assert(typeof opt.content_type === 'string', 'invalid argument: opt.content_type')

    // dest
    // case a: room_id + channel_id
    // case b: room_id + channel_id + user
    // case c: user
    assert_object(opt.dest, 'invalid argument: opt.dest')
    var room_id = opt.dest.room_id
    var channel_id = opt.dest.channel_id
    var user = opt.dest.user
    var case_a = is_nonempty_string(room_id) && is_nonempty_string(channel_id) && is_null(user)
    var case_b = is_nonempty_string(room_id) && is_nonempty_string(channel_id) && is_nonempty_string(user)
    var case_c = is_null(room_id) && is_null(channel_id) && is_nonempty_string(user)
    assert(case_a || case_b || case_c, 'invalid argument: opt.dest')

    // file
    assert(is_null(opt.file) || is_nonempty_string(opt.file), 'invalid argument: opt.file')

    // ok, prepare my request

    var body = {
        creator: opt.creator,
        private: opt.private,
        dest: opt.dest,
        mentions: opt.mentions,
        content: opt.content,
        content_type: opt.content_type,
        room_id: opt.room_id,
        channel_id: opt.channel_id
    }

    if (opt.file) {
        var new_filename = generate_uuid() + path.extname(opt.file)
        // var new_filename = path.basename(opt.file)
        body._attachments = {}
        body._attachments[new_filename] = {
            follows: true,
            content_type: what_mime(opt.file),
            length: fs.lstatSync(opt.file).size // EXCEPTION Maybe
        }

        var url = base_url + 'chat/' + generate_uuid()
        var request_opt = {
            url: url,
            method: 'PUT',
            headers:{},
            multipart: [{
                'Content-Type': 'application/json',
                body: JSON.stringify(body)
            }, {
                'Content-Type': what_mime(opt.file),
                body: fs.createReadStream(opt.file)
            }]
        }
    }
    else {
        var url = base_url + 'chat/'
        var request_opt = {
            url: url,
            method: 'POST',
            json: true,
            body: body
        }        
    }

    // send request

    return xrequest(request_opt, request_cb)

    function request_cb(err, res, body) {
        // TODO
    }
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

    // check args
    assert(typeof opt === 'object' && opt != null, 'invalid argument: opt')
    assert(cb === null || cb === undefined || typeof cb === 'function', 'invalid argument: cb')
    cb = cb || function() {}

    // load module
    var request = require('request')
    //var request_debug = require('request-debug')(request)
    var CookieJar = request.jar()._jar.constructor // hack, use the same CookieJar as the request lib
    
    // load last cookie from state file if exits or create an new one
    var last_state = get_state()
    var cookie_jar = request.jar()

    if (last_state && last_state.cookie_jar) {
        cookie_jar._jar = CookieJar.deserializeSync(last_state.cookie_jar)
    }

    // send request
    //request.defaults({jar: cookie_jar})
    opt.jar = cookie_jar
    return request(opt, request_cb)

    function request_cb(err, res, body) {
        if (err) {
            cb(err, res, body)
            return
        }

        // save state to save cookie_jar
        if (!last_state) {
            last_state = {}
        }
        last_state.cookie_jar = cookie_jar._jar.serializeSync() // hack, break the request lib wrapper
        set_state(last_state)

        // DEBUG: print all the information
        console.log(res.statusCode)
        for (var name in res.headers) {
            console.log(name + ': ' + res.headers[name])
        }
        console.log('')
        if (/application\/json/.test(res.headers['content-type'])) {
            var o = body
            if (typeof body === 'string') {
                o = JSON.parse(o)
            }
            console.log(JSON.stringify(o, null, 4))
        }
        else if (Buffer.isBuffer(body)) {
            console.log(Buffer.toString('hex'))
        }
        else {
            console.log(body)
        }

        // invoke cb
        cb(null, res, body)
    }
}

function is_array_of_type(o, type) {
    return Array.isArray(o) && o.every(function(item) {
        return typeof item === type
    })
}

function is_string(v) {
    return typeof v === 'string'
}

function is_nonempty_string(v) {
    return is_string(v) && v.length > 0
}

function is_object(v) {
    return typeof v === 'object' && v !== null
}

function is_null(v) {
    return v === null
}

function is_bool(v) {
    return typeof v === 'boolean'
}

function is_number(v) {
    return typeof v === 'number'
}

function assert_number(v, t) {
    assert(is_number(v), t)
}

function assert_nonempty_string(v, t) {
    assert(is_nonempty_string(v), t)
}

function assert_string(v, t) {
    assert(is_string(v), t)
}

function assert_object(v, t) {
    assert(is_object(v), t)
}

function assert_bool(v, t) {
    assert(is_bool(v), t)
}

function what_mime(filename) {
    assert_nonempty_string(filename)
    var mime = require('mime')
    return mime.lookup(filename)
}

function generate_uuid() {
    var uuid = require('uuid')
    // random based version
    return uuid.v4().replace(/-/g, '')
}

exports.what_mime = what_mime
exports.generate_uuid = generate_uuid