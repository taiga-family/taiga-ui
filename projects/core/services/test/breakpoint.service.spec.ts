import {TestBed} from '@angular/core/testing';
import {WINDOW} from '@ng-web-apis/common';
import {TuiBreakpointService} from '@taiga-ui/core';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`TuiBreakpointService`, () => {
    const mock: HTMLDivElement = document.createElement(`div`);
    let service: TuiBreakpointService;

    const windowMock: any = {
        innerWidth: 700,
        matchMedia: jest
            .fn()
            .mockReturnValue({...mock, matches: true, media: `(max-width: 767px)`}),
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            providers: [
                TuiBreakpointService,
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
