import {Component, DebugElement, Provider, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, TuiDecimalT, TuiNumberFormatSettings} from '@taiga-ui/core';
import {TuiInputNumberComponent, TuiInputNumberModule} from '@taiga-ui/kit';
import {configureTestSuite, NativeInputPO, PageObject} from '@taiga-ui/testing';

describe('InputNumber (customization via TUI_NUMBER_FORMAT token)', () => {
    @Component({
        template: `
            <tui-input-number
                [formControl]="control"
                [decimal]="decimal"
                [precision]="precision"
            ></tui-input-number>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputNumberComponent)
        component!: TuiInputNumberComponent;

        control = new FormControl(12345.0);

        decimal: TuiDecimalT = 'always';
        precision = 2;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputNumberComponent;
    let pageObject: PageObject<TestComponent>;
    let nativeInput: HTMLInputElement;
    let nativeInputPO: NativeInputPO;

    describe('Format - {d d d,d}', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    TuiInputNumberModule,
                    ReactiveFormsModule,
                ],
                declarations: [TestComponent],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            pageObject = new PageObject(fixture);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            nativeInput = getNativeInput()!.nativeElement;
            fixture.detectChanges();
        });

        it('comma usage', () => {
            nativeInput.value = '55666,7777';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });

        it('dot usage', () => {
            nativeInput.value = '55666.7777';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });
    });

    describe('Format - {d d d,d}', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    TuiInputNumberModule,
                    ReactiveFormsModule,
                ],
                declarations: [TestComponent],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            pageObject = new PageObject(fixture);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            nativeInput = getNativeInput()!.nativeElement;
            fixture.detectChanges();
        });

        it('comma usage', () => {
            nativeInput.value = '55666,7777';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });

        it('dot usage', () => {
            nativeInput.value = '55666.7777';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });
    });

    describe('Format - {d,d,d.d}', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    TuiInputNumberModule,
                    ReactiveFormsModule,
                ],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_NUMBER_FORMAT,
                        useValue: {
                            decimalSeparator: '.',
                            thousandSeparator: ',',
                            signMode: 'negative-only',
                        } as TuiNumberFormatSettings,
                    },
                ],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            pageObject = new PageObject(fixture);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            nativeInput = getNativeInput()!.nativeElement;
            fixture.detectChanges();
        });

        it('comma usage', () => {
            nativeInput.value = '556,667,777';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`556,667,777.00`);
        });

        it('dot usage', () => {
            nativeInput.value = '556,667,777.99';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`556,667,777.99`);
        });
    });

    describe('property `signMode` of `TUI_NUMBER_FORMAT`-token', () => {
        const defaultNumberFormatOptions: TuiNumberFormatSettings = {
            decimalSeparator: ',',
            thousandSeparator: ' ',
            zeroPadding: true,
            signMode: 'negative-only',
        };

        describe('configuration "negative-only" (default)', () => {
            const providers = [
                {
                    provide: TUI_NUMBER_FORMAT,
                    useValue: {...defaultNumberFormatOptions, signMode: 'negative-only'},
                },
            ];
            const decimal: TuiDecimalT = 'not-zero';

            it('initial positive number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: 0.07,
                });

                expect(nativeInputPO.value).toBe('0,07');
            });

            it('initial negative number => show "-"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: -0.3,
                });

                expect(nativeInputPO.value).toBe('-0,30');
            });

            it('initial 0 => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: 0,
                });

                expect(nativeInputPO.value).toBe('0');
            });

            it('type positive number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('123456');
                expect(nativeInput.value).toBe('123 456');
            });

            it('type negative number => show "-"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('-12,34');
                expect(nativeInput.value).toBe('-12,34');
            });

            it('type "0" number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('0');
                expect(nativeInput.value).toBe('0');
            });
        });

        describe('configuration "always"', () => {
            const providers = [
                {
                    provide: TUI_NUMBER_FORMAT,
                    useValue: {...defaultNumberFormatOptions, signMode: 'always'},
                },
            ];
            const decimal: TuiDecimalT = 'always';

            it('initial positive number => show "+"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: 0.27,
                });

                expect(nativeInputPO.value).toBe('+0,27');
            });

            it('initial negative number => show "-"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: -0.42,
                });

                expect(nativeInputPO.value).toBe('-0,42');
            });

            it('initial 0 => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: 0,
                });

                expect(nativeInputPO.value).toBe('0,00');
            });

            it('type positive number => show "+"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('1234');
                expect(nativeInput.value).toBe('+1 234,00');
            });

            it('type negative number => show "-"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('-1,12');
                expect(nativeInput.value).toBe('-1,12');
            });

            it('type "0" number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('0');
                expect(nativeInput.value).toBe('0,00');
            });
        });

        describe('configuration "never"', () => {
            const providers = [
                {
                    provide: TUI_NUMBER_FORMAT,
                    useValue: {...defaultNumberFormatOptions, signMode: 'never'},
                },
            ];
            const decimal: TuiDecimalT = 'not-zero';

            it('initial positive number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: 0.01,
                });

                expect(nativeInputPO.value).toBe('0,01');
            });

            it('initial negative number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: -0.02,
                });

                expect(nativeInputPO.value).toBe('0,02');
            });

            it('initial 0 => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: 0,
                });

                expect(nativeInputPO.value).toBe('0');
            });

            it('type positive number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('1234');
                expect(nativeInput.value).toBe('1 234');
            });

            it('type negative number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('-1,12');
                expect(nativeInput.value).toBe('1,12');
            });

            it('type "0" number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('0');
                expect(nativeInput.value).toBe('0');
            });
        });

        describe('configuration "force-negative"', () => {
            const providers = [
                {
                    provide: TUI_NUMBER_FORMAT,
                    useValue: {...defaultNumberFormatOptions, signMode: 'force-negative'},
                },
            ];
            const decimal: TuiDecimalT = 'not-zero';

            it('initial positive number => show "-"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: 300,
                });

                expect(nativeInputPO.value).toBe('-300');
            });

            it('initial negative number => show "-"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: -0.04,
                });

                expect(nativeInputPO.value).toBe('-0,04');
            });

            it('initial 0 => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: 0,
                });

                expect(nativeInputPO.value).toBe('0');
            });

            it('type positive number => show "-"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('1222333');
                expect(nativeInput.value).toBe('-1 222 333');
            });

            it('type negative number => show "-"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('-4,2');
                expect(nativeInput.value).toBe('-4,2');
            });

            it('type "0" number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('0');
                expect(nativeInput.value).toBe('0');
            });
        });

        describe('configuration "force-positive"', () => {
            const providers = [
                {
                    provide: TUI_NUMBER_FORMAT,
                    useValue: {...defaultNumberFormatOptions, signMode: 'force-positive'},
                },
            ];
            const decimal: TuiDecimalT = 'never';

            it('initial positive number => show "+"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: 42,
                });

                expect(nativeInputPO.value).toBe('+42');
            });

            it('initial negative number => show "+"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: -99,
                });

                expect(nativeInputPO.value).toBe('+99');
            });

            it('initial 0 => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: 0,
                });

                expect(nativeInputPO.value).toBe('0');
            });

            it('type positive number => show "+"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('270000');
                expect(nativeInput.value).toBe('+270 000');
            });

            it('type negative number => show "+"', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('-27');
                expect(nativeInput.value).toBe('+27');
            });

            it('type "0" number => no sign', async () => {
                await initialize({
                    providers,
                    decimal,
                    initialValue: null,
                });

                nativeInputPO.sendText('0');
                expect(nativeInput.value).toBe('0');
            });
        });
    });

    function getNativeInput(): DebugElement | null {
        return pageObject.getByAutomationId('tui-primitive-textfield__native-input');
    }

    async function initialize({
        providers,
        initialValue = 12345.0,
        decimal = 'always',
    }: {
        providers: Provider[];
        initialValue?: number | null;
        decimal?: TuiDecimalT;
    }): Promise<void> {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiInputNumberModule, ReactiveFormsModule],
            declarations: [TestComponent],
            providers,
        });

        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        nativeInput = getNativeInput()!.nativeElement;
        nativeInputPO = new NativeInputPO(
            fixture,
            'tui-primitive-textfield__native-input',
        );

        testComponent.control = new FormControl(initialValue);
        testComponent.decimal = decimal;

        fixture.detectChanges();
        await fixture.whenStable();
    }
});
