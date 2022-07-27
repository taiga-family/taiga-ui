import {isNativeFocusedIn} from '../is-native-focused-in';

describe(`isNativeFocusedIn`, () => {
    it(`element is not focused in`, () => {
        const element = document.createElement(`button`);

        expect(isNativeFocusedIn(element)).toEqual(false);
    });

    it(`should return false if ownerDocument is null`, () => {
        const element = {ownerDocument: null} as Node;

        expect(isNativeFocusedIn(element)).toEqual(false);
    });
});
