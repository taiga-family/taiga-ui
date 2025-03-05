import type {DebugElement, Type} from '@angular/core';
import {ChangeDetectionStrategy, Component, Optional, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {
    RANGE_SEPARATOR_CHAR,
    TUI_LAST_DAY,
    TuiDay,
    TuiDayRange,
    TuiValueTransformer,
} from '@taiga-ui/cdk';
import {TUI_DATE_FORMAT, TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {
    TUI_DATE_RANGE_VALUE_TRANSFORMER,
    TUI_DATE_VALUE_TRANSFORMER,
    tuiCreateDefaultDayRangePeriods,
    TuiDayRangePeriod,
} from '@taiga-ui/kit';
import {
    TuiInputDateRangeComponent,
    TuiInputDateRangeModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';
import {of} from 'rxjs';

describe('InputDateRangeComponent', () => {
    @Component({
        standalone: true,
        imports: [
            FormsModule,
            ReactiveFormsModule,
            TuiInputDateRangeModule,
            TuiRoot,
            TuiTextfieldControllerModule,
        ],
        template: `
            <tui-root>
                <tui-input-date-range
                    [formControl]="control"
                    [items]="items"
                    [max]="max"
                    [min]="min"
                    [readOnly]="readOnly"
                    [tuiTextfieldCleaner]="cleaner"
                    [(ngModel)]="value"
                ></tui-input-date-range>
            </tui-root>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        @ViewChild(TuiInputDateRangeComponent)
        public readonly component!: TuiInputDateRangeComponent;

        public readonly control = new FormControl<TuiDayRange | [Date, Date] | null>(
            new TuiDayRange(
                TuiDay.currentLocal().append({day: -2}),
                TuiDay.currentLocal().append({day: -2}),
            ),
        );

        public value: TuiDayRange | [Date, Date] | null = new TuiDayRange(
            TuiDay.currentLocal().append({day: -2}),
            TuiDay.currentLocal().append({day: -2}),
        );

        public cleaner = false;

        public readOnly = false;

        public items: readonly TuiDayRangePeriod[] = [];

        public min = new TuiDay(1900, 0, 1);

        public max = TUI_LAST_DAY;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;
    let component: TuiInputDateRangeComponent;
    let inputPO: TuiNativeInputPO;

    function initializeEnvironment(type: Type<Test> = Test): void {
        fixture = TestBed.createComponent(type);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');
        fixture.detectChanges();
    }

    describe('Default', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({imports: [Test]});
            await TestBed.compileComponents();
            initializeEnvironment();
        });

        it('when switching between ranges with same date, displays appropriate input value', async () => {
            const today = TuiDay.currentLocal();
            const previousMonth = today.append({month: -1});
            const first = '1';
            const second = '2';

            testComponent.items = [
                new TuiDayRangePeriod(new TuiDayRange(previousMonth, today), first),
                new TuiDayRangePeriod(new TuiDayRange(previousMonth, today), second),
            ];
            fixture.detectChanges();

            clickOnTextfield();

            getCalendarItems()[1]?.nativeElement.click();
            fixture.detectChanges();

            await fixture.whenStable();

            expect(inputPO.value).toBe(second);
        });

        describe('Click on the input field', () => {
            it('opens the calendar', () => {
                clickOnTextfield();

                expect(getCalendarsWrapper()).not.toBeNull();
            });

            it('close the calendar when clicked again', () => {
                clickOnTextfield();
                clickOnTextfield();

                expect(getCalendarsWrapper()).toBeNull();
            });
        });

        describe('dropdown calendar', () => {
            let y2000m0d1: TuiDay;
            let y2000m0d2: TuiDay;

            beforeEach(() => {
                y2000m0d1 = new TuiDay(2000, 0, 1);
                y2000m0d2 = new TuiDay(2000, 0, 2);
                component.onClick();
                fixture.detectChanges();
            });

            describe('closes when selected', () => {
                it('same date', () => {
                    component.onRangeChange(new TuiDayRange(y2000m0d1, y2000m0d1));
                    fixture.detectChanges();

                    expect(getCalendarsWrapper()).toBeNull();
                });

                it('another date', () => {
                    component.onRangeChange(new TuiDayRange(y2000m0d2, y2000m0d2));
                    fixture.detectChanges();

                    expect(getCalendarsWrapper()).toBeNull();
                });
            });
        });

        describe('Keyboard input', () => {
            beforeEach(async () => {
                await fixture.whenStable();
                fixture.detectChanges();
            });

            it('when entering the first date, the control value is null', () => {
                inputPO.sendText('31.12.2012');

                expect(testComponent.control.value).toBeNull();
            });

            it('when entering two dates, the control value is updated', () => {
                inputPO.sendText(`15.07.2000${RANGE_SEPARATOR_CHAR}15.07.2020`);

                expect(
                    (
                        testComponent.control.value as TuiDayRange | null
                    )?.getFormattedDayRange('DMY', '.'),
                ).toBe(`15.07.2000${RANGE_SEPARATOR_CHAR}15.07.2020`);
            });

            it('when entering two dates, the value is truncated by min / max is updated', () => {
                testComponent.min = new TuiDay(2001, 6, 15);
                testComponent.max = new TuiDay(2019, 6, 15);
                fixture.detectChanges();
                inputPO.sendText(`15.07.2000${RANGE_SEPARATOR_CHAR}15.07.2020`);

                expect(
                    (
                        testComponent.control.value as TuiDayRange | null
                    )?.getFormattedDayRange('DMY', '.'),
                ).toBe(`15.07.2001${RANGE_SEPARATOR_CHAR}15.07.2019`);
            });

            it('empty value opens dropdown', () => {
                inputPO.sendText('');
                fixture.detectChanges();

                expect(component.open).toBe(true);
            });
        });

        describe('With items', () => {
            beforeEach(() => {
                testComponent.items = tuiCreateDefaultDayRangePeriods();
            });

            afterAll(() => {
                jest.useRealTimers();
            });

            it('when entering item date, input shows named date', async () => {
                const today = TuiDay.currentLocal();

                inputPO.sendText(
                    `${today.toString()}${RANGE_SEPARATOR_CHAR}${today.toString()}`,
                );

                await fixture.whenStable();

                expect(inputPO.value).toBe('Today');
            });

            it('when control value updated with item date, input shows named date', async () => {
                const today = TuiDay.currentLocal();

                testComponent.control.setValue(new TuiDayRange(today, today));
                fixture.detectChanges();

                await fixture.whenStable();

                expect(inputPO.value).toBe('Today');
            });

            it('when ngModel value updated with item date, input shows named date', async () => {
                const today = TuiDay.currentLocal();

                testComponent.value = new TuiDayRange(today, today);
                fixture.detectChanges();

                await fixture.whenStable();

                expect(inputPO.value).toBe('Today');
            });

            it('when selected item date via calendar, input shows named date', async () => {
                const todayDay = TuiDay.currentLocal().day;

                inputPO.sendText('');

                const [leftCalendar] = getCalendars();

                expect(leftCalendar).toBeTruthy();

                if (leftCalendar) {
                    getCalendarCell(leftCalendar, todayDay)?.nativeElement?.click();
                    getCalendarCell(leftCalendar, todayDay)?.nativeElement?.click();
                }

                fixture.detectChanges();

                await fixture.whenStable();

                expect(inputPO.value).toBe('Today');
            });
        });
    });

    describe('InputDateRangeComponent + TUI_DATE_FORMAT="MDY" + TUI_DATE_SEPARATOR="/"', () => {
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
            initializeEnvironment();
        });

        it('accepts dd.mm.yyyy format', () => {
            inputPO.sendTextAndBlur('1201202102142022');

            expect(inputPO.value).toBe('12/01/2021 – 02/14/2022');
        });

        it('correctly sets stringify selected range via calendar', async () => {
            inputPO.sendText('12/01/2021-02/14/2022');
            /**
             * TODO
             * Uncomment me to see [TypeError: Cannot read properties of undefined (reading 'addEventListener')]
             * ___
             * Stacktrace says that error happens inside `TUI_ACTIVE_ELEMENT`.
             * Utility `tuiGetDocumentOrShadowRoot` returns `undefined`.
             */
            // inputPO.blur();

            await fixture.whenStable();

            clickOnTextfield();

            const [leftCalendar, rightCalendar] = getCalendars();

            expect(leftCalendar).toBeTruthy();
            expect(rightCalendar).toBeTruthy();

            if (leftCalendar) {
                getCalendarCell(leftCalendar, 16)?.nativeElement?.click();
            }

            if (rightCalendar) {
                getCalendarCell(rightCalendar, 27)?.nativeElement?.click();
            }

            fixture.detectChanges();

            await fixture.whenStable();

            expect(inputPO.value).toBe('12/16/2021 – 01/27/2022');
        });
    });

    describe('InputDateRangeComponent + TUI_DATE_FORMAT="YMD" + TUI_DATE_SEPARATOR="-"', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    NG_EVENT_PLUGINS,
                    {
                        provide: TUI_DATE_FORMAT,
                        useValue: of({mode: 'YMD', separator: '-'}),
                    },
                ],
            });
            await TestBed.compileComponents();
            initializeEnvironment();
        });

        it('accepts dd.mm.yyyy format', () => {
            inputPO.sendTextAndBlur('2021120120220214');

            expect(inputPO.value).toBe('2021-12-01 – 2022-02-14');
        });

        it('correctly sets stringify selected range via calendar', () => {
            fixture.autoDetectChanges();

            inputPO.sendTextAndBlur('2021-12-01-2022-02-14');

            clickOnTextfield();

            const [leftCalendar, rightCalendar] = getCalendars();

            expect(leftCalendar).toBeTruthy();
            expect(rightCalendar).toBeTruthy();

            if (leftCalendar) {
                getCalendarCell(leftCalendar, 12)?.nativeElement?.click();
            }

            if (rightCalendar) {
                getCalendarCell(rightCalendar, 18)?.nativeElement?.click();
            }

            fixture.detectChanges();

            expect(inputPO.value).toBe('2021-12-12 – 2022-01-18');
        });
    });

    describe('InputDateRangeComponent + TUI_DATE_RANGE_VALUE_TRANSFORMER', () => {
        class TestDateTransformer extends TuiValueTransformer<
            TuiDay | null,
            Date | null
        > {
            public fromControlValue(controlValue: Date | null): TuiDay | null {
                return controlValue && TuiDay.fromLocalNativeDate(controlValue);
            }

            public toControlValue(componentValue: TuiDay | null): Date | null {
                return componentValue?.toLocalNativeDate() || null;
            }
        }

        class TestDateRangeTransformer extends TuiValueTransformer<
            TuiDayRange | null,
            [Date, Date] | null
        > {
            constructor(
                private readonly dateTransformer: TuiValueTransformer<
                    TuiDay | null,
                    Date | null
                >,
            ) {
                super();
            }

            public fromControlValue(
                controlValue: [Date, Date] | null,
            ): TuiDayRange | null {
                const [transformedFrom, transformedTo] = controlValue || [null, null];
                const from =
                    transformedFrom &&
                    this.dateTransformer.fromControlValue(transformedFrom);
                const to =
                    transformedTo && this.dateTransformer.fromControlValue(transformedTo);

                return from && to && new TuiDayRange(from, to);
            }

            public toControlValue(
                componentValue: TuiDayRange | null,
            ): [Date, Date] | null {
                const from =
                    componentValue &&
                    this.dateTransformer.toControlValue(componentValue.from);
                const to =
                    componentValue &&
                    this.dateTransformer.toControlValue(componentValue.to);

                return from && to && [from, to];
            }
        }

        function getExampleDateRangeTransformer(
            dateTransformer: TestDateTransformer | null,
        ): TuiValueTransformer<TuiDayRange | null, [Date, Date] | null> | null {
            return dateTransformer && new TestDateRangeTransformer(dateTransformer);
        }

        @Component({
            standalone: true,
            imports: [
                ReactiveFormsModule,
                TuiInputDateRangeModule,
                TuiRoot,
                TuiTextfieldControllerModule,
            ],
            template: `
                <tui-root>
                    <tui-input-date-range
                        [formControl]="control"
                        [items]="items"
                        [max]="max"
                        [min]="min"
                        [readOnly]="readOnly"
                        [tuiTextfieldCleaner]="cleaner"
                    ></tui-input-date-range>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TransformerTest extends Test {
            public override control = new FormControl<TuiDayRange | [Date, Date] | null>([
                new Date(2022, 0, 31),
                new Date(2022, 5, 14),
            ]);
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test, TransformerTest],
                providers: [
                    NG_EVENT_PLUGINS,
                    {
                        provide: TUI_DATE_VALUE_TRANSFORMER,
                        useClass: TestDateTransformer,
                    },
                    {
                        provide: TUI_DATE_RANGE_VALUE_TRANSFORMER,
                        deps: [[new Optional(), TUI_DATE_VALUE_TRANSFORMER]],
                        useFactory: getExampleDateRangeTransformer,
                    },
                ],
            });
            await TestBed.compileComponents();
            initializeEnvironment(TransformerTest);
        });

        it('correctly transforms initial value', () => {
            expect(inputPO.value).toBe('31.01.2022 – 14.06.2022');
            expect(testComponent.control.value).toEqual([
                new Date(2022, 0, 31),
                new Date(2022, 5, 14),
            ]);
        });

        it('transforms typed value', () => {
            inputPO.sendText('20022000-17062020');

            expect(inputPO.value).toBe('20.02.2000 – 17.06.2020');
            expect(testComponent.control.value).toEqual([
                new Date(2000, 1, 20),
                new Date(2020, 5, 17),
            ]);
        });

        it('transforms min day as output (if typed day is less than min day)', () => {
            inputPO.sendText('19.02.1861-10.03.1995');

            expect(inputPO.value).toBe('01.01.1900 – 10.03.1995');
            expect(testComponent.control.value).toEqual([
                new Date(1900, 0, 1),
                new Date(1995, 2, 10),
            ]);
        });

        it('transforms value which was selected via calendar', () => {
            fixture.autoDetectChanges();

            inputPO.sendTextAndBlur('01.09.2021-01.11.2022');

            clickOnTextfield();

            const [leftCalendar, rightCalendar] = getCalendars();

            expect(leftCalendar).toBeTruthy();
            expect(rightCalendar).toBeTruthy();

            if (leftCalendar) {
                getCalendarCell(leftCalendar, 12)?.nativeElement?.click();
            }

            if (rightCalendar) {
                getCalendarCell(rightCalendar, 18)?.nativeElement?.click();
            }

            fixture.detectChanges();

            expect(inputPO.value).toBe('12.09.2021 – 18.10.2021');
        });

        it('transforms value which was programmatically patched', async () => {
            const newDateRange = [new Date(1922, 11, 30), new Date(1991, 11, 26)] as [
                Date,
                Date,
            ];

            testComponent.control.patchValue(newDateRange);

            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('30.12.1922 – 26.12.1991');
            expect(testComponent.control.value).toEqual(newDateRange);
        });
    });

    function clickOnTextfield(): void {
        getTextfield()?.nativeElement.click();
        fixture.detectChanges();
    }

    function getCalendarsWrapper(): DebugElement | null {
        return fixture.debugElement.query(By.css('tui-calendar-range'));
    }

    function getCalendarItems(): DebugElement[] {
        return pageObject.getAllByAutomationId('tui-calendar-range__menu__item');
    }

    function getTextfield(): DebugElement | null {
        return pageObject.getByAutomationId('tui-input-date-range__textfield');
    }

    function getCalendars(): DebugElement[] {
        return getCalendarsWrapper()?.queryAll(By.css('tui-calendar')) || [];
    }

    function getCalendarCell(
        calendarEl: DebugElement,
        dayNumber: number,
    ): DebugElement | null {
        return (
            pageObject
                .getAllByAutomationId('tui-calendar-sheet__cell', calendarEl)
                .find(
                    (el) => Number(el.nativeElement.textContent.trim()) === dayNumber,
                ) || null
        );
    }
});
