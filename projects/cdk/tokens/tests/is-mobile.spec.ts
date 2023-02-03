import {TestBed} from '@angular/core/testing';
import {NAVIGATOR} from '@ng-web-apis/common';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`TUI_IS_MOBILE`, () => {
    describe(`MacOS / iOS`, () => {
        describe(`Iphone 12 Pro`, () => {
            configureTestSuite(() => {
                TestBed.configureTestingModule({
                    providers: [
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent: `Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1`,
                            },
                        },
                    ],
                });
            });

            it(`is mobile`, () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(true);
            });
        });

        describe(`Ipad Air`, () => {
            configureTestSuite(() => {
                TestBed.configureTestingModule({
                    providers: [
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent: `Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1`,
                            },
                        },
                    ],
                });
            });

            it(`is tablet`, () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(false);
            });
        });

        describe(`Ipad Mini`, () => {
            configureTestSuite(() => {
                TestBed.configureTestingModule({
                    providers: [
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent: `Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1`,
                            },
                        },
                    ],
                });
            });

            it(`is tablet`, () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(false);
            });
        });

        describe(`Mac OS desktop`, () => {
            configureTestSuite(() => {
                TestBed.configureTestingModule({
                    providers: [
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36`,
                                platform: `MacIntel`,
                                maxTouchPoints: 0,
                            },
                        },
                    ],
                });
            });

            it(`is desktop`, () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(false);
            });
        });
    });

    describe(`Android OS`, () => {
        describe(`Samsung Galaxy`, () => {
            configureTestSuite(() => {
                TestBed.configureTestingModule({
                    providers: [
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent: `Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36`,
                            },
                        },
                    ],
                });
            });

            it(`is mobile`, () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(true);
            });
        });

        describe(`Android WebView`, () => {
            configureTestSuite(() => {
                TestBed.configureTestingModule({
                    providers: [
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent:
                                    `Mozilla/5.0 (Linux; Android 11; Android SDK built for x86` +
                                    ` Build/RSR1.210210.001.A1;wv)` +
                                    ` AppleWebKit/537.36` +
                                    ` (KHTML, like Gecko) Version 4.0 Chrome/83.0.4103.106 Mobile Safari/537.36`,
                                platform: `Linux i686`,
                                maxTouchPoints: 5,
                            },
                        },
                    ],
                });
            });

            it(`is mobile`, () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(true);
            });
        });

        describe(`Nest Hub`, () => {
            configureTestSuite(() => {
                TestBed.configureTestingModule({
                    providers: [
                        {
                            provide: NAVIGATOR,
                            useValue: {
                                userAgent: `Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.188 Safari/537.36 CrKey/1.54.250320`,
                            },
                        },
                    ],
                });
            });

            it(`is desktop`, () => {
                expect(TestBed.inject(TUI_IS_MOBILE)).toBe(false);
            });
        });
    });
});
