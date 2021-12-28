import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    RANGE_SEPARATOR_CHAR,
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_LAST_DAY,
    TuiDay,
    TuiDayRange,
} from '@taiga-ui/cdk';
import {TuiRootModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';

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
    readonly component: TuiInputDateRangeComponent;

    readonly control = new FormControl(
        new TuiDayRange(
            TuiDay.currentLocal().append({day: -2}),
            TuiDay.currentLocal().append({day: -2}),
        ),
    );

    cleaner = false;

    readOnly = false;

    items: ReadonlyArray<TuiDayRangePeriod> = [];

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

const initializeEnvironment = async () => {
    fixture = TestBed.createComponent(TestComponent);
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
        beforeEach(done => {
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                done();
            });
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

function clickOnTextfield() {
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
            .find(el => +el.nativeElement.innerText.trim() === dayNumber) || null
    );
}
