import {isNativeKeyboardFocusable} from '../is-native-keyboard-focusable';

describe(`isNativeKeyboardFocusable`, () => {
    it(`DIV not focusable`, () => {
        const element = document.createElement(`DIV`);

        expect(isNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`DIV with tabindex = 0 is focusable`, () => {
        const element = document.createElement(`DIV`);

        element.setAttribute(`tabindex`, `0`);

        expect(isNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`BUTTON is focusable`, () => {
        const element = document.createElement(`BUTTON`);

        expect(isNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`SELECT is focusable`, () => {
        const element = document.createElement(`SELECT`);

        expect(isNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`TEXTAREA is focusable`, () => {
        const element = document.createElement(`TEXTAREA`);

        expect(isNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`disabled BUTTON is not focusable`, () => {
        const element = document.createElement(`BUTTON`);

        element.setAttribute(`disabled`, ``);

        expect(isNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`VIDEO is not focusable`, () => {
        const element = document.createElement(`VIDEO`);

        expect(isNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`AUDIO is not focusable`, () => {
        const element = document.createElement(`AUDIO`);

        expect(isNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`VIDEO with controls is focusable`, () => {
        const element = document.createElement(`VIDEO`);

        element.setAttribute(`controls`, ``);

        expect(isNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`AUDIO with controls is focusable`, () => {
        const element = document.createElement(`AUDIO`);

        element.setAttribute(`controls`, ``);

        expect(isNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`A is not focusable`, () => {
        const element = document.createElement(`A`);

        expect(isNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`LINK is not focusable`, () => {
        const element = document.createElement(`LINK`);

        expect(isNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`A with href is focusable`, () => {
        const element = document.createElement(`A`);

        element.setAttribute(`href`, ``);

        expect(isNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`LINK with href is focusable`, () => {
        const element = document.createElement(`LINK`);

        element.setAttribute(`href`, ``);

        expect(isNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`INPUT is focusable`, () => {
        const element = document.createElement(`INPUT`);

        expect(isNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`INPUT type="hidden" is not focusable`, () => {
        const element = document.createElement(`INPUT`);

        element.setAttribute(`type`, `hidden`);

        expect(isNativeKeyboardFocusable(element)).toBe(false);
    });
});
