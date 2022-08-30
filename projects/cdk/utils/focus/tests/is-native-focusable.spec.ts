import {tuiIsNativeKeyboardFocusable} from '@taiga-ui/cdk';

describe(`isNativeKeyboardFocusable`, () => {
    it(`DIV not focusable`, () => {
        const element = document.createElement(`DIV`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`DIV with tabindex = 0 is focusable`, () => {
        const element = document.createElement(`DIV`);

        element.setAttribute(`tabindex`, `0`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`BUTTON is focusable`, () => {
        const element = document.createElement(`BUTTON`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`SELECT is focusable`, () => {
        const element = document.createElement(`SELECT`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`TEXTAREA is focusable`, () => {
        const element = document.createElement(`TEXTAREA`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`disabled BUTTON is not focusable`, () => {
        const element = document.createElement(`BUTTON`);

        element.setAttribute(`disabled`, ``);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`VIDEO is not focusable`, () => {
        const element = document.createElement(`VIDEO`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`AUDIO is not focusable`, () => {
        const element = document.createElement(`AUDIO`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`VIDEO with controls is focusable`, () => {
        const element = document.createElement(`VIDEO`);

        element.setAttribute(`controls`, ``);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`AUDIO with controls is focusable`, () => {
        const element = document.createElement(`AUDIO`);

        element.setAttribute(`controls`, ``);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`A is not focusable`, () => {
        const element = document.createElement(`A`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`LINK is not focusable`, () => {
        const element = document.createElement(`LINK`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it(`A with href is focusable`, () => {
        const element = document.createElement(`A`);

        element.setAttribute(`href`, ``);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`LINK with href is focusable`, () => {
        const element = document.createElement(`LINK`);

        element.setAttribute(`href`, ``);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`INPUT is focusable`, () => {
        const element = document.createElement(`INPUT`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it(`INPUT type="hidden" is not focusable`, () => {
        const element = document.createElement(`INPUT`);

        element.setAttribute(`type`, `hidden`);

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });
});
