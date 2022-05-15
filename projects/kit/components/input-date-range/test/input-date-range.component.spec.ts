import {Component, DebugElement, Optional, Type, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    RANGE_SEPARATOR_CHAR,
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_LAST_DAY,
    TuiControlValueTransformer,
    TuiDay,
    TuiDayRange,
} from '@taiga-ui/cdk';
import {TuiRootModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TUI_DATE_RANGE_VALUE_TRANSFORMER,
    TUI_DATE_VALUE_TRANSFORMER,
} from '@taiga-ui/kit/tokens';
import {configureTestSuite, NativeInputPO, PageObject} from '@taiga-ui/testing';

import {TuiDayRangePeriod} from '../../../classes/day-range-period';
import {TuiInputDateRangeComponent} from '../input-date-range.component';
import {TuiInputDateRangeModule} from '../input-date-range.module';

@Component({
    template: `
        <tui-root>
            <tui-input-date-range
                [formControl]="control"
                [items]="items"
                [tuiTextfieldCleaner]="cleaner"
                [readOnly]="readOnly"
                [min]="min"
                [max]="max"
            ></tui-input-date-range>
        </tui-root>
    `,
})
class TestComponent {
    @ViewChild(TuiInputDateRangeComponent)
    readonly component!: TuiInputDateRangeComponent;

    readonly control = new FormControl(
        new TuiDayRange(
            TuiDay.currentLocal().append({day: -2}),
            TuiDay.currentLocal().append({day: -2}),
        ),
    );

    cleaner = false;

    readOnly = false;

    items: readonly TuiDayRangePeriod[] = [];

    min = new TuiDay(1900, 0, 1);

    max = TUI_LAST_DAY;
}

let fixture: ComponentFixture<TestComponent>;
let testComponent: TestComponent;
let pageObject: PageObject<TestComponent>;
let component: TuiInputDateRangeComponent;
let inputPO: NativeInputPO;

const DEFAULT_TESTING_MODULE_META = {
    imports: [
        TuiInputDateRangeModule,
        TuiRootModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TestComponent],
};

const initializeEnvironment = async (
    testComponentClass: Type<TestComponent> = TestComponent,
): Promise<void> => {
    fixture = TestBed.createComponent(testComponentClass);
    pageObject = new PageObject(fixture);
    testComponent = fixture.componentInstance;
    fixture.detectChanges();
    component = testComponent.component;
    inputPO = new NativeInputPO(fixture, 'tui-primitive-textfield__native-input');

    fixture.detectChanges();
    await fixture.whenStable();
};

describe('InputDateRangeComponent', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule(DEFAULT_TESTING_MODULE_META);
    });

    beforeEach(async () => {
        await initializeEnvironment();
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

        it('If you enter an invalid date, the value is adjusted', () => {
            inputPO.sendText('32.12.2012');

            expect(inputPO.value).toBe('31.12.2012');
        });

        it('When entering the first date, the control value is null', () => {
            inputPO.sendText('31.12.2012');

            expect(testComponent.control.value).toBeNull();
        });

        it('When entering two dates, the control value is updated', () => {
            inputPO.sendText(`15.07.2000${RANGE_SEPARATOR_CHAR}15.07.2020`);

            expect(testComponent.control.value.getFormattedDayRange('DMY', '.')).toBe(
                `15.07.2000${RANGE_SEPARATOR_CHAR}15.07.2020`,
            );
        });

        it('When entering two dates, the value is truncated by min / max is updated', () => {
            testComponent.min = new TuiDay(2001, 6, 15);
            testComponent.max = new TuiDay(2019, 6, 15);
            fixture.detectChanges();
            inputPO.sendText(`15.07.2000${RANGE_SEPARATOR_CHAR}15.07.2020`);

            expect(testComponent.control.value.getFormattedDayRange('DMY', '.')).toBe(
                `15.07.2001${RANGE_SEPARATOR_CHAR}15.07.2019`,
            );
        });

        it('empty value opens dropdown', () => {
            inputPO.sendText('');
            fixture.detectChanges();
            expect(component.open).toEqual(true);
        });
    });
});

describe('InputDateRangeComponent + TUI_DATE_FORMAT="MDY" + TUI_DATE_SEPARATOR="/"', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule({
            ...DEFAULT_TESTING_MODULE_META,
            providers: [
                {provide: TUI_DATE_FORMAT, useValue: 'MDY'},
                {provide: TUI_DATE_SEPARATOR, useValue: '/'},
            ],
        });
    });

    beforeEach(async () => {
        await initializeEnvironment();
    });

    it('accepts dd.mm.yyyy format', () => {
        inputPO.sendTextAndBlur('1201202102142022');

        expect(inputPO.value).toBe('12/01/2021 – 02/14/2022');
    });

    it('corrects date of month > 12 or day > 31', () => {
        inputPO.sendTextAndBlur('9999200099992010');

        expect(inputPO.value).toBe('12/31/2000 – 12/31/2010');
    });

    it('correctly sets stringify selected range via calendar', async () => {
        inputPO.sendTextAndBlur('12/01/2021-02/14/2022');

        clickOnTextfield();

        const [leftCalendar, rightCalendar] = getCalendars();

        expect(leftCalendar).toBeTruthy();
        expect(rightCalendar).toBeTruthy();

        getCalendarCell(leftCalendar, 16)?.nativeElement?.click();
        getCalendarCell(rightCalendar, 27)?.nativeElement?.click();

        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('12/16/2021 – 02/27/2022');
    });
});

describe('InputDateRangeComponent + TUI_DATE_FORMAT="YMD" + TUI_DATE_SEPARATOR="-"', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule({
            ...DEFAULT_TESTING_MODULE_META,
            providers: [
                {provide: TUI_DATE_FORMAT, useValue: 'YMD'},
                {provide: TUI_DATE_SEPARATOR, useValue: '-'},
            ],
        });
    });

    beforeEach(async () => {
        await initializeEnvironment();
    });

    it('accepts dd.mm.yyyy format', () => {
        inputPO.sendTextAndBlur('2021120120220214');

        expect(inputPO.value).toBe('2021-12-01 – 2022-02-14');
    });

    it('corrects date of month > 12 or day > 31', () => {
        inputPO.sendTextAndBlur('2000999920109999');

        expect(inputPO.value).toBe('2000-12-31 – 2010-12-31');
    });

    it('correctly sets stringify selected range via calendar', async () => {
        inputPO.sendTextAndBlur('2021-12-01-2022-02-14');

        clickOnTextfield();

        const [leftCalendar, rightCalendar] = getCalendars();

        expect(leftCalendar).toBeTruthy();
        expect(rightCalendar).toBeTruthy();

        getCalendarCell(leftCalendar, 12)?.nativeElement?.click();
        getCalendarCell(rightCalendar, 18)?.nativeElement?.click();

        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('2021-12-12 – 2022-02-18');
    });
});

