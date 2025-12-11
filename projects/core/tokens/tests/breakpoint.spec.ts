import {type Signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TUI_BREAKPOINT, type TuiBreakpointMediaKey} from '@taiga-ui/core';

describe('TUI_BREAKPOINT', () => {
    const windowMock = {
        matchMedia: jest.fn().mockReturnValue({
            ...document.createElement('div'),
            matches: true,
            media: '(max-width: 767px)',
        }),
        innerWidth: 700,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    } as unknown as Window;

    let breakpoint: Signal<TuiBreakpointMediaKey | null>;

    describe('<meta name="viewport" content="width=device-width">', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                providers: [
                    {
                        provide: WA_WINDOW,
                        useValue: {
                            ...windowMock,
                            document: {documentElement: {clientWidth: 700}},
                        },
                    },
                ],
            }).compileComponents();

            breakpoint = TestBed.inject(TUI_BREAKPOINT);
        });

        it('should emit mobile', () => {
            expect(breakpoint()).toBe('mobile');
        });
    });

    describe('<meta name="viewport" content="width=1024px">', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                providers: [
                    {
                        provide: WA_WINDOW,
                        useValue: {
                            ...windowMock,
                            document: {documentElement: {clientWidth: 1024}},
                        },
                    },
                ],
            }).compileComponents();

            breakpoint = TestBed.inject(TUI_BREAKPOINT);
        });

        it('should emit desktopSmall', () => {
            expect(breakpoint()).toBe('desktopSmall');
        });
    });

    describe('<meta name="viewport" content="width=1281">', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                providers: [
                    {
                        provide: WA_WINDOW,
                        useValue: {
                            ...windowMock,
                            document: {documentElement: {clientWidth: 1281}},
                        },
                    },
                ],
            }).compileComponents();

            breakpoint = TestBed.inject(TUI_BREAKPOINT);
        });

        it('should emit desktopLarge', () => {
            expect(breakpoint()).toBe('desktopLarge');
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
