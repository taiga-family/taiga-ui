"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In this file we define a factory which can be used to create the commands for either
 * sessionStorage or localStorage
 */
const selenium_mock_1 = require("selenium-mock");
function storageFactory(type) {
    let storageCmds = {};
    function cmdFactory(method, relPath, fun) {
        return new selenium_mock_1.Command(method, type + '_storage' + relPath, (session, params) => {
            return fun(session[type + '_storage'], params['key'], params['value']);
        });
    }
    storageCmds.getKeys = cmdFactory('GET', '', (store) => {
        return Object.keys(store);
    });
    storageCmds.getValue = cmdFactory('GET', '/key/:key', (store, key) => {
        return store[key];
    });
    storageCmds.setValue = cmdFactory('POST', '', (store, key, value) => {
        store[key] = value;
    });
    storageCmds.deleteEntry = cmdFactory('DELETE', '/key/:key', (store, key) => {
        delete store[key];
    });
    storageCmds.deleteAll = cmdFactory('DELETE', '', (store) => {
        for (var key in store) {
            delete store[key];
        }
    });
    storageCmds.getSize = cmdFactory('GET', '/size', (store) => {
        return Object.keys(store).length;
    });
    return storageCmds;
}
exports.storageFactory = storageFactory;
;
//# sourceMappingURL=storage.js.map