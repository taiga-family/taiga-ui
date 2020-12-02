"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webdriver = require("selenium-webdriver");
const commandDefinitions = require("../../lib/command_definitions");
const mock_server_1 = require("../mock-server");
const commands_1 = require("../mock-server/commands");
const selenium_mock_1 = require("selenium-mock");
const lib_1 = require("../../lib");
let portfinder = require('portfinder');
let commandMap = null;
function buildCommandMap(commandList) {
    if (commandMap == null) {
        commandMap = {};
    }
    for (let commandName in commandList) {
        let command = commandList[commandName];
        if (command instanceof selenium_mock_1.Command) {
            commandMap[command.method + ':' + (command.path[0] == '/' ? '' : '/') + command.path] = command;
        }
        else {
            buildCommandMap(command);
        }
    }
}
function initMockSeleniumStandaloneServerAndGetDriverFactory(annotateCommands = false) {
    let server;
    let port;
    beforeAll((done) => {
        portfinder.getPort((err, p) => {
            if (err) {
                done.fail(err);
            }
            else {
                port = p;
                server = new mock_server_1.MockAppium(port);
                server.start();
                done();
            }
        });
    });
    if (annotateCommands && !commandMap) {
        buildCommandMap(commands_1.session);
    }
    return () => {
        let driver = lib_1.extend(new webdriver.Builder().
            usingServer('http://localhost:' + port + '/wd/hub').
            withCapabilities({ browserName: 'chrome' }).build());
        if (annotateCommands) {
            Object.keys(commandDefinitions).forEach((commandName) => {
                let clientCommand = commandDefinitions[commandName];
                let serverCommand = commandMap[clientCommand.method + ':' +
                    (clientCommand.path[0] == '/' ? '' : '/') + clientCommand.path];
                let spy = spyOn(serverCommand, 'exec').and.callThrough();
                let oldFun = driver[commandName];
                driver[commandName] = function () {
                    let oldCount = spy.calls.count();
                    return oldFun.apply(this, arguments).then((result) => {
                        expect(spy.calls.count()).toBe(oldCount + 1);
                        let args = spy.calls.mostRecent().args;
                        return {
                            result: result,
                            session: args[0],
                            params: args[1]
                        };
                    });
                };
            });
        }
        return driver;
    };
}
exports.initMockSeleniumStandaloneServerAndGetDriverFactory = initMockSeleniumStandaloneServerAndGetDriverFactory;
//# sourceMappingURL=helpers.js.map