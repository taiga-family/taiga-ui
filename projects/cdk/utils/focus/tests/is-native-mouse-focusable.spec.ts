import {tuiIsNativeMouseFocusable} from '@taiga-ui/cdk';

describe(`isNativeMouseFocusable`, () => {
    it(`DIV is not mouse focusable`, () => {
        const element = document.createElement(`div`);

        expect(tuiIsNativeMouseFocusable(element)).toEqual(false);
    });

    it(`BUTTON is mouse focusable`, () => {
        const element = document.createElement(`button`);

        expect(tuiIsNativeMouseFocusable(element)).toEqual(true);
    });

    it(`disabled BUTTON is not mouse focusable`, () => {
        const element = document.createElement(`button`);

        element.setAttribute(`disabled`, ``);

        expect(tuiIsNativeMouseFocusable(element)).toEqual(false);
    });

    it(`BUTTON with tabIndex === -1 is not mouse focusable`, () => {
        const element = document.createElement(`button`);

        element.setAttribute(`disabled`, ``);

        expect(tuiIsNativeMouseFocusable(element)).toEqual(false);
    });
});
