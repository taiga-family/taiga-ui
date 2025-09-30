import {tuiIsMouseFocusable} from '@taiga-ui/cdk';

describe('isNativeMouseFocusable', () => {
    it('div is not mouse focusable', () => {
        const element = document.createElement('div');

        expect(tuiIsMouseFocusable(element)).toBe(false);
    });

    it('button is mouse focusable', () => {
        const element = document.createElement('button');

        expect(tuiIsMouseFocusable(element)).toBe(true);
    });

    it('disabled BUTTON is not mouse focusable', () => {
        const element = document.createElement('button');

        element.setAttribute('disabled', '');

        expect(tuiIsMouseFocusable(element)).toBe(false);
    });

    it('button with tabIndex === -1 is not mouse focusable', () => {
        const element = document.createElement('button');

        element.setAttribute('disabled', '');

        expect(tuiIsMouseFocusable(element)).toBe(false);
    });
});
