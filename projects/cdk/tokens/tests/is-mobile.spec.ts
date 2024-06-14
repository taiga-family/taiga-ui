import {TestBed} from '@angular/core/testing';
import {NAVIGATOR} from '@ng-web-apis/common';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('TUI_IS_MOBILE', () => {
    describe('MacOS / iOS', () => {
        describe('Iphone 12 Pro', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    providers: [
                        NG_EVENT_PLUGINS,
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent:
                                    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
                            },
                        },
                    ],
                });

                await TestBed.compileComponents();
            });

            it('is mobile', () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(true);
            });
        });

        describe('Ipad Air', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    providers: [
                        NG_EVENT_PLUGINS,
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent:
                                    'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
                            },
                        },
                    ],
                });
                await TestBed.compileComponents();
            });

            it('is tablet', () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(false);
            });
        });

        describe('Ipad Mini', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    providers: [
                        NG_EVENT_PLUGINS,
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent:
                                    'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
                            },
                        },
                    ],
                });
                await TestBed.compileComponents();
            });

            it('is tablet', () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(false);
            });
        });

        describe('Mac OS desktop', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    providers: [
                        NG_EVENT_PLUGINS,
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent:
                                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
                                platform: 'MacIntel',
                                maxTouchPoints: 0,
                            },
                        },
                    ],
                });

                await TestBed.compileComponents();
            });

            it('is desktop', () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(false);
            });
        });
    });

    describe('Android OS', () => {
        describe('Samsung Galaxy', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    providers: [
                        NG_EVENT_PLUGINS,
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent:
                                    'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36',
                            },
                        },
                    ],
                });
                await TestBed.compileComponents();
            });

            it('is mobile', () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(true);
            });
        });

        describe('Android WebView', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    providers: [
                        NG_EVENT_PLUGINS,
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent:
                                    'Mozilla/5.0 (Linux; Android 11; Android SDK built for x86' +
                                    ' Build/RSR1.210210.001.A1;wv)' +
                                    ' AppleWebKit/537.36' +
                                    ' (KHTML, like Gecko) Version 4.0 Chrome/83.0.4103.106 Mobile Safari/537.36',
                                platform: 'Linux i686',
                                maxTouchPoints: 5,
                            },
                        },
                    ],
                });
                await TestBed.compileComponents();
            });

            it('is mobile', () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(true);
            });
        });

        describe('Nest Hub', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    providers: [
                        NG_EVENT_PLUGINS,
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent:
                                    'Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.188 Safari/537.36 CrKey/1.54.250320',
                            },
                        },
                    ],
                });
                await TestBed.compileComponents();
            });

            it('is desktop', () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(false);
            });
        });
    });
});
