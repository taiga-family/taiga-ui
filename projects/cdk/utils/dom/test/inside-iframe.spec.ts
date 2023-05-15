import {tuiIsInsideIframe} from '@taiga-ui/cdk';

describe(`tuiIsInsideIframe`, () => {
    it(`should return true if app is running inside an iframe`, () => {
        const mockedWindow = {parent: {}} as unknown as Window;

        expect(tuiIsInsideIframe(mockedWindow)).toBe(true);
    });

    it(`should return false if app is not running inside an iframe`, () => {
        Object.defineProperty(global, `parent`, {value: global});

        expect(tuiIsInsideIframe(global as unknown as Window)).toBe(false);
    });
});
