"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
// Will use chalk if chalk is available to add color to console logging
let chalk;
let printRed;
let printYellow;
let printGray;
try {
    chalk = require('chalk');
    printRed = chalk.red;
    printYellow = chalk.yellow;
    printGray = chalk.gray;
}
catch (e) {
    printRed = printYellow = printGray = (msg) => {
        return msg;
    };
}
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var WriteTo;
(function (WriteTo) {
    WriteTo[WriteTo["CONSOLE"] = 0] = "CONSOLE";
    WriteTo[WriteTo["FILE"] = 1] = "FILE";
    WriteTo[WriteTo["BOTH"] = 2] = "BOTH";
    WriteTo[WriteTo["NONE"] = 3] = "NONE";
})(WriteTo = exports.WriteTo || (exports.WriteTo = {}));
let logFile = 'webdriver.log'; // the default log file name
/**
 * Logger class adds timestamp output, log levels, and identifiers to help
 * when debugging. Also could write to console, file, both, or none.
 */
class Logger {
    /**
     * Creates a logger instance with an ID for the logger.
     * @constructor
     */
    constructor(id) {
        this.id = id;
    }
    /**
     * Set up the write location. If writing to a file, get the file descriptor.
     * @param writeTo The enum for where to write the logs.
     * @param opt_logFile An optional parameter to override the log file location.
     */
    static setWrite(writeTo, opt_logFile) {
        if (opt_logFile) {
            logFile = opt_logFile;
        }
        Logger.writeTo = writeTo;
        if (Logger.writeTo == WriteTo.FILE || Logger.writeTo == WriteTo.BOTH) {
            Logger.fd = fs.openSync(path.resolve(logFile), 'a');
            Logger.firstWrite = false;
        }
    }
    /**
     * Log INFO
     * @param ...msgs multiple arguments to be logged.
     */
    info(...msgs) {
        this.log_(LogLevel.INFO, msgs);
    }
    /**
     * Log DEBUG
     * @param ...msgs multiple arguments to be logged.
     */
    debug(...msgs) {
        this.log_(LogLevel.DEBUG, msgs);
    }
    /**
     * Log WARN
     * @param ...msgs multiple arguments to be logged.
     */
    warn(...msgs) {
        this.log_(LogLevel.WARN, msgs);
    }
    /**
     * Log ERROR
     * @param ...msgs multiple arguments to be logged.
     */
    error(...msgs) {
        this.log_(LogLevel.ERROR, msgs);
    }
    /**
     * For the log level set, check to see if the messages should be logged.
     * @param logLevel The log level of the message.
     * @param msgs The messages to be logged
     */
    log_(logLevel, msgs) {
        switch (Logger.logLevel) {
            case LogLevel.ERROR:
                if (logLevel <= LogLevel.ERROR) {
                    this.print_(logLevel, msgs);
                }
                break;
            case LogLevel.WARN:
                if (logLevel <= LogLevel.WARN) {
                    this.print_(logLevel, msgs);
                }
                break;
            case LogLevel.INFO:
                if (logLevel <= LogLevel.INFO) {
                    this.print_(logLevel, msgs);
                }
                break;
            case LogLevel.DEBUG:
                if (logLevel <= LogLevel.DEBUG) {
                    this.print_(logLevel, msgs);
                }
                break;
            default:
                throw new Error('Log level undefined');
        }
    }
    /**
     * Format with timestamp, log level, identifier, and message and log to
     * specified medium (console, file, both, none).
     * @param logLevel The log level of the message.
     * @param msgs The messages to be logged.
     */
    print_(logLevel, msgs) {
        let consoleLog = '';
        let fileLog = '';
        if (Logger.showTimestamp) {
            consoleLog += Logger.timestamp_(WriteTo.CONSOLE);
            fileLog += Logger.timestamp_(WriteTo.FILE);
        }
        consoleLog += Logger.level_(logLevel, this.id, WriteTo.CONSOLE);
        fileLog += Logger.level_(logLevel, this.id, WriteTo.FILE);
        if (Logger.showId) {
            consoleLog += Logger.id_(logLevel, this.id, WriteTo.CONSOLE);
            fileLog += Logger.id_(logLevel, this.id, WriteTo.FILE);
        }
        consoleLog += ' -';
        fileLog += ' - ';
        switch (Logger.writeTo) {
            case WriteTo.CONSOLE:
                msgs.unshift(consoleLog);
                console.log.apply(console, msgs);
                break;
            case WriteTo.FILE:
                // for the first line written to the file, add a space
                if (!Logger.firstWrite) {
                    fs.writeSync(Logger.fd, '\n');
                    Logger.firstWrite = true;
                }
                fileLog += ' ' + Logger.msgToFile_(msgs);
                fs.writeSync(Logger.fd, fileLog + '\n');
                break;
            case WriteTo.BOTH:
                // for the first line written to the file, add a space
                if (!Logger.firstWrite) {
                    fs.writeSync(Logger.fd, '\n');
                    Logger.firstWrite = true;
                }
                fileLog += ' ' + Logger.msgToFile_(msgs);
                fs.writeSync(Logger.fd, fileLog + '\n');
                msgs.unshift(consoleLog);
                console.log.apply(console, msgs);
                break;
            case WriteTo.NONE:
                break;
        }
    }
    /**
     * Get a timestamp formatted with [hh:mm:ss]
     * @param writeTo The enum for where to write the logs.
     * @return The string of the formatted timestamp
     */
    static timestamp_(writeTo) {
        let d = new Date();
        let ts = '[';
        let hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        let seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        if (writeTo == WriteTo.CONSOLE) {
            ts += printGray(hours + ':' + minutes + ':' + seconds) + ']';
        }
        else {
            ts += hours + ':' + minutes + ':' + seconds + ']';
        }
        ts += ' ';
        return ts;
    }
    /**
     * Get the identifier of the logger as '/<id>'
     * @param logLevel The log level of the message.
     * @param writeTo The enum for where to write the logs.
     * @return The string of the formatted id
     */
    static id_(logLevel, id, writeTo) {
        let level = LogLevel[logLevel].toString();
        if (writeTo === WriteTo.FILE) {
            return '/' + id;
        }
        else if (logLevel === LogLevel.ERROR) {
            return printRed('/' + id);
        }
        else if (logLevel === LogLevel.WARN) {
            return printYellow('/' + id);
        }
        else {
            return '/' + id;
        }
    }
    /**
     * Get the log level formatted with the first letter. For info, it is I.
     * @param logLevel The log level of the message.
     * @param writeTo The enum for where to write the logs.
     * @return The string of the formatted log level
     */
    static level_(logLevel, id, writeTo) {
        let level = LogLevel[logLevel].toString();
        if (writeTo === WriteTo.FILE) {
            return level[0];
        }
        else if (logLevel === LogLevel.ERROR) {
            return printRed(level[0]);
        }
        else if (logLevel === LogLevel.WARN) {
            return printYellow(level[0]);
        }
        else {
            return level[0];
        }
    }
    /**
     * Convert the list of messages to a single string message.
     * @param msgs The list of messages.
     * @return The string of the formatted messages
     */
    static msgToFile_(msgs) {
        let log = '';
        for (let pos = 0; pos < msgs.length; pos++) {
            let msg = msgs[pos];
            let ret;
            if (typeof msg === 'object') {
                ret = JSON.stringify(msg);
            }
            else {
                ret = msg;
            }
            if (pos !== msgs.length - 1) {
                ret += ' ';
            }
            log += ret;
        }
        return log;
    }
}
Logger.logLevel = LogLevel.INFO;
Logger.showTimestamp = true;
Logger.showId = true;
Logger.writeTo = WriteTo.CONSOLE;
Logger.firstWrite = false;
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map