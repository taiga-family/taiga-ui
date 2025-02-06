import type {DebugElement, Type} from '@angular/core';
import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_LAST_DAY, TuiDay, TuiValueTransformer} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TUI_DATE_FORMAT, TuiHint, TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TUI_DATE_VALUE_TRANSFORMER} from '@taiga-ui/kit';
import {
    TuiInputDateComponent,
    TuiInputDateModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {TuiNamedDay} from '@taiga-ui/legacy/classes';
import {TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';
import {of} from 'rxjs';

describe('InputDate', () => {
    @Component({
        standalone: true,
        imports: [
            ReactiveFormsModule,
            TuiHint,
            TuiInputDateModule,
            TuiRoot,
            TuiTextfieldControllerModule,
        ],
        template: `
            <tui-root>
                <tui-input-date
                    [formControl]="control"
                    [items]="items"
                    [min]="min"
                    [readOnly]="readOnly"
                    [tuiHintContent]="hintContent"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                    [(ngModel)]="value"
                >
                    Select date
                </tui-input-date>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @Input()
        public value: TuiDay | null = new TuiDay(2017, 2, 1);

        @ViewChild(TuiInputDateComponent)
        public readonly component!: TuiInputDateComponent;

        public control = new FormControl<Date | TuiDay>(new TuiDay(2017, 2, 1));

        public cleaner = false;

        public readOnly = false;

        public min = new TuiDay(1900, 0, 1);

        public labelOutside = false;

        public items: TuiNamedDay[] = [];

        public size: TuiSizeL | TuiSizeS = 'm';

        public hintContent: string | null = 'prompt';
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;
    let inputPO: TuiNativeInputPO;

    const testContext = {
        get pageObject() {
            return pageObject;
        },
        get fixture() {
            return fixture;
        },
        get testComponent() {
            return testComponent;
        },
        get inputPO() {
            return inputPO;
        },
        get prefix() {
            return 'tui-input-date__';
        },
    };

    const initializeEnvironment = async (component: Type<Test> = Test): Promise<void> => {
        fixture = TestBed.createComponent(component);
        fixture.detectChanges();

        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');

        await fixture.whenStable();
    };

    describe('InputDate (base cases when TUI_DATE_FORMAT = DMY)', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({imports: [Test]});
            await TestBed.compileComponents();
            await initializeEnvironment();
        });

        it('sets valid day if date selected via calendar', async () => {
            mouseDownOnTextfield();

            expect(getCalendar()).not.toBeNull();

            const calendarCell = getCalendarCell(14);

            calendarCell?.nativeElement.click();
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('14.03.2017');
        });

        it('if there is min and an initial value and an initial value less than min - keep the initial value', () => {
            testComponent.min = new TuiDay(2023, 5, 17);

            fixture.detectChanges();

            expect(inputPO.value).toBe('01.03.2017');
        });

        describe('Keyboard input', () => {
            it('the passed date is inserted into the field', () => {
                inputPO.sendText('01.03.2017');

                expect(inputPO.value).toBe('01.03.2017');
            });

            it('when entering an incomplete date, leaves it in the field', () => {
                inputPO.sendText('31.12.20');

                expect(inputPO.value).toBe('31.12.20');
            });

            it('when entering an incomplete date, the control value is null', () => {
                inputPO.sendText('31.12.20');

                expect(testComponent.control.value).toBeNull();
            });
        });

        describe('textfield', () => {
            it('do not clear input value if previous internal value is null', async () => {
                testComponent.control.setValue(null);
                fixture.detectChanges();
                inputPO.sendText('10');
                fixture.detectChanges();
                testComponent.control.setValue(null);

                await fixture.whenStable();

                expect(inputPO.nativeElement?.value).toBe('10');
            });

            describe('when mousedown on it', () => {
                describe('unless the field is locked and not read-only', () => {
                    it('opens the calendar', () => {
                        mouseDownOnTextfield();

                        expect(getCalendar()).not.toBeNull();
                    });

                    it('on repeated mousedown will close the calendar', () => {
                        mouseDownOnTextfield();
                        mouseDownOnTextfield();

                        expect(getCalendar()).toBeNull();
                    });

                    describe('if the field is locked', () => {
                        it('the calendar does not open', () => {
                            testComponent.control.disable();
                            fixture.detectChanges();
                            mouseDownOnTextfield();

                            expect(getCalendar()).toBeNull();
                        });
                    });

                    describe('if the readOnly field', () => {
                        it('the calendar does not open', () => {
                            testComponent.readOnly = true;
                            fixture.detectChanges();
                            mouseDownOnTextfield();

                            expect(getCalendar()).toBeNull();
                        });
                    });
                });
            });
        });

        describe('With items', () => {
            beforeEach(async () => {
                testComponent.items = [
                    new TuiNamedDay(
                        new TuiDay(2017, 2, 5),
                        'Current',
                        TuiDay.currentLocal(),
                    ),
                    new TuiNamedDay(
                        TUI_LAST_DAY.append({year: -1}),
                        'Until today',
                        TuiDay.currentLocal(),
                    ),
                ];

                fixture.detectChanges();
                await fixture.whenStable();
            });

            it('when entering item date, input shows named date', async () => {
                inputPO.sendText('05.03.2017');
                await fixture.whenStable();

                expect(inputPO.value).toBe('Current');
            });

            it('when control value updated with item date, input shows named date', async () => {
                testComponent.control.setValue(TUI_LAST_DAY.append({year: -1}));
                fixture.detectChanges();

                await fixture.whenStable();

                expect(inputPO.value).toBe('Until today');
            });

            it('when ngModel value updated with item date, input shows named date', async () => {
                fixture.componentRef.setInput('value', TUI_LAST_DAY.append({year: -1}));
                fixture.detectChanges();

                await fixture.whenStable();

                expect(inputPO.value).toBe('Until today');
            });

            it('when selected item date via calendar, input shows named date', async () => {
                mouseDownOnTextfield();

                expect(getCalendar()).not.toBeNull();

                const calendarCell = getCalendarCell(5);

                calendarCell?.nativeElement.click();

                fixture.detectChanges();
                await fixture.whenStable();

                expect(inputPO.value).toBe('Current');
            });
        });
    });

    describe('InputDate + TUI_DATE_FORMAT = YMD integration', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    NG_EVENT_PLUGINS,
                    {provide: TUI_DATE_FORMAT, useValue: of({mode: 'YMD'})},
                ],
            });
            await TestBed.compileComponents();
            await initializeEnvironment();
        });

        it('accepts yyyy.mm.dd', () => {
            inputPO.sendText('2021.12.23');

            const typedDay = testComponent.control.value as TuiDay;

            expect(inputPO.value).toBe('2021.12.23');
            expect(typedDay.day).toBe(23);
            expect(typedDay.month).toBe(11);
            expect(typedDay.year).toBe(2021);
        });

        it('does not accept mm.dd.yyyy (and set min day if it is less min day)', () => {
            inputPO.sendText('12.23.2021');

            const typedDay = testComponent.control.value as TuiDay;

            expect(inputPO.value).toBe('1900.01.01');
            expect(typedDay.day).toBe(1);
            expect(typedDay.month).toBe(0);
            expect(typedDay.year).toBe(1900);
        });

        it('sets valid day if date selected via calendar', async () => {
            mouseDownOnTextfield();

            expect(getCalendar()).not.toBeNull();

            const calendarCell = getCalendarCell(22);

            calendarCell?.nativeElement.click();
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('2017.03.22');
        });
    });

    describe('InputDate + TUI_DATE_FORMAT = MDY integration', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    NG_EVENT_PLUGINS,
                    {provide: TUI_DATE_FORMAT, useValue: of({mode: 'MDY'})},
                ],
            });
            await TestBed.compileComponents();
            await initializeEnvironment();
        });

        it('accepts mm.dd.yyyy', () => {
            inputPO.sendText('12.23.2021');

            const typedDay = testComponent.control.value as TuiDay;

            expect(inputPO.value).toBe('12.23.2021');
            expect(typedDay.day).toBe(23);
            expect(typedDay.month).toBe(11);
            expect(typedDay.year).toBe(2021);
        });

        it('does not accept yyyy.mm.dd (and set min day if it is less min day)', () => {
            inputPO.sendText('2021.12.23');

            const typedDay = testComponent.control.value as TuiDay;

            expect(inputPO.value).toBe('01.01.1900');
            expect(typedDay.day).toBe(1);
            expect(typedDay.month).toBe(0);
            expect(typedDay.year).toBe(1900);
        });

        it('sets valid day if date selected via calendar', async () => {
            mouseDownOnTextfield();

            expect(getCalendar()).not.toBeNull();

            const calendarCell = getCalendarCell(9);

            calendarCell?.nativeElement.click();
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('03.09.2017');
        });
    });

    describe('InputDate + TUI_DATE_FORMAT="MDY" + TUI_DATE_SEPARATOR ="/" (USA format)', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    NG_EVENT_PLUGINS,
                    {
                        provide: TUI_DATE_FORMAT,
                        useValue: of({mode: 'MDY', separator: '/'}),
                    },
                ],
            });
            await TestBed.compileComponents();
            await initializeEnvironment();
        });

        it('accepts valid mm/dd/yyyy', () => {
            inputPO.sendText('12272021');

            const typedDay = testComponent.control.value as TuiDay;

            expect(inputPO.value).toBe('12/27/2021');
            expect(typedDay.day).toBe(27);
            expect(typedDay.month).toBe(11);
            expect(typedDay.year).toBe(2021);
        });

        it('replaces dots by custom separator', () => {
            inputPO.sendText('05.14.1988');

            const typedDay = testComponent.control.value as TuiDay;

            expect(inputPO.value).toBe('05/14/1988');
            expect(typedDay.day).toBe(14);
            expect(typedDay.month).toBe(4);
            expect(typedDay.year).toBe(1988);
        });
    });

    describe('InputDate + TUI_DATE_VALUE_TRANSFORMER', () => {
        class TestTransformer extends TuiValueTransformer<TuiDay | null, Date | null> {
            public fromControlValue(controlValue: Date | null): TuiDay | null {
                return controlValue && TuiDay.fromLocalNativeDate(controlValue);
            }

            public toControlValue(componentValue: TuiDay | null): Date | null {
                return componentValue?.toLocalNativeDate() || null;
            }
        }

        @Component({
            standalone: true,
            imports: [
                ReactiveFormsModule,
                TuiHint,
                TuiInputDateModule,
                TuiRoot,
                TuiTextfieldControllerModule,
            ],
            template: `
                <tui-root>
                    <tui-input-date
                        [formControl]="control"
                        [min]="min"
                        [readOnly]="readOnly"
                        [tuiHintContent]="hintContent"
                        [tuiTextfieldCleaner]="cleaner"
                        [tuiTextfieldLabelOutside]="labelOutside"
                        [tuiTextfieldSize]="size"
                    >
                        Select date
                    </tui-input-date>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TransformerTest extends Test {
            public override control = new FormControl(new Date(2022, 0, 31));
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test, TransformerTest],
                providers: [
                    NG_EVENT_PLUGINS,
                    {
                        provide: TUI_DATE_VALUE_TRANSFORMER,
                        useClass: TestTransformer,
                    },
                ],
            });
            await TestBed.compileComponents();
            await initializeEnvironment(TransformerTest);
        });

        it('correctly transforms initial value', () => {
            expect(inputPO.value).toBe('31.01.2022');
            expect(testComponent.control.value).toEqual(new Date(2022, 0, 31));
        });

        it('transforms typed value', () => {
            inputPO.sendText('09011905');

            expect(inputPO.value).toBe('09.01.1905');
            expect(testComponent.control.value).toEqual(new Date(1905, 0, 9));
        });

        it('transforms min day as output (if typed day is less than min day)', () => {
            inputPO.sendText('19.02.1861');

            expect(inputPO.value).toBe('01.01.1900');
            expect(testComponent.control.value).toEqual(new Date(1900, 0, 1));
        });

        it('transforms value which was selected via calendar', async () => {
            mouseDownOnTextfield();

            expect(getCalendar()).not.toBeNull();

            const calendarCell = getCalendarCell(20);

            calendarCell?.nativeElement.click();
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('20.01.2022');
            expect(testComponent.control.value).toEqual(new Date(2022, 0, 20));
        });

        it('transforms value which was programmatically patched', async () => {
            testComponent.control.patchValue(new Date(1991, 11, 26));

            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('26.12.1991');
            expect(testComponent.control.value).toEqual(new Date(1991, 11, 26));
        });
    });

    function mouseDownOnTextfield(): void {
        getTextfield()!.nativeElement.dispatchEvent(
            new MouseEvent('mousedown', {bubbles: true}),
        );
        getTextfield()!.nativeElement.click();
        fixture.detectChanges();
    }

    function getTextfield(): DebugElement | null {
        return pageObject.getByAutomationId('tui-input-date-range__textfield');
    }

    function getCalendar(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}calendar`);
    }

    function getCalendarCell(dayNumber: number): DebugElement | null {
        return (
            pageObject
                .getAllByAutomationId('tui-calendar-sheet__cell')
                .find(
                    (el) => Number(el.nativeElement.textContent.trim()) === dayNumber,
                ) || null
        );
    }
});
