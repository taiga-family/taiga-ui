import {tuiSetNativeMouseFocused} from '@taiga-ui/cdk';

describe(`tuiSetNativeMouseFocused`, () => {
    it(`should do nothing if element has no owner document`, () => {
        const element = document.createElement(`div`);

        Object.defineProperty(element, `ownerDocument`, {value: undefined});

        tuiSetNativeMouseFocused(element);
    });

    it(`should trigger mousedown event if Event function is available`, () => {
        const element = document.createElement(`div`);
        const mockDispatchEvent = jest.fn();

        element.dispatchEvent = mockDispatchEvent;

        tuiSetNativeMouseFocused(element);

        expect(mockDispatchEvent).toHaveBeenCalledWith(
            new Event(`mousedown`, {bubbles: true, cancelable: true}),
        );
    });

    it(`should trigger mousedown event if Event function is not available`, () => {
        const element = document.createElement(`div`);

        const mockCreateEvent = jest.fn().mockReturnValue({
            initEvent: () => {},
        });

        const mockOwnerDocument = {
            createEvent: mockCreateEvent,
        };

        const originEvent = global.Event;

        // @ts-ignore
        global.Event = undefined;

        Object.defineProperty(element, `ownerDocument`, {value: mockOwnerDocument});

        const mockDispatchEvent = jest.fn();

        element.dispatchEvent = mockDispatchEvent;

        tuiSetNativeMouseFocused(element);

        expect(mockCreateEvent).toHaveBeenCalledWith(`Event`);
        expect(mockDispatchEvent).toHaveBeenCalled();

        global.Event = originEvent;
    });

    it(`should focus on element if focused is true`, () => {
        const element = document.createElement(`div`);
        const mockFocus = jest.fn();

        element.focus = mockFocus;

        tuiSetNativeMouseFocused(element);

        expect(mockFocus).toHaveBeenCalledWith({preventScroll: false});
    });

    it(`should not focus on element if focused is false`, () => {
        const element = document.createElement(`div`);
        const mockFocus = jest.fn();

        element.focus = mockFocus;

        tuiSetNativeMouseFocused(element, false);

        expect(mockFocus).not.toHaveBeenCalled();
    });

    it(`should blur element if focused is false`, () => {
        const element = document.createElement(`div`);
        const mockBlur = jest.fn();

        element.blur = mockBlur;

        tuiSetNativeMouseFocused(element, false);

        expect(mockBlur).toHaveBeenCalled();
    });

    it(`should not blur element if focused is true`, () => {
        const element = document.createElement(`div`);
        const mockBlur = jest.fn();

        element.blur = mockBlur;

        tuiSetNativeMouseFocused(element);

        expect(mockBlur).not.toHaveBeenCalled();
    });

    it(`should focus on element without scrolling if preventScroll is true`, () => {
        const element = document.createElement(`div`);
        const mockFocus = jest.fn();

        element.focus = mockFocus;

        tuiSetNativeMouseFocused(element, true, true);

        expect(mockFocus).toHaveBeenCalledWith({preventScroll: true});
    });
});
