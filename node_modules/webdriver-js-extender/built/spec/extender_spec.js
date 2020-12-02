"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extender_1 = require("../lib/extender");
const mockdriver_1 = require("./mockdriver");
let noop_define = (n, m, p) => { };
let noop_exec = (p, m, d) => { };
describe('extender', () => {
    let sessionId = '1234';
    it('should call executor_.defineCommand', (done) => {
        let name = 'customCommand';
        let method = 'post';
        let path = '/custom/command';
        let mockdriver = mockdriver_1.buildMockDriver(sessionId, (n, m, p) => {
            expect(n).toEqual(name);
            expect(m).toEqual(method);
            expect(p).toEqual(path);
            done();
        }, noop_exec);
        let extender = new extender_1.Extender(mockdriver);
        extender.defineCommand(name, [], method, path);
    });
    it('should schedule custom commands', (done) => {
        let name = 'customCommand';
        let method = 'post';
        let path = '/custom/command';
        let mockdriver = mockdriver_1.buildMockDriver(sessionId, noop_define, (p, m, d) => {
            expect(p).toEqual(path);
            expect(m).toEqual(method);
            expect(d['sessionId']).toEqual(sessionId);
            expect(Object.keys(d).length).toEqual(1);
            done();
        });
        let extender = new extender_1.Extender(mockdriver);
        extender.defineCommand(name, [], method, path);
        extender.execCommand(name, method, []);
    });
    it('should use command parameters', (done) => {
        let name = 'customCommand';
        let method = 'post';
        let paramNames = ['var1', 'var2'];
        let paramValues = ['val1', 'val2'];
        let path = '/custom/:var1/command';
        let mockdriver = mockdriver_1.buildMockDriver(sessionId, noop_define, (p, m, d) => {
            expect(p).toEqual('/custom/val1/command');
            expect(m).toEqual(method);
            expect(d['sessionId']).toEqual(sessionId);
            expect(d['var2']).toEqual('val2');
            expect(Object.keys(d).length).toEqual(2);
            done();
        });
        let extender = new extender_1.Extender(mockdriver);
        extender.defineCommand(name, paramNames, method, path);
        extender.execCommand(name, method, paramValues);
    });
    it('should not be able to exec a command that has not been defined', () => {
        let mockdriver = mockdriver_1.buildMockDriver(sessionId, noop_define, noop_exec);
        let extender = new extender_1.Extender(mockdriver);
        expect(() => { extender.execCommand('', '', []); }).toThrowError(RangeError);
    });
    it('should require correct number of parameters for execution', () => {
        let name = 'customCommand';
        let method = 'post';
        let path = '/custom/:command';
        let mockdriver = mockdriver_1.buildMockDriver(sessionId, noop_define, noop_exec);
        let extender = new extender_1.Extender(mockdriver);
        extender.defineCommand(name, ['command'], method, path);
        expect(() => { extender.execCommand(name, method, []); }).toThrowError(RangeError);
    });
});
//# sourceMappingURL=extender_spec.js.map