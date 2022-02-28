import {TestBed} from '@angular/core/testing';
import {NAVIGATOR, USER_AGENT} from '@ng-web-apis/common';
import {configureTestSuite} from '@taiga-ui/testing';

import {TUI_IS_IOS} from '../is-ios';

describe('TUI_IS_IOS', () => {
    describe('basic is IOS positive', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: USER_AGENT,
                        useValue:
                            'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1',
                    },
                ],
            });
        });

        it('return true if iPhone', () => {
            expect(TestBed.inject(TUI_IS_IOS)).toBeTrue();
        });
    });

    describe('Mac OS mobile positive', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: USER_AGENT,
                        useValue:
                            'Safari: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15',
                    },
                    {
                        provide: NAVIGATOR,
                        useValue: {maxTouchPoints: 2},
                    },
                ],
            });
        });

        it('return true if apple and maxTouchPoints > 1', () => {
            expect(TestBed.inject(TUI_IS_IOS)).toBeTrue();
        });
    });

    describe('Mac OS desktop negative', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: USER_AGENT,
                        useValue:
                            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
                    },
                    {
                        provide: NAVIGATOR,
                        useValue: {maxTouchPoints: 0},
                    },
                ],
            });
        });

        it('return false if MacOS Desktop', () => {
            expect(TestBed.inject(TUI_IS_IOS)).toBeFalse();
        });
    });
});
