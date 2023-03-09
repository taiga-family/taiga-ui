import {TestBed} from '@angular/core/testing';
import {WINDOW} from '@ng-web-apis/common';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiMedia} from '../../interfaces';
import {TUI_MEDIA} from '../../tokens';
import {
    TuiBreakpoint,
    TuiBreakpointService,
    tuiCurrentBreakpoint,
    tuiGetBreakpoints,
} from '../breakpoint.service';

describe(`TuiBreakpointService`, () => {
    const mock: HTMLDivElement = document.createElement(`div`);
    let service: TuiBreakpointService;
    const mediaMock: TuiMedia = {
        mobile: 768,
        desktopSmall: 1024,
        desktopLarge: 1280,
    };

    const windowMock: any = {
        matchMedia: jest
            .fn()
            .mockReturnValue({...mock, matches: true, media: `(max-width: 1023px)`}),
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            providers: [
                TuiBreakpointService,
                {
                    provide: TUI_MEDIA,
                    useValue: mediaMock,
                },
                {
                    provide: WINDOW,
                    useValue: windowMock,
                },
            ],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(TuiBreakpointService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it(`should create`, () => {
        expect(service).toBeTruthy();
    });

    it(`should return an array of breakpoint objects`, () => {
        const media = TestBed.inject(TUI_MEDIA);

        expect(tuiGetBreakpoints(media)).toEqual([
            {name: `mobile`, query: `(max-width: 767px)`},
            {name: `desktopSmall`, query: `(max-width: 1023px)`},
            {name: `desktopLarge`, query: `(max-width: 1279px)`},
        ]);
    });

    it(`should return the correct breakpoint object`, () => {
        const breakpoints: TuiBreakpoint[] = [
            {name: `mobile`, query: `(max-width: 767px)`},
            {name: `desktopSmall`, query: `(max-width: 1023px)`},
            {name: `desktopLarge`, query: `(max-width: 1279px)`},
        ];
        const windowRef = TestBed.inject(WINDOW);

        expect(tuiCurrentBreakpoint(breakpoints, windowRef)).toEqual({
            name: `mobile`,
            query: `(max-width: 767px)`,
        });
    });

    it(`should emit the current breakpoint name when subscribed to`, () => {
        const observerMock = jest.fn();

        const subscription = service.subscribe(observerMock);

        expect(observerMock).toHaveBeenCalledWith(`mobile`);
        subscription.unsubscribe();
    });
});
