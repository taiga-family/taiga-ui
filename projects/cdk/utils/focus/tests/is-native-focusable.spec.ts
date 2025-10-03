import {tuiIsKeyboardFocusable} from '@taiga-ui/cdk';

describe('isNativeKeyboardFocusable', () => {
    it('div not focusable', () => {
        const element = document.createElement('DIV');

        expect(tuiIsKeyboardFocusable(element)).toBe(false);
    });

    it('div with tabindex = 0 is focusable', () => {
        const element = document.createElement('DIV');

        element.setAttribute('tabindex', '0');

        expect(tuiIsKeyboardFocusable(element)).toBe(true);
    });

    it('button is focusable', () => {
        const element = document.createElement('BUTTON');

        expect(tuiIsKeyboardFocusable(element)).toBe(true);
    });

    it('select is focusable', () => {
        const element = document.createElement('SELECT');

        expect(tuiIsKeyboardFocusable(element)).toBe(true);
    });

    it('textarea is focusable', () => {
        const element = document.createElement('TEXTAREA');

        expect(tuiIsKeyboardFocusable(element)).toBe(true);
    });

    it('disabled BUTTON is not focusable', () => {
        const element = document.createElement('BUTTON');

        element.setAttribute('disabled', '');

        expect(tuiIsKeyboardFocusable(element)).toBe(false);
    });

    it('video is not focusable', () => {
        const element = document.createElement('VIDEO');

        expect(tuiIsKeyboardFocusable(element)).toBe(false);
    });

    it('audio is not focusable', () => {
        const element = document.createElement('AUDIO');

        expect(tuiIsKeyboardFocusable(element)).toBe(false);
    });

    it('video with controls is focusable', () => {
        const element = document.createElement('VIDEO');

        element.setAttribute('controls', '');

        expect(tuiIsKeyboardFocusable(element)).toBe(true);
    });

    it('audio with controls is focusable', () => {
        const element = document.createElement('AUDIO');

        element.setAttribute('controls', '');

        expect(tuiIsKeyboardFocusable(element)).toBe(true);
    });

    it('a is not focusable', () => {
        const element = document.createElement('A');

        expect(tuiIsKeyboardFocusable(element)).toBe(false);
    });

    it('link is not focusable', () => {
        const element = document.createElement('LINK');

        expect(tuiIsKeyboardFocusable(element)).toBe(false);
    });

    it('a with href is focusable', () => {
        const element = document.createElement('A');

        element.setAttribute('href', '');

        expect(tuiIsKeyboardFocusable(element)).toBe(true);
    });

    it('link with href is focusable', () => {
        const element = document.createElement('LINK');

        element.setAttribute('href', '');

        expect(tuiIsKeyboardFocusable(element)).toBe(true);
    });

    it('input is focusable', () => {
        const element = document.createElement('INPUT');

        expect(tuiIsKeyboardFocusable(element)).toBe(true);
    });

    it('input type="hidden" is not focusable', () => {
        const element = document.createElement('INPUT');

        element.setAttribute('type', 'hidden');

        expect(tuiIsKeyboardFocusable(element)).toBe(false);
    });
});
