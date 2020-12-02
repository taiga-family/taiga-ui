"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Command = require('selenium-webdriver/lib/command').Command;
class Extender {
    constructor(driver) {
        this.driver_ = driver;
        this.params_ = {};
        this.executor_ =
            driver.getExecutor ? driver.getExecutor() : driver.executor_;
    }
    /**
     * Defines a new command. When a command is sent, the {@code path} will be
     * preprocessed using the command's parameters; any path segments prefixed
     * with ":" will be replaced by the parameter of the same name. For example,
     * given "/person/:name" and the parameters "{name: 'Bob'}", the final command
     * path will be "/person/Bob".
     *
     * @param {string} name The command name.
     * @param {string} params The names of the parameters to the command
     * @param {string} method The HTTP method to use when sending this command.
     * @param {string} path The path to send the command to, relative to
     *     the WebDriver server's command root and of the form
     *     "/path/:variable/segment".
     */
    defineCommand(name, params, method, path) {
        this.executor_.defineCommand(name, method, path);
        this.params_[method + ':' + name] = params;
    }
    /**
     * Executes a command which was defined by defineCommand()
     *
     * @param {string} name The command name.
     * @param {*[]} params The parameters to the command
     * @return {webdriver.promise.Promise<*>} A promise that will be resolved with
     *     the command result
     */
    execCommand(name, method, params) {
        var paramNames = this.params_[method + ':' + name];
        if (paramNames === undefined) {
            throw new RangeError('The command "' + name + '" has not yet been defined');
        }
        if (paramNames.length !== params.length) {
            throw new RangeError('The command "' + name + '" expected ' + paramNames.length + ' parameters, got ' +
                params.length);
        }
        var command = new Command(name);
        for (var i = 0; i < params.length; i++) {
            if (params[i] !== undefined) {
                command.setParameter(paramNames[i], params[i]);
            }
        }
        return this.driver_.schedule(command, 'Custom Command: ' + name + '(' +
            params
                .map((x) => {
                if ((typeof x == 'number') || (typeof x == 'boolean') ||
                    (typeof x == 'function')) {
                    return x.toString();
                }
                else if (x == null) {
                    return '' + x;
                }
                else {
                    return JSON.stringify(x);
                }
            })
                .join(', ') +
            ')');
    }
}
exports.Extender = Extender;
//# sourceMappingURL=extender.js.map