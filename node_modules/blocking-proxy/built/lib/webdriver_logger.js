"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const webdriver_commands_1 = require("./webdriver_commands");
// Generate a random 8 character ID to avoid collisions.
function getLogId() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36).slice(0, 8);
}
// Super proprietary left pad implementation. Do not copy plzkthx.
function leftPad(field) {
    const fieldWidth = 6;
    let padding = fieldWidth - field.length;
    if (padding > 0) {
        return ' '.repeat(padding) + field;
    }
    return field;
}
const FINDERS = [
    webdriver_commands_1.CommandName.FindElement, webdriver_commands_1.CommandName.FindElementFromElement, webdriver_commands_1.CommandName.FindElements,
    webdriver_commands_1.CommandName.FindElementsFromElement
];
const READERS = [
    webdriver_commands_1.CommandName.GetElementTagName, webdriver_commands_1.CommandName.GetElementText, webdriver_commands_1.CommandName.GetElementAttribute,
    webdriver_commands_1.CommandName.GetElementProperty, webdriver_commands_1.CommandName.GetElementCSSValue, webdriver_commands_1.CommandName.GetElementRect
];
const PAD = '    ';
/**
 * Logs WebDriver commands, transforming the command into a user-friendly description.
 */
class WebDriverLogger {
    constructor() {
        this.logName = `webdriver_log_${getLogId()}.txt`;
    }
    /**
     * Start logging to the specified directory. Will create a file named
     * 'webdriver_log_<process id>.txt'
     *
     * @param logDir The directory to create log files in.
     */
    setLogDir(logDir) {
        this.logStream = fs.createWriteStream(path.join(logDir, this.logName), { flags: 'a' });
    }
    /**
     * Logs a webdriver command to the log file.
     *
     * @param command The command to log.
     */
    logWebDriverCommand(command) {
        if (!this.logStream) {
            return;
        }
        let logLine;
        logLine = `${this.timestamp()} `;
        let started = Date.now();
        command.on('response', () => {
            let done = Date.now();
            let elapsed = leftPad((done - started) + '');
            logLine += `| ${elapsed}ms `;
            if (command.getParam('sessionId')) {
                let session = command.getParam('sessionId').slice(0, 6);
                logLine += `| ${session} `;
            }
            else if (command.commandName == webdriver_commands_1.CommandName.NewSession) {
                // Only for new session commands, the sessionId is in the response.
                let session = command.responseData['sessionId'].slice(0, 6);
                logLine += `| ${session} `;
            }
            if (command.commandName == webdriver_commands_1.CommandName.UNKNOWN) {
                logLine += `| ${command.url}`;
            }
            else {
                logLine += `| ${webdriver_commands_1.CommandName[command.commandName]}`;
            }
            if (command.commandName == webdriver_commands_1.CommandName.Go) {
                logLine += ' ' + command.data['url'];
            }
            else if (command.getParam('elementId')) {
                logLine += ` (${command.getParam('elementId')})`;
            }
            logLine += '\n';
            this.logStream.write(logLine);
            this.renderData(command);
            this.renderResponse(command);
        });
    }
    /**
     * Log an arbitrary event to the log file.
     *
     * @param msg The message to log.
     * @param sessionId The session id associated with the event.
     * @param elapsedMs How long the event took, in ms.
     */
    logEvent(msg, sessionId, elapsedMs) {
        let elapsed = leftPad(elapsedMs.toString());
        let logLine = `${this.timestamp()} | ${elapsed}ms | ${sessionId.slice(0, 6)} | ${msg}\n`;
        this.logStream.write(logLine);
    }
    renderData(command) {
        let dataLine = '';
        if (command.commandName === webdriver_commands_1.CommandName.NewSession) {
            dataLine = JSON.stringify(command.data['desiredCapabilities']);
        }
        else if (command.commandName === webdriver_commands_1.CommandName.ElementSendKeys) {
            let value = command.data['value'].join('');
            dataLine = `Send: ${value}`;
        }
        else if (FINDERS.indexOf(command.commandName) !== -1) {
            const using = command.data['using'];
            const value = command.data['value'];
            dataLine = `Using ${using} '${value}'`;
        }
        if (dataLine) {
            this.logStream.write(PAD + dataLine + '\n');
        }
    }
    renderResponse(command) {
        let respLine = '';
        const data = command.responseData;
        if (data['status'] > 0) {
            respLine = `ERROR ${data['status']}: ${data['value']['message']}`;
        }
        else if (FINDERS.indexOf(command.commandName) !== -1) {
            let els = command.responseData['value'];
            if (!Array.isArray(els)) {
                els = [els];
            }
            els = els.map((e) => e['ELEMENT']);
            respLine = 'Elements: ' + els;
        }
        else if (READERS.indexOf(command.commandName) !== -1) {
            respLine = command.responseData['value'];
            if (typeof respLine == 'object') {
                respLine = JSON.stringify(respLine);
            }
        }
        if (respLine) {
            this.logStream.write(PAD + respLine + '\n');
        }
    }
    timestamp() {
        let d = new Date();
        let hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        let seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        let millis = d.getMilliseconds().toString();
        millis = '000'.slice(0, 3 - millis.length) + millis;
        return `${hours}:${minutes}:${seconds}.${millis}`;
    }
}
exports.WebDriverLogger = WebDriverLogger;
//# sourceMappingURL=webdriver_logger.js.map