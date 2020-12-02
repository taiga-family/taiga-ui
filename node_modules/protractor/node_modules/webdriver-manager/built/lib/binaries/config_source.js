"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const request = require("request");
const url = require("url");
const xml2js = require("xml2js");
const logger_1 = require("../cli/logger");
const config_1 = require("../config");
const http_utils_1 = require("../http_utils");
let logger = new logger_1.Logger('config_source');
class ConfigSource {
    constructor() {
        this.ostype = config_1.Config.osType();
        this.osarch = config_1.Config.osArch();
        this.out_dir = config_1.Config.getSeleniumDir();
    }
}
exports.ConfigSource = ConfigSource;
class XmlConfigSource extends ConfigSource {
    constructor(name, xmlUrl) {
        super();
        this.name = name;
        this.xmlUrl = xmlUrl;
    }
    getFileName() {
        try {
            fs.statSync(this.out_dir);
        }
        catch (e) {
            fs.mkdirSync(this.out_dir);
        }
        return path.resolve(this.out_dir, this.name + '-response.xml');
    }
    getXml() {
        let fileName = this.getFileName();
        let content = this.readResponse();
        if (content) {
            return Promise.resolve(content);
        }
        else {
            return this.requestXml().then(text => {
                let xml = this.convertXml2js(text);
                fs.writeFileSync(fileName, text);
                return xml;
            });
        }
    }
    readResponse() {
        let fileName = this.getFileName();
        try {
            let contents = fs.readFileSync(fileName).toString();
            let timestamp = new Date(fs.statSync(fileName).mtime).getTime();
            let size = fs.statSync(fileName).size;
            let now = Date.now();
            // On start, read the file. If not on start, check use the cache as long as the
            // size > 0 and within the cache time.
            // 60 minutes * 60 seconds / minute * 1000 ms / second
            if (config_1.Config.runCommand === 'start' || (size > 0 && (now - (60 * 60 * 1000) < timestamp))) {
                return this.convertXml2js(contents);
            }
            else {
                return null;
            }
        }
        catch (err) {
            return null;
        }
    }
    requestXml() {
        return new Promise((resolve, reject) => {
            let options = http_utils_1.HttpUtils.initOptions(this.xmlUrl);
            let curl = this.getFileName() + ' ' + options.url;
            if (http_utils_1.HttpUtils.requestOpts.proxy) {
                let pathUrl = url.parse(options.url.toString()).path;
                let host = url.parse(options.url.toString()).host;
                let newFileUrl = url.resolve(http_utils_1.HttpUtils.requestOpts.proxy, pathUrl);
                curl = this.getFileName() + ' \'' + newFileUrl + '\' -H \'host:' + host + '\'';
            }
            if (http_utils_1.HttpUtils.requestOpts.ignoreSSL) {
                curl = 'k ' + curl;
            }
            logger.info('curl -o' + curl);
            let req = request(options);
            req.on('response', response => {
                if (response.statusCode === 200) {
                    let output = '';
                    response.on('data', (data) => {
                        output += data;
                    });
                    response.on('end', () => {
                        resolve(output);
                    });
                }
                else {
                    reject(new Error('response status code is not 200'));
                }
            });
        });
    }
    convertXml2js(xml) {
        let retResult = null;
        xml2js.parseString(xml, (err, result) => {
            retResult = result;
        });
        return retResult;
    }
}
exports.XmlConfigSource = XmlConfigSource;
class JsonConfigSource extends ConfigSource {
    constructor(name, jsonUrl) {
        super();
        this.name = name;
        this.jsonUrl = jsonUrl;
    }
    getFileName() {
        try {
            fs.statSync(this.out_dir);
        }
        catch (e) {
            fs.mkdirSync(this.out_dir);
        }
        return path.resolve(this.out_dir, this.name + '-response.json');
    }
}
exports.JsonConfigSource = JsonConfigSource;
class GithubApiConfigSource extends JsonConfigSource {
    constructor(name, url) {
        super(name, url);
    }
    /**
     * This is an unauthenticated request and since Github limits the rate, we will cache this
     * to a file. { timestamp: number, response: response }. We will check the timestamp and renew
     * this request if the file is older than an hour.
     */
    getJson() {
        let fileName = this.getFileName();
        let content = this.readResponse();
        if (content) {
            return Promise.resolve(JSON.parse(content));
        }
        else {
            return this.requestJson().then(body => {
                let json = JSON.parse(body);
                fs.writeFileSync(fileName, JSON.stringify(json, null, '  '));
                return json;
            });
        }
    }
    requestJson() {
        return new Promise((resolve, reject) => {
            let options = http_utils_1.HttpUtils.initOptions(this.jsonUrl);
            options = http_utils_1.HttpUtils.optionsHeader(options, 'Host', 'api.github.com');
            options = http_utils_1.HttpUtils.optionsHeader(options, 'User-Agent', 'request');
            let curl = this.getFileName() + ' ' + options.url;
            if (http_utils_1.HttpUtils.requestOpts.proxy) {
                let pathUrl = url.parse(options.url.toString()).path;
                let host = url.parse(options.url.toString()).host;
                let newFileUrl = url.resolve(http_utils_1.HttpUtils.requestOpts.proxy, pathUrl);
                curl = this.getFileName() + ' \'' + newFileUrl + '\' -H \'host:' + host + '\'';
            }
            if (http_utils_1.HttpUtils.requestOpts.ignoreSSL) {
                curl = 'k ' + curl;
            }
            logger.info('curl -o' + curl);
            let req = request(options);
            req.on('response', response => {
                if (response.statusCode === 200) {
                    let output = '';
                    response.on('data', (data) => {
                        output += data;
                    });
                    response.on('end', () => {
                        resolve(output);
                    });
                }
                else if (response.statusCode == 403 && response.headers['x-ratelimit-remaining'] == '0') {
                    reject(new Error('Failed to make Github request, rate limit reached.'));
                }
                else {
                    reject(new Error('response status code is not 200.  It was ' + response.statusCode));
                }
            });
        });
    }
    readResponse() {
        let fileName = this.getFileName();
        try {
            let contents = fs.readFileSync(fileName).toString();
            let timestamp = new Date(fs.statSync(fileName).mtime).getTime();
            let size = fs.statSync(fileName).size;
            let now = Date.now();
            // On start, read the file. If not on start, check use the cache as long as the
            // size > 0 and within the cache time.
            // 60 minutes * 60 seconds / minute * 1000 ms / second
            if (config_1.Config.runCommand === 'start' || (size > 0 && (now - (60 * 60 * 1000) < timestamp))) {
                return contents;
            }
            else {
                return null;
            }
        }
        catch (err) {
            return null;
        }
    }
}
exports.GithubApiConfigSource = GithubApiConfigSource;
//# sourceMappingURL=config_source.js.map