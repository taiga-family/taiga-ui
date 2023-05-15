import {
    tuiIsElement,
    tuiIsHTMLElement,
    tuiIsInput,
    tuiIsTextarea,
    tuiIsTextfield,
    tuiIsTextNode,
} from '@taiga-ui/cdk';

describe(`element asserts`, () => {
    describe(`tuiIsElement`, () => {
        it(`should return true for an Element node`, () => {
            const element = document.createElement(`div`);
            const result = tuiIsElement(element);

            expect(result).toBe(true);
        });

        it(`should return false for a non-element node`, () => {
            const node = document.createTextNode(`text`);
            const result = tuiIsElement(node);

            expect(result).toBe(false);
        });

        it(`should return false when node is null`, () => {
            const node = null;
            const result = tuiIsElement(node);

            expect(result).toBe(false);
        });
    });

    describe(`tuiIsHTMLElement`, () => {
        it(`should return true for an HTMLElement`, () => {
            const element = document.createElement(`div`);
            const result = tuiIsHTMLElement(element);

            expect(result).toBe(true);
        });

        it(`should return false for a non-HTMLElement`, () => {
            const node = document.createTextNode(`text`);
            const result = tuiIsHTMLElement(node);

            expect(result).toBe(false);
        });

        it(`should return false when node is null`, () => {
            const node = null;
            const result = tuiIsHTMLElement(node);

            expect(result).toBe(false);
        });
    });

    describe(`tuiIsTextNode`, () => {
        it(`should return true for a TextNode`, () => {
            const textNode = document.createTextNode(`text`);
            const result = tuiIsTextNode(textNode);

            expect(result).toBe(true);
        });

        it(`should return false for an HTMLElement`, () => {
            const element = document.createElement(`div`);
            const result = tuiIsTextNode(element);

            expect(result).toBe(false);
        });
    });

    describe(`tuiIsInput`, () => {
        it(`should return true if element is an input element`, () => {
            const input = document.createElement(`input`);
            const result = tuiIsInput(input);

            expect(result).toBe(true);
        });

        it(`should return false if element is not an input element`, () => {
            const div = document.createElement(`div`);
            const result = tuiIsInput(div);

            expect(result).toBe(false);
        });
    });

    describe(`tuiIsTextarea`, () => {
        it(`should return true if element is a textarea element`, () => {
            const textarea = document.createElement(`textarea`);
            const result = tuiIsTextarea(textarea);

            expect(result).toBe(true);
        });

        it(`should return false if element is not a textarea element`, () => {
            const div = document.createElement(`div`);
            const result = tuiIsTextarea(div);

            expect(result).toBe(false);
        });
    });

    describe(`tuiIsTextfield`, () => {
        it(`should return true if element is an input element`, () => {
            const input = document.createElement(`input`);
            const result = tuiIsTextfield(input);

            expect(result).toBe(true);
        });

        it(`should return true if element is a textarea element`, () => {
            const textarea = document.createElement(`textarea`);
            const result = tuiIsTextfield(textarea);

            expect(result).toBe(true);
        });

        it(`should return false if element is not an input or textarea element`, () => {
            const div = document.createElement(`div`);
            const result = tuiIsTextfield(div);

            expect(result).toBe(false);
        });
    });
});