describe('InputDateRangeComponent + TUI_DATE_RANGE_VALUE_TRANSFORMER', () => {
    class TestDateTransformer
        implements TuiControlValueTransformer<TuiDay | null, Date | null>
    {
        fromControlValue(controlValue: Date | null): TuiDay | null {
            return controlValue && TuiDay.fromLocalNativeDate(controlValue);
        }

        toControlValue(componentValue: TuiDay | null): Date | null {
            return componentValue && componentValue.toLocalNativeDate();
        }
    }

    class TestDateRangeTransformer
        implements TuiControlValueTransformer<TuiDayRange | null, [Date, Date] | null>
    {
        constructor(
            private readonly dateTransformer: TuiControlValueTransformer<
                TuiDay | null,
                Date | null
            >,
        ) {}

        fromControlValue(controlValue: [Date, Date] | null): TuiDayRange | null {
            const [transformedFrom, transformedTo] = controlValue || [null, null];
            const from =
                transformedFrom && this.dateTransformer.fromControlValue(transformedFrom);
            const to =
                transformedTo && this.dateTransformer.fromControlValue(transformedTo);

            return from && to && new TuiDayRange(from, to);
        }

        toControlValue(componentValue: TuiDayRange | null): [Date, Date] | null {
            const from =
                componentValue &&
                this.dateTransformer.toControlValue(componentValue.from);
            const to =
                componentValue && this.dateTransformer.toControlValue(componentValue.to);

            return from && to && [from, to];
        }
    }

    function getExampleDateRangeTransformer(
        dateTransformer: TestDateTransformer | null,
    ): TuiControlValueTransformer<TuiDayRange | null, [Date, Date] | null> | null {
        if (!dateTransformer) {
            return null;
        }

        return new TestDateRangeTransformer(dateTransformer);
    }

    class TransformerTestComponent extends TestComponent {
        control = new FormControl([new Date(2022, 0, 31), new Date(2022, 5, 14)]);
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            ...DEFAULT_TESTING_MODULE_META,
            declarations: [TransformerTestComponent],
            providers: [
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
    });

    beforeEach(async () => {
        await initializeEnvironment(TransformerTestComponent);
    });

    it('correctly transforms initial value', () => {
        expect(inputPO.value).toBe('31.01.2022 – 14.06.2022');
        expect(testComponent.control.value).toEqual([
            new Date(2022, 0, 31),
            new Date(2022, 5, 14),
        ]);
    });

    it('transforms typed value', () => {
        inputPO.sendText('20022000-17062020');

        expect(inputPO.value).toBe('20.02.2000 – 17.06.2020');
        expect(testComponent.control.value).toEqual([
            new Date(2000, 1, 20),
            new Date(2020, 5, 17),
        ]);
    });

    it('transforms min day as output (if typed day is less than min day)', () => {
        inputPO.sendText('19.02.1861-10.03.1995');

        expect(inputPO.value).toBe('01.01.1900 – 10.03.1995');
        expect(testComponent.control.value).toEqual([
            new Date(1900, 0, 1),
            new Date(1995, 2, 10),
        ]);
    });

    it('transforms value which was selected via calendar', async () => {
        inputPO.sendTextAndBlur('01.09.2021-01.11.2022');

        clickOnTextfield();

        const [leftCalendar, rightCalendar] = getCalendars();

        expect(leftCalendar).toBeTruthy();
        expect(rightCalendar).toBeTruthy();

        getCalendarCell(leftCalendar, 12)?.nativeElement?.click();
        getCalendarCell(rightCalendar, 18)?.nativeElement?.click();

        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('12.09.2021 – 18.11.2022');
    });

    it('transforms value which was programmatically patched', () => {
        testComponent.control.patchValue([
            new Date(1922, 11, 30),
            new Date(1991, 11, 26),
        ]);

        expect(inputPO.value).toBe('30.12.1922 – 26.12.1991');
        expect(testComponent.control.value).toEqual([
            new Date(1922, 11, 30),
            new Date(1991, 11, 26),
        ]);
    });
});

function clickOnTextfield(): void {
    getTextfield()!.nativeElement.click();
    fixture.detectChanges();
}

function getCalendarsWrapper(): DebugElement | null {
    return pageObject.getByAutomationId('tui-calendar-range__calendars');
}

function getTextfield(): DebugElement | null {
    return pageObject.getByAutomationId('tui-input-date-range__textfield');
}

function getCalendars(): DebugElement[] {
    const calendarsWrapper = getCalendarsWrapper();

    if (!calendarsWrapper) return [];

    return pageObject.getAllByAutomationId('tui-calendar__calendar', calendarsWrapper);
}

function getCalendarCell(
    calendarEl: DebugElement,
    dayNumber: number,
): DebugElement | null {
    return (
        pageObject
            .getAllByAutomationId('tui-primitive-calendar__cell', calendarEl)
            .find(el => Number(el.nativeElement.innerText.trim()) === dayNumber) || null
    );
}
