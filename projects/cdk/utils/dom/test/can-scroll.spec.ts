import {tuiCanScroll} from '@taiga-ui/cdk';

describe(`tuiCanScroll`, () => {
    let rootElement: HTMLDivElement;
    let parentElement: HTMLDivElement;
    let element: HTMLDivElement;

    beforeEach(() => {
        rootElement = document.createElement(`div`);
        parentElement = document.createElement(`div`);
        element = document.createElement(`div`);

        rootElement.appendChild(parentElement);
        parentElement.appendChild(element);
    });

    describe(`when vertical is true`, () => {
        it(`currentElement equals rootElement or parentElement`, () => {
            expect(tuiCanScroll(element, element, true, false)).toBe(false);
            expect(tuiCanScroll(parentElement, parentElement, true, false)).toBe(false);
            expect(tuiCanScroll(rootElement, rootElement, true, false)).toBe(false);

            expect(tuiCanScroll(element, element, true, true)).toBe(false);
            expect(tuiCanScroll(parentElement, parentElement, true, true)).toBe(false);
            expect(tuiCanScroll(rootElement, rootElement, true, true)).toBe(false);
        });

        it(`returns true if element can be scrolled up`, () => {
            element.style.height = `100px`;
            element.style.overflow = `auto`;
            element.scrollTop = 50;
            expect(tuiCanScroll(element, rootElement, true, false)).toBe(true);
        });

        it(`returns false if element cannot be scrolled up`, () => {
            element.style.height = `100px`;
            element.style.overflow = `auto`;

            expect(tuiCanScroll(element, rootElement, true, false)).toBe(false);
        });

        it(`returns true if element can be scrolled down`, () => {
            element.style.height = `100px`;
            element.style.overflow = `auto`;
            element.scrollTop = 50;

            expect(tuiCanScroll(element, rootElement, true, false)).toBe(true);
        });

        it(`returns false if element cannot be scrolled down`, () => {
            element.style.height = `100px`;
            element.style.overflow = `auto`;

            expect(tuiCanScroll(element, rootElement, true, true)).toBe(false);
        });

        it(`returns false if element cannot be scrolled vertically`, () => {
            element.style.width = `100px`;
            element.style.overflow = `auto`;

            expect(tuiCanScroll(element, rootElement, true, true)).toBe(false);
            expect(tuiCanScroll(element, rootElement, true, false)).toBe(false);
        });
    });

    describe(`when vertical is false`, () => {
        it(`currentElement equals rootElement or parentElement`, () => {
            expect(tuiCanScroll(element, element, false, false)).toBe(false);
            expect(tuiCanScroll(parentElement, parentElement, false, false)).toBe(false);
            expect(tuiCanScroll(rootElement, rootElement, false, false)).toBe(false);

            expect(tuiCanScroll(element, element, false, true)).toBe(false);
            expect(tuiCanScroll(parentElement, parentElement, false, true)).toBe(false);
            expect(tuiCanScroll(rootElement, rootElement, false, true)).toBe(false);
        });

        it(`returns true if element can be scrolled left`, () => {
            element.style.width = `100px`;
            element.style.overflow = `auto`;
            element.scrollLeft = 50;
            expect(tuiCanScroll(element, rootElement, false, false)).toBe(true);
        });

        it(`returns false if element cannot be scrolled left`, () => {
            element.style.width = `100px`;
            element.style.overflow = `auto`;

            expect(tuiCanScroll(element, rootElement, false, false)).toBe(false);
        });

        it(`returns true if element can be scrolled right`, () => {
            element.style.width = `100px`;
            element.style.overflow = `auto`;
            element.scrollLeft = 50;

            expect(tuiCanScroll(element, rootElement, false, false)).toBe(true);
        });

        it(`returns false if element cannot be scrolled right`, () => {
            element.style.width = `100px`;
            element.style.overflow = `auto`;

            expect(tuiCanScroll(element, rootElement, false, true)).toBe(false);
        });

        it(`returns false if element cannot be scrolled horizontally`, () => {
            element.style.height = `100px`;
            element.style.overflow = `auto`;

            expect(tuiCanScroll(element, rootElement, false, true)).toBe(false);
            expect(tuiCanScroll(element, rootElement, false, false)).toBe(false);
        });
    });
});
