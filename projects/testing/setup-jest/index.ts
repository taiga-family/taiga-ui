/// <reference types="jest" />

const {TextDecoder: TextDecoderMock, TextEncoder: TextEncoderMock} = require(`util`);

global.TextEncoder = TextEncoderMock;
global.TextDecoder = TextDecoderMock;

// @ts-ignore
global.document.execCommand = function execCommandMock() {};

// you can also pass the mock implementation
// to jest.fn as an argument
(global.window as any).IntersectionObserver = jest.fn(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
}));

// Simulate window resize events
const resizeEvent = document.createEvent(`Event`);

resizeEvent.initEvent(`resize`, true, true);

global.window.resizeTo = width => {
    (global.window as any).innerWidth = width || global.window.innerWidth;
    (global.window as any).innerHeight = width || global.window.innerHeight;
    global.window.dispatchEvent(resizeEvent);
};

global.URL.createObjectURL = jest.fn(blob => `${blob}`);
global.URL.revokeObjectURL = jest.fn();

Object.defineProperty(global.window, `CSS`, {value: null});

Object.defineProperty(global.window, `getComputedStyle`, {
    value: () => {
        return {
            appearance: [`-webkit-appearance`],
            display: `none`,
        };
    },
});

Object.defineProperty(global.document, `doctype`, {
    value: `<!DOCTYPE html>`,
});

Object.defineProperty(global.document.body.style, `transform`, {
    value: () => {
        return {
            configurable: true,
            enumerable: true,
        };
    },
});

Object.defineProperty(global.window, `matchMedia`, {
    value: jest.fn().mockImplementation(query => ({
        addEventListener: jest.fn(),
        addListener: jest.fn(),
        dispatchEvent: jest.fn(),
        matches: false,
        media: query,
        onchange: null,
        removeEventListener: jest.fn(),
        removeListener: jest.fn(),
    })),
    writable: true,
});

Object.defineProperty(global.document, `elementFromPoint`, {
    value: jest.fn().mockImplementation(() => null),
    writable: true,
});

Object.defineProperty(global.document, `createRange`, {
    value: () => {
        const range = new Range();

        range.getBoundingClientRect = () => ({
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            toJSON: () => {},
            top: 0,
            width: 0,
            x: 0,
            y: 0,
        });

        range.getClientRects = () => {
            return {
                [Symbol.iterator]: jest.fn(),
                item: () => null,
                length: 0,
            };
        };

        return range;
    },
    writable: true,
});

Object.defineProperty(window, `scrollTo`, jest.fn());

Object.defineProperty(global.window, `getComputedStyle`, {
    value: () => ({
        getPropertyValue: (_prop: string) => {
            return ``;
        },
    }),
});

global.DataTransfer = class {
    private readonly data = new Map();

    setData(format: string, data: string): void {
        this.data.set(format, data);
    }

    getData(format: string): string {
        return this.data.get(format);
    }
} as unknown as typeof DataTransfer;

class TransferMockEvent {
    dataTransfer: DataTransfer;
    relatedTarget: EventTarget;

    constructor(
        readonly type: string,
        readonly options: {
            clipboardData: DataTransfer;
            relatedTarget: EventTarget;
        },
    ) {
        this.dataTransfer = options.clipboardData;
        this.relatedTarget = options.relatedTarget;
    }
}

global.DragEvent = TransferMockEvent as unknown as typeof DragEvent;
global.ClipboardEvent = TransferMockEvent as unknown as typeof ClipboardEvent;

/**
 * in our jest setupFilesAfterEnv file,
 * however when running with ng test those
 * imports are already done by angular
 * resulting in duplicate imports
 * and conflicts resulting in the above error
 */
if (!(`Zone` in global)) {
    require(`zone.js`);
    require(`zone.js/testing`);
}

// @note: build empty entry point
export {};
