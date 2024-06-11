import {TestBed} from '@angular/core/testing';
import {WINDOW} from '@ng-web-apis/common';
import {TuiBreakpointService} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {first} from 'rxjs';

describe('TuiBreakpointService', () => {
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

    let service: TuiBreakpointService;

    describe('<meta name="viewport" content="width=device-width">', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                providers: [
                    NG_EVENT_PLUGINS,
                    TuiBreakpointService,
                    {
                        provide: WINDOW,
                        useValue: {
                            ...windowMock,
                            document: {documentElement: {clientWidth: 700}},
                        },
                    },
                ],
            }).compileComponents();

            service = TestBed.inject(TuiBreakpointService);
        });

        it('should emit mobile', () => {
            const observerMock = jest.fn();

            service.pipe(first()).subscribe(observerMock);

            expect(observerMock).toHaveBeenCalledWith('mobile');
        });
    });

    describe('<meta name="viewport" content="width=1024px">', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                providers: [
                    NG_EVENT_PLUGINS,
                    TuiBreakpointService,
                    {
                        provide: WINDOW,
                        useValue: {
                            ...windowMock,
                            document: {documentElement: {clientWidth: 1024}},
                        },
                    },
                ],
            }).compileComponents();

            service = TestBed.inject(TuiBreakpointService);
        });

        it('should emit desktopLarge', () => {
            const observerMock = jest.fn();

            service.pipe(first()).subscribe(observerMock);
            expect(observerMock).toHaveBeenCalledWith('desktopLarge');
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
