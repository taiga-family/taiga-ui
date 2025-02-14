/// <reference types="jest" />
import {tuiSwitchNgDevMode} from '@taiga-ui/testing/mocks';
import {setupZoneTestEnv} from 'jest-preset-angular/setup-env/zone';
import ResizeObserver from 'resize-observer-polyfill';

tuiSwitchNgDevMode(false);

setupZoneTestEnv(); // drop it after migrate zone less mode

const {TextEncoder: TextEncoderMock, TextDecoder: TextDecoderMock} = require('node:util');

global.TextEncoder = TextEncoderMock;
global.TextDecoder = TextDecoderMock;
global.ResizeObserver = ResizeObserver;

Object.defineProperty(global.document, 'execCommand', {
    writable: true,
    value: () => {},
});

// you can also pass the mock implementation
// to jest.fn as an argument
(global.window as any).IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

// Simulate window resize events
const resizeEvent = document.createEvent('Event');

resizeEvent.initEvent('resize', true, true);

global.window.resizeTo = (width) => {
    (global.window as any).innerWidth = width || global.window.innerWidth;
    (global.window as any).innerHeight = width || global.window.innerHeight;
    global.window.dispatchEvent(resizeEvent);
};

global.URL.createObjectURL = jest.fn(String);
global.URL.revokeObjectURL = jest.fn();

Object.defineProperty(global.window, 'CSS', {value: null});

Object.defineProperty(global.window, 'getComputedStyle', {
    value: () => ({
        display: 'none',
        appearance: ['-webkit-appearance'],
    }),
});

Object.defineProperty(global.document, 'doctype', {
    value: '<!DOCTYPE html>',
});

Object.defineProperty(global.document.body.style, 'transform', {
    value: () => ({
        enumerable: true,
        configurable: true,
    }),
});

Object.defineProperty(global.window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

Object.defineProperty(global.document, 'elementFromPoint', {
    writable: true,
    value: jest.fn().mockImplementation(() => null),
});

Object.defineProperty(global.document, 'createRange', {
    writable: true,
    value: () => {
        const range = new Range();

        range.getBoundingClientRect = () => ({
            x: 0,
            y: 0,
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
            toJSON: () => {},
        });

        range.getClientRects = () => ({
            item: () => null,
            length: 0,
            [Symbol.iterator]: jest.fn(),
        });

        return range;
    },
});

Object.defineProperty(window, 'scrollTo', jest.fn());

Object.defineProperty(global.window, 'getComputedStyle', {
    value: () => ({
        getPropertyValue: (_prop: string) => '',
    }),
});

global.DataTransfer = class {
    private readonly data = new Map();

    public setData(format: string, data: string): void {
        this.data.set(format, data);
    }

    public getData(format: string): string {
        return this.data.get(format);
    }
} as unknown as typeof DataTransfer;

class TransferMockEvent {
    protected dataTransfer: DataTransfer;
    protected relatedTarget: EventTarget;

    constructor(
        protected readonly type: string,
        protected readonly options: {
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

// Need before initialize any static methods
global.Date = class extends Date {
    constructor(...args: DateConstructor[]) {
        // @ts-ignore
        super(...(args.length === 0 ? ['2023-02-15T00:00:00Z'] : args));
    }
} as unknown as DateConstructor;

/**
 * in our jest setupFilesAfterEnv file,
 * however when running with ng test those
 * imports are already done by angular
 * resulting in duplicate imports
 * and conflicts resulting in the above error
 */
if (!('Zone' in global)) {
    require('zone.js');
    require('zone.js/testing');
}

// @note: build empty entry point
export {};
