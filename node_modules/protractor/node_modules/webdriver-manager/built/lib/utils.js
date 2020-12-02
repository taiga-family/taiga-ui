"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process = require("child_process");
const fs = require("fs");
const http = require("http");
const path = require("path");
const config_1 = require("./config");
function spawnFactory(sync) {
    return (cmd, args, stdio, opts) => {
        if ((config_1.Config.osType() === 'Windows_NT') && (cmd.slice(-4) !== '.exe')) {
            if (fs.existsSync(cmd + '.exe')) {
                cmd += '.exe';
            }
            else {
                args = ['/c'].concat([cmd], args);
                cmd = 'cmd';
            }
        }
        if (stdio) {
            opts = opts || {};
            opts.stdio = stdio;
        }
        if (sync) {
            return child_process.spawnSync(cmd, args, opts);
        }
        else {
            return child_process.spawn(cmd, args, opts);
        }
    };
}
exports.spawn = spawnFactory(false);
exports.spawnSync = spawnFactory(true);
function request(method, port, path, timeout, data) {
    let headers = {};
    let hasContent = data && ((method == 'POST') || (method == 'PUT'));
    if (hasContent) {
        data = data ? JSON.stringify(data) : '';
        headers['Content-Length'] = data.length;
        headers['Content-Type'] = 'application/json;charset=UTF-8';
    }
    return new Promise((resolve, reject) => {
        let unexpectedEnd = () => {
            reject({ code: 'UNKNOWN', message: 'Request ended unexpectedly' });
        };
        let req = http.request({ port: parseInt(port), method: method, path: path, headers: headers }, (res) => {
            req.removeListener('end', unexpectedEnd);
            if (res.statusCode !== 200) {
                reject({ code: res.statusCode, message: res.statusMessage });
            }
            else {
                let buffer = [];
                res.on('data', buffer.push.bind(buffer));
                res.on('end', () => {
                    resolve(buffer.join('').replace(/\0/g, ''));
                });
            }
        });
        if (timeout) {
            req.setTimeout(timeout, () => {
                reject({ code: 'TIMEOUT', message: 'Request timed out' });
            });
        }
        req.on('error', reject);
        req.on('end', unexpectedEnd);
        if (hasContent) {
            req.write(data);
        }
        req.end();
    });
}
exports.request = request;
function adb(sdkPath, port, command, timeout, args) {
    return new Promise((resolve, reject) => {
        let child = exports.spawn(path.resolve(sdkPath, 'platform-tools', 'adb'), ['-s', 'emulator-' + port, command].concat(args || []), 'pipe');
        let done = false;
        let buffer = [];
        child.stdout.on('data', buffer.push.bind(buffer));
        child.on('error', (err) => {
            if (!done) {
                done = true;
                reject(err);
            }
        });
        child.on('exit', (code, signal) => {
            if (!done) {
                done = true;
                if (code === 0) {
                    resolve(buffer.join(''));
                }
                else {
                    reject({
                        code: code,
                        message: 'abd command "' + command + '" ' +
                            (signal ? 'received signal ' + signal : 'returned with a non-zero exit code') +
                            'for emulator-' + port
                    });
                }
            }
        });
        if (timeout) {
            setTimeout(() => {
                if (!done) {
                    done = true;
                    child.kill();
                    reject({
                        code: 'TIMEOUT',
                        message: 'adb command "' + command + '" timed out for emulator-' + port
                    });
                }
            }, timeout);
        }
    });
}
exports.adb = adb;
//# sourceMappingURL=utils.js.map