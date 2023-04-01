import {TestBed} from '@angular/core/testing';
import {WINDOW} from '@ng-web-apis/common';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiMedia} from '../../interfaces';
import {TUI_MEDIA} from '../../tokens';
import {TuiBreakpointService} from '../breakpoint.service';

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
            .mockReturnValue({...mock, matches: true, media: `(max-width: 767px)`}),
        innerWidth: 700,
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

    it(`should emit the current breakpoint name when subscribed to`, () => {
        const observerMock = jest.fn();

        const subscription = service.subscribe(observerMock);

        expect(observerMock).toHaveBeenCalledWith(`mobile`);
        subscription.unsubscribe();
    });
});
