import {tuiGetElementObscures} from '@taiga-ui/cdk';

describe(`tuiGetElementObscures`, () => {
    let element: Element;

    beforeEach(() => {
        element = document.createElement(`div`);
        document.body.appendChild(element);
    });

    describe(`element has width and height`, () => {
        beforeEach(() => {
            element.getBoundingClientRect = jest.fn().mockImplementation(() => ({
                height: 500,
                width: 500,
                x: 0,
                y: 0,
            })) as unknown as () => DOMRect;
        });

        it(`should return null if element does not have ownerDocument`, () => {
            Object.defineProperty(element, `ownerDocument`, {value: undefined});
            expect(tuiGetElementObscures(element)).toBeNull();
        });

        it(`should return null if element does not have defaultView`, () => {
            Object.defineProperty(element, `ownerDocument`, {value: {defaultView: null}});
            expect(tuiGetElementObscures(element)).toBeNull();
        });

        it(`should return null if element does not have getBoundingClientRect method`, () => {
            element.getBoundingClientRect = undefined as any;
            expect(tuiGetElementObscures(element)).toBeNull();
        });

        it(`should return null if no elements are found at the calculated points`, () => {
            const {ownerDocument} = element;
            const mockElementFromPoint = ownerDocument.elementFromPoint as jest.Mock;

            mockElementFromPoint.mockReturnValue(null);
            expect(tuiGetElementObscures(element)).toEqual([]);
            expect(mockElementFromPoint).toHaveBeenCalledTimes(4);
        });

        it(`should return null if there are no obscuring elements`, () => {
            const {ownerDocument} = element;
            const mockElementFromPoint = ownerDocument.elementFromPoint as jest.Mock;

            mockElementFromPoint
                .mockReturnValueOnce(element)
                .mockReturnValueOnce(element)
                .mockReturnValueOnce(element)
                .mockReturnValueOnce(element);

            expect(tuiGetElementObscures(element)).toBeNull();

            expect(mockElementFromPoint).toHaveBeenCalledTimes(4);
        });

        it(`should return only elements not within the initial element`, () => {
            const {ownerDocument} = element;

            const others = [
                ownerDocument.createElement(`div`),
                ownerDocument.createElement(`textarea`),
                ownerDocument.createElement(`span`),
                ownerDocument.createElement(`p`),
            ];

            others.forEach(el => document.body.appendChild(el));

            const mockElementFromPoint = jest
                .fn()
                .mockReturnValueOnce(others[0])
                .mockReturnValueOnce(others[1])
                .mockReturnValueOnce(others[2])
                .mockReturnValueOnce(others[3]);

            Object.defineProperty(global.document, `elementFromPoint`, {
                writable: true,
                value: mockElementFromPoint,
            });

            const result = tuiGetElementObscures(element);

            expect(result).toEqual(others);
            expect(result?.length).toEqual(4);
            expect(mockElementFromPoint).toHaveBeenCalledTimes(4);
        });

        it(`should return null instead of an array`, () => {
            const {ownerDocument} = element;
            const others = [
                ownerDocument.createElement(`div`),
                ownerDocument.createElement(`span`),
                ownerDocument.createElement(`p`),
            ];

            others.forEach(el => document.body.appendChild(el));

            const mockElementFromPoint = ownerDocument.elementFromPoint as jest.Mock;

            mockElementFromPoint
                .mockReturnValueOnce(others[0])
                .mockReturnValueOnce(others[1])
                .mockReturnValueOnce(others[2])
                .mockReturnValueOnce(element);

            expect(tuiGetElementObscures(element)).toBeNull();
        });
    });

    describe(`element hasn't width and height`, () => {
        beforeEach(() => {
            element.getBoundingClientRect = jest.fn().mockImplementation(() => ({
                height: 0,
                width: 0,
                x: 0,
                y: 0,
            })) as unknown as () => DOMRect;
        });

        it(`should return null`, () => {
            const {ownerDocument} = element;
            const mockElementFromPoint = ownerDocument.elementFromPoint as jest.Mock;

            mockElementFromPoint.mockReturnValue(null);
            expect(tuiGetElementObscures(element)).toBeNull();
            expect(mockElementFromPoint).toHaveBeenCalledTimes(0);
        });

        it(`should return null anyway`, () => {
            const {ownerDocument} = element;
            const mockElementFromPoint = ownerDocument.elementFromPoint as jest.Mock;

            mockElementFromPoint
                .mockReturnValueOnce(element)
                .mockReturnValueOnce(element)
                .mockReturnValueOnce(element)
                .mockReturnValueOnce(element);

            expect(tuiGetElementObscures(element)).toBeNull();

            expect(mockElementFromPoint).toHaveBeenCalledTimes(0);
        });

        it(`should return null when elements not within the initial element`, () => {
            const {ownerDocument} = element;

            const others = [
                ownerDocument.createElement(`div`),
                ownerDocument.createElement(`textarea`),
                ownerDocument.createElement(`span`),
                ownerDocument.createElement(`p`),
            ];

            others.forEach(el => document.body.appendChild(el));

            const mockElementFromPoint = jest
                .fn()
                .mockReturnValueOnce(others[0])
                .mockReturnValueOnce(others[1])
                .mockReturnValueOnce(others[2])
                .mockReturnValueOnce(others[3]);

            Object.defineProperty(global.document, `elementFromPoint`, {
                writable: true,
                value: mockElementFromPoint,
            });

            const result = tuiGetElementObscures(element);

            expect(result).toBeNull();
            expect(mockElementFromPoint).toHaveBeenCalledTimes(0);
        });
    });

    afterEach(() => {
        document.body.innerHTML = ``;

        // reset global mock
        Object.defineProperty(global.document, `elementFromPoint`, {
            writable: true,
            value: jest.fn().mockImplementation(() => null),
        });
    });
});
