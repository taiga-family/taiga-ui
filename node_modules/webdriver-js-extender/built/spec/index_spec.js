"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
const mockdriver_1 = require("./mockdriver");
describe('extender', () => {
    it('should support setting/getting the network connection', (done) => {
        let ncType;
        let baseDriver = mockdriver_1.buildMockDriver('42', (name, method, path) => { }, (path, method, data) => {
            expect(path).toEqual('/session/42/network_connection');
            if (method == 'GET') {
                expect(Object.keys(data).length).toEqual(0);
                return ncType;
            }
            else if (method == 'POST') {
                expect(JSON.stringify(Object.keys(data))).toEqual('["type"]');
                ncType = data['type'];
            }
        });
        let driver = lib_1.extend(baseDriver);
        driver.setNetworkConnection(5).then(() => {
            return driver.getNetworkConnection();
        }).then((connectionType) => {
            expect(connectionType).toEqual(5);
            done();
        });
    });
});
//# sourceMappingURL=index_spec.js.map