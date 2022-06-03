import {Component, ElementRef, Provider, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    TuiCurrency,
    TuiMoneyComponent,
    TuiMoneyModule,
    tuiMoneyOptionsProvider,
} from '@taiga-ui/addon-commerce';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, TuiNumberFormatSettings} from '@taiga-ui/core';

describe('Money', () => {
    @Component({
        template: `
            <tui-money [value]="value"></tui-money>
        `,
    })
    class TestComponent {
        @ViewChild(TuiMoneyComponent, {static: true})
        component!: TuiMoneyComponent;

        @ViewChild(TuiMoneyComponent, {static: true, read: ElementRef})
        nativeElementRef!: ElementRef<HTMLElement>;

        get nativeElement(): HTMLElement {
            return this.nativeElementRef.nativeElement;
        }

        value = 0;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    describe('configuration of the default values via TUI_MONEY_OPTIONS token', () => {
        it('override by custom options', () => {
            initialize(
                tuiMoneyOptionsProvider({
                    currency: TuiCurrency.Euro,
                    sign: 'never',
                    precision: 1,
                }),
            );
            fixture.detectChanges();

            expect(testComponent.component.currency).toEqual('EUR');
            expect(testComponent.component.sign).toEqual('never');
            expect(testComponent.component.singleColor).toEqual(false);
            expect(testComponent.component.precision).toEqual(1);
            expect(testComponent.component.colored).toEqual(false);
            expect(testComponent.component.red).toEqual(false);
            expect(testComponent.component.signSymbol).toEqual('');
        });

        it('legacy property `sign` still works (even if TUI_NUMBER_FORMAT was provided)', () => {
            initialize(
                {
                    provide: TUI_NUMBER_FORMAT,
                    useValue: {
                        signMode: 'never',
                        decimalSeparator: ',',
                        thousandSeparator: '_',
                        zeroPadding: true,
                    } as TuiNumberFormatSettings,
                },
                tuiMoneyOptionsProvider({
                    currency: TuiCurrency.Euro,
                    sign: 'always',
                }),
            );
            testComponent.value = 100500;
            fixture.detectChanges();

            expect(testComponent.nativeElement.textContent).toBe('+100_500€');
        });
    });

    describe('customization via TUI_NUMBER_FORMAT token', () => {
        const numberFormatOptions: TuiNumberFormatSettings = {
            decimalSeparator: ',',
            thousandSeparator: CHAR_NO_BREAK_SPACE,
            zeroPadding: true,
            signMode: 'negative-only',
        };

        describe('sign', () => {
            const moneyOptions = {
                currency: 'USD',
                precision: 4,
            };

            function expectValue(value: number): {toBeShownAs: (v: string) => void} {
                return {
                    toBeShownAs(expectedValue: string): void {
                        testComponent.value = value;
                        fixture.detectChanges();

                        expect(testComponent.nativeElement.textContent).toBe(
                            expectedValue,
                        );
                    },
                };
            }

            describe('negative-only', () => {
                beforeEach(() => {
                    initialize(tuiMoneyOptionsProvider(moneyOptions), {
                        provide: TUI_NUMBER_FORMAT,
                        useValue: {
                            ...numberFormatOptions,
                            signMode: 'negative-only',
                        } as TuiNumberFormatSettings,
                    });
                });

                it('0 => no sign', () => {
                    expectValue(0).toBeShownAs('0$');
                });

                it('<0 => shows minus', () => {
                    expectValue(-100).toBeShownAs('–100$');
                });

                it('>0 => no sign', () => {
                    expectValue(300).toBeShownAs('300$');
                });
            });

            describe('always', () => {
                beforeEach(() => {
                    initialize(tuiMoneyOptionsProvider(moneyOptions), {
                        provide: TUI_NUMBER_FORMAT,
                        useValue: {
                            ...numberFormatOptions,
                            signMode: 'always',
                        } as TuiNumberFormatSettings,
                    });
                });

                it('0 => no sign', () => {
                    expectValue(0).toBeShownAs('0$');
                });

                it('<0 => shows minus', () => {
                    expectValue(-100).toBeShownAs('–100$');
                });

                it('>0 => shows plus', () => {
                    expectValue(300).toBeShownAs('+300$');
                });
            });

            describe('never', () => {
                beforeEach(() => {
                    initialize(tuiMoneyOptionsProvider(moneyOptions), {
                        provide: TUI_NUMBER_FORMAT,
                        useValue: {
                            ...numberFormatOptions,
                            signMode: 'never',
                        } as TuiNumberFormatSettings,
                    });
                });

                it('0 => no sign', () => {
                    expectValue(0).toBeShownAs('0$');
                });

                it('<0 => no sign', () => {
                    expectValue(-100).toBeShownAs('100$');
                });

                it('>0 => no sign', () => {
                    expectValue(300).toBeShownAs('300$');
                });
            });

            describe('force-negative', () => {
                beforeEach(() => {
                    initialize(tuiMoneyOptionsProvider(moneyOptions), {
                        provide: TUI_NUMBER_FORMAT,
                        useValue: {
                            ...numberFormatOptions,
                            signMode: 'force-negative',
                        } as TuiNumberFormatSettings,
                    });
                });

                it('0 => no sign', () => {
                    expectValue(0).toBeShownAs('0$');
                });

                it('<0 => shows minus', () => {
                    expectValue(-100).toBeShownAs('–100$');
                });

                it('>0 => shows minus', () => {
                    expectValue(300).toBeShownAs('–300$');
                });
            });

            describe('force-positive', () => {
                beforeEach(() => {
                    initialize(tuiMoneyOptionsProvider(moneyOptions), {
                        provide: TUI_NUMBER_FORMAT,
                        useValue: {
                            ...numberFormatOptions,
                            signMode: 'force-positive',
                        } as TuiNumberFormatSettings,
                    });
                });

                it('0 => no sign', () => {
                    expectValue(0).toBeShownAs('0$');
                });

                it('<0 => shows plus', () => {
                    expectValue(-100).toBeShownAs('+100$');
                });

                it('>0 => shows plus', () => {
                    expectValue(300).toBeShownAs('+300$');
                });
            });
        });
    });

    function initialize(...providers: Provider[]): void {
        TestBed.configureTestingModule({
            imports: [TuiMoneyModule],
            declarations: [TestComponent],
            providers,
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
    }
});
