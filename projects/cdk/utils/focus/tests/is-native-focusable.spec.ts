import {tuiIsNativeKeyboardFocusable} from '@taiga-ui/cdk';

describe('isNativeKeyboardFocusable', () => {
    it('div not focusable', () => {
        const element = document.createElement('DIV');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it('div with tabindex = 0 is focusable', () => {
        const element = document.createElement('DIV');

        element.setAttribute('tabindex', '0');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it('button is focusable', () => {
        const element = document.createElement('BUTTON');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it('select is focusable', () => {
        const element = document.createElement('SELECT');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it('textarea is focusable', () => {
        const element = document.createElement('TEXTAREA');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it('disabled BUTTON is not focusable', () => {
        const element = document.createElement('BUTTON');

        element.setAttribute('disabled', '');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it('video is not focusable', () => {
        const element = document.createElement('VIDEO');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it('audio is not focusable', () => {
        const element = document.createElement('AUDIO');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it('video with controls is focusable', () => {
        const element = document.createElement('VIDEO');

        element.setAttribute('controls', '');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it('audio with controls is focusable', () => {
        const element = document.createElement('AUDIO');

        element.setAttribute('controls', '');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it('a is not focusable', () => {
        const element = document.createElement('A');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it('link is not focusable', () => {
        const element = document.createElement('LINK');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });

    it('a with href is focusable', () => {
        const element = document.createElement('A');

        element.setAttribute('href', '');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it('link with href is focusable', () => {
        const element = document.createElement('LINK');

        element.setAttribute('href', '');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it('input is focusable', () => {
        const element = document.createElement('INPUT');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(true);
    });

    it('input type="hidden" is not focusable', () => {
        const element = document.createElement('INPUT');

        element.setAttribute('type', 'hidden');

        expect(tuiIsNativeKeyboardFocusable(element)).toBe(false);
    });
});
