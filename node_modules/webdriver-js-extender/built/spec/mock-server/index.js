"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = require("./commands");
const selenium_mock_1 = require("selenium-mock");
class MockAppium extends selenium_mock_1.Server {
    constructor(port) {
        super(port, (basicSession) => {
            let session = basicSession;
            session.currentContext = 'WEBVIEW_1';
            session.installedApps = [];
            session.locked = false;
            session.localStorage = {};
            session.location = { latitude: 0, longitude: 0, altitude: 0 };
            session.locationEnabled = true;
            session.orientation = 'PORTRAIT';
            session.files = {};
            session.sessionStorage = {};
            session.settings = { ignoreUnimportantViews: false };
            session.activity = null;
            session.networkConnection = 6;
            return session;
        });
        let addCommands = (commandList) => {
            for (let commandName in commandList) {
                let command = commandList[commandName];
                if (command instanceof selenium_mock_1.Command) {
                    this.addCommand(command);
                }
                else {
                    addCommands(command);
                }
            }
        };
        addCommands(commands_1.session);
    }
}
exports.MockAppium = MockAppium;
//# sourceMappingURL=index.js.map