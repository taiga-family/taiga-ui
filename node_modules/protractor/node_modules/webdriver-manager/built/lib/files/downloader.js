"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const request = require("request");
const url = require("url");
const cli_1 = require("../cli");
const http_utils_1 = require("../http_utils");
let logger = new cli_1.Logger('downloader');
/**
 * The file downloader.
 */
class Downloader {
    /**
     * Http get the file. Check the content length of the file before writing the file.
     * If the content length does not match, remove it and download the file.
     *
     * @param binary The binary of interest.
     * @param fileName The file name.
     * @param outputDir The directory where files are downloaded and stored.
     * @param contentLength The content length of the existing file.
     * @param opt_proxy The proxy for downloading files.
     * @param opt_callback Callback method to be executed after the file is downloaded.
     * @returns Promise<boolean> Resolves true = downloaded. Resolves false = not downloaded.
     *          Rejected with an error.
     */
    static getFile(binary, fileUrl, fileName, outputDir, contentLength, callback) {
        let filePath = path.resolve(outputDir, fileName);
        let file;
        let options = http_utils_1.HttpUtils.initOptions(fileUrl);
        let req = null;
        let resContentLength;
        return new Promise((resolve, reject) => {
            req = request(options);
            req.on('response', response => {
                if (response.statusCode === 200) {
                    resContentLength = +response.headers['content-length'];
                    if (contentLength === resContentLength) {
                        // if the size is the same, do not download and stop here
                        response.destroy();
                        resolve(false);
                    }
                    else {
                        let curl = outputDir + '/' + fileName + ' ' + options.url;
                        if (http_utils_1.HttpUtils.requestOpts.proxy) {
                            let pathUrl = url.parse(options.url.toString()).path;
                            let host = url.parse(options.url.toString()).host;
                            let newFileUrl = url.resolve(http_utils_1.HttpUtils.requestOpts.proxy, pathUrl);
                            curl = outputDir + '/' + fileName + ' \'' + newFileUrl +
                                '\' -H \'host:' + host + '\'';
                        }
                        if (http_utils_1.HttpUtils.requestOpts.ignoreSSL) {
                            curl = 'k ' + curl;
                        }
                        logger.info('curl -o' + curl);
                        // only pipe if the headers are different length
                        file = fs.createWriteStream(filePath);
                        req.pipe(file);
                        file.on('close', () => {
                            fs.stat(filePath, (error, stats) => {
                                if (error) {
                                    error.msg = 'Error: Got error ' + error + ' from ' + fileUrl;
                                    return reject(error);
                                }
                                if (stats.size != resContentLength) {
                                    error.msg = 'Error: corrupt download for ' + fileName +
                                        '. Please re-run webdriver-manager update';
                                    fs.unlinkSync(filePath);
                                    reject(error);
                                }
                                if (callback) {
                                    callback(binary, outputDir, fileName);
                                }
                                resolve(true);
                            });
                        });
                    }
                }
                else {
                    let error = new Error();
                    error.msg =
                        'Expected response code 200, received: ' + response.statusCode;
                    reject(error);
                }
            });
            req.on('error', error => {
                if (error.code === 'ETIMEDOUT') {
                    error.msg = 'Connection timeout downloading: ' + fileUrl +
                        '. Default timeout is 4 minutes.';
                }
                else if (error.connect) {
                    error.msg = 'Could not connect to the server to download: ' + fileUrl;
                }
                reject(error);
            });
        })
            .catch(error => {
            logger.error(error.msg || error.message);
        });
    }
}
exports.Downloader = Downloader;
//# sourceMappingURL=downloader.js.map