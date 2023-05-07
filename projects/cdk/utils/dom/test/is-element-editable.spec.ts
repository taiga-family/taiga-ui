import {tuiIsElementEditable} from '@taiga-ui/cdk';

describe(`tuiIsElementEditable`, () => {
    let element: HTMLElement;

    beforeEach(() => {
        element = document.createElement(`input`);
    });

    it(`should return true for editable textfield`, () => {
        element.setAttribute(`type`, `text`);
        expect(tuiIsElementEditable(element)).toBe(true);
    });

    it(`should return true for editable textarea`, () => {
        element = document.createElement(`textarea`);
        expect(tuiIsElementEditable(element)).toBe(true);
    });

    it(`should return false for readonly textfield`, () => {
        element.setAttribute(`type`, `text`);
        element.setAttribute(`readonly`, `true`);
        expect(tuiIsElementEditable(element)).toBe(false);
    });

    it(`should return true for checkbox`, () => {
        element.setAttribute(`type`, `checkbox`);
        expect(tuiIsElementEditable(element)).toBe(true);
    });

    it(`should return true for readonly checkbox`, () => {
        element.setAttribute(`type`, `checkbox`);
        element.setAttribute(`readonly`, `true`);
        expect(tuiIsElementEditable(element)).toBe(false);
    });

    it(`should return true for content editable element`, () => {
        element.setAttribute(`contenteditable`, `true`);
        expect(tuiIsElementEditable(element)).toBe(true);
    });

    it(`should return false for non-editable element`, () => {
        element = document.createElement(`div`);
        expect(tuiIsElementEditable(element)).toBe(false);
    });
});
