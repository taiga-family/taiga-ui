import {tuiGetSelectedText} from '@taiga-ui/cdk';

describe(`tuiGetSelectedText`, () => {
    let mockWindow: any;

    describe(`default behavior`, () => {
        beforeEach(() => {
            mockWindow = {
                document: {
                    activeElement: null,
                },
                getSelection: jest.fn(() => ({
                    toString: jest.fn(() => ``),
                })),
            };
        });

        it(`should return null if document has no active element`, () => {
            expect(tuiGetSelectedText(mockWindow)).toBeNull();
        });

        it(`should return null if active element is not a textfield`, () => {
            mockWindow.document.activeElement = document.createElement(`div`);
            expect(tuiGetSelectedText(mockWindow)).toBeNull();
        });
    });

    describe(`when text was selected before`, () => {
        beforeEach(() => {
            mockWindow = {
                document: {
                    activeElement: null,
                },
                getSelection: jest.fn(() => ({
                    toString: jest.fn(() => `selected text`),
                })),
            };
        });

        it(`should return selected text from input element`, () => {
            const input = document.createElement(`input`);

            input.value = `input value`;
            input.selectionStart = 2;
            input.selectionEnd = 6;
            mockWindow.document.activeElement = input;
            expect(tuiGetSelectedText(mockWindow)).toBe(`put `);
        });

        it(`should return selected text from textarea element`, () => {
            const textarea = document.createElement(`textarea`);

            textarea.value = `textarea value`;
            textarea.selectionStart = 1;
            textarea.selectionEnd = 5;
            mockWindow.document.activeElement = textarea;
            expect(tuiGetSelectedText(mockWindow)).toBe(`exta`);
        });

        it(`should return selected text from window selection if active element is not a textfield`, () => {
            const div = document.createElement(`div`);

            mockWindow.document.activeElement = div;
            expect(tuiGetSelectedText(mockWindow)).toBe(`selected text`);
        });
    });
});
