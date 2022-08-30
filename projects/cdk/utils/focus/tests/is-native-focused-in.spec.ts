import {tuiIsNativeFocusedIn} from '@taiga-ui/cdk';

describe(`isNativeFocusedIn`, () => {
    it(`element is not focused in`, () => {
        const element = document.createElement(`button`);

        expect(tuiIsNativeFocusedIn(element)).toEqual(false);
    });

    it(`should return false if ownerDocument is null`, () => {
        const element = {ownerDocument: null} as Node;

        expect(tuiIsNativeFocusedIn(element)).toEqual(false);
    });
});
