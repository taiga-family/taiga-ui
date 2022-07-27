import {isNativeMouseFocusable} from '../is-native-mouse-focusable';

describe(`isNativeMouseFocusable`, () => {
    it(`DIV is not mouse focusable`, () => {
        const element = document.createElement(`div`);

        expect(isNativeMouseFocusable(element)).toEqual(false);
    });

    it(`BUTTON is mouse focusable`, () => {
        const element = document.createElement(`button`);

        expect(isNativeMouseFocusable(element)).toEqual(true);
    });

    it(`disabled BUTTON is not mouse focusable`, () => {
        const element = document.createElement(`button`);

        element.setAttribute(`disabled`, ``);

        expect(isNativeMouseFocusable(element)).toEqual(false);
    });

    it(`BUTTON with tabIndex === -1 is not mouse focusable`, () => {
        const element = document.createElement(`button`);

        element.setAttribute(`disabled`, ``);

        expect(isNativeMouseFocusable(element)).toEqual(false);
    });
});
