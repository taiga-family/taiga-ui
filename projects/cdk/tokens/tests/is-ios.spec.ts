import {TestBed} from '@angular/core/testing';
import {WA_NAVIGATOR} from '@ng-web-apis/common';
import {TUI_IS_IOS} from '@taiga-ui/cdk';

describe('TUI_IS_IOS', () => {
    describe('basic is IOS positive', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: WA_NAVIGATOR,
                        useValue: {
                            userAgent:
                                'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1',
                            platform: 'iPhone',
                        },
                    },
                ],
            });
            await TestBed.compileComponents();
        });

        it('return true if iPhone', () => {
            expect(TestBed.inject(TUI_IS_IOS)).toBe(true);
        });
    });

    describe('Mac OS mobile positive', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: WA_NAVIGATOR,
                        useValue: {
                            userAgent:
                                'Safari: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)' +
                                ' AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15',
                            platform: 'iPhone',
                            maxTouchPoints: 2,
                        },
                    },
                ],
            });
            await TestBed.compileComponents();
        });

        it('return true if apple and maxTouchPoints > 1', () => {
            expect(TestBed.inject(TUI_IS_IOS)).toBe(true);
        });
    });

    describe('Mac OS desktop negative', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: WA_NAVIGATOR,
                        useValue: {
                            userAgent:
                                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML,' +
                                ' like Gecko) Chrome/98.0.4758.102 Safari/537.36',
                            platform: 'MacIntel',
                            maxTouchPoints: 0,
                        },
                    },
                ],
            });
            await TestBed.compileComponents();
        });

        it('return false if MacOS Desktop', () => {
            expect(TestBed.inject(TUI_IS_IOS)).toBe(false);
        });
    });

    describe('Android / or Android WebView', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: WA_NAVIGATOR,
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

        it('return false if Android devices', () => {
            expect(TestBed.inject(TUI_IS_IOS)).toBe(false);
        });
    });
});
