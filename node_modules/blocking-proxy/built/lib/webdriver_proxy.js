"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const url = require("url");
const webdriver_commands_1 = require("./webdriver_commands");
/**
 * A proxy that understands WebDriver commands. Users can add barriers (similar to middleware in
 * express) that will be called before forwarding the request to WebDriver. The proxy will wait for
 * each barrier to finish, calling them in the order in which they were added.
 */
class WebDriverProxy {
    constructor(seleniumAddress) {
        this.barriers = [];
        this.seleniumAddress = seleniumAddress;
    }
    addBarrier(barrier) {
        this.barriers.push(barrier);
    }
    handleRequest(originalRequest, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let command = webdriver_commands_1.parseWebDriverCommand(originalRequest.url, originalRequest.method);
            let replyWithError = (err) => {
                response.writeHead(502);
                if (err && err.toString) {
                    response.write(err.toString());
                }
                response.end();
            };
            // Process barriers in order, one at a time.
            try {
                for (let barrier of this.barriers) {
                    yield barrier.onCommand(command);
                }
            }
            catch (err) {
                replyWithError(err);
                // Don't call through if a barrier fails.
                return;
            }
            let parsedUrl = url.parse(this.seleniumAddress);
            let options = {};
            options.method = originalRequest.method;
            options.path = parsedUrl.path + originalRequest.url;
            options.hostname = parsedUrl.hostname;
            options.port = parseInt(parsedUrl.port);
            options.headers = originalRequest.headers;
            let forwardedRequest = http.request(options);
            // clang-format off
            let reqData = '';
            originalRequest.on('data', (d) => {
                reqData += d;
                forwardedRequest.write(d);
            }).on('end', () => {
                command.handleData(reqData);
                forwardedRequest.end();
            }).on('error', replyWithError);
            forwardedRequest.on('response', (seleniumResponse) => {
                response.writeHead(seleniumResponse.statusCode, seleniumResponse.headers);
                let respData = '';
                seleniumResponse.on('data', (d) => {
                    respData += d;
                    response.write(d);
                }).on('end', () => {
                    command.handleResponse(seleniumResponse.statusCode, respData);
                    response.end();
                }).on('error', replyWithError);
            }).on('error', replyWithError);
            // clang-format on
        });
    }
}
exports.WebDriverProxy = WebDriverProxy;
//# sourceMappingURL=webdriver_proxy.js.map