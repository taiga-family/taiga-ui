"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CONFIG_ERROR_CODE = 105;
const BROWSER_CONNECT_ERROR_CODE = 135;
const KITCHEN_SINK_CODE = 199;
class IError extends Error {
}
exports.IError = IError;
class ProtractorError extends IError {
    constructor(logger, message, code, error) {
        super(message);
        this.message = message;
        this.code = code;
        // replacing the stack trace with the thrown error stack trace.
        if (error) {
            let protractorError = error;
            this.stack = protractorError.stack;
        }
        ProtractorError.log(logger, this.code, this.message, this.stack);
        if (!ProtractorError.SUPRESS_EXIT_CODE) {
            process.exit(this.code);
        }
    }
    static log(logger, code, message, stack) {
        let messages = message.split('\n');
        if (messages.length > 1) {
            message = messages[0];
        }
        logger.error('Error code: ' + code);
        logger.error('Error message: ' + message);
        logger.error(stack);
    }
}
ProtractorError.CODE = KITCHEN_SINK_CODE;
ProtractorError.SUPRESS_EXIT_CODE = false;
exports.ProtractorError = ProtractorError;
/**
 * Configuration file error
 */
class ConfigError extends ProtractorError {
    constructor(logger, message, error) {
        super(logger, message, ConfigError.CODE, error);
    }
}
ConfigError.CODE = CONFIG_ERROR_CODE;
exports.ConfigError = ConfigError;
/**
 * Browser errors including getting a driver session, direct connect, etc.
 */
class BrowserError extends ProtractorError {
    constructor(logger, message) {
        super(logger, message, BrowserError.CODE);
    }
}
BrowserError.CODE = BROWSER_CONNECT_ERROR_CODE;
BrowserError.ERR_MSGS = [
    'ECONNREFUSED connect ECONNREFUSED', 'Sauce Labs Authentication Error',
    'Invalid username or password'
];
exports.BrowserError = BrowserError;
class ErrorHandler {
    static isError(errMsgs, e) {
        if (errMsgs && errMsgs.length > 0) {
            for (let errPos in errMsgs) {
                let errMsg = errMsgs[errPos];
                if (e.message && e.message.indexOf(errMsg) !== -1) {
                    return true;
                }
            }
        }
        return false;
    }
    static parseError(e) {
        if (ErrorHandler.isError(ConfigError.ERR_MSGS, e)) {
            return ConfigError.CODE;
        }
        if (ErrorHandler.isError(BrowserError.ERR_MSGS, e)) {
            return BrowserError.CODE;
        }
        return null;
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=exitCodes.js.map