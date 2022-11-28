import {Component, DebugElement, Type, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiControlValueTransformer,
    TuiDay,
    TuiTime,
} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';
import {TUI_DATE_TIME_VALUE_TRANSFORMER} from '@taiga-ui/kit';
import {
    TuiInputDateTimeComponent,
    TuiInputDateTimeModule,
} from '@taiga-ui/kit/components';
import {configureTestSuite, TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';

describe(`InputDateTime`, () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-date-time
                    [formControl]="control"
                    [min]="min"
                    [max]="max"
                ></tui-input-date-time>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputDateTimeComponent)
        dateTimeComponent!: TuiInputDateTimeComponent;

        readonly control = new FormControl([new TuiDay(2021, 6, 12), null]);

        min: TuiDay | [TuiDay, TuiTime] = TUI_FIRST_DAY;
        max: TuiDay | [TuiDay, TuiTime] = TUI_LAST_DAY;
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let inputPO: TuiNativeInputPO;
    let pageObject: TuiPageObject<TestComponent>;

    const testContext = {
        get prefix() {
            return `tui-input-date-time__`;
        },
        get calendarCellAutomationId() {
            return `tui-primitive-calendar__cell`;
        },
        get nativeInputAutomationId() {
            return `tui-primitive-textfield__native-input`;
        },
    };

    const defaultTestingModuleMeta = {
        imports: [
            TuiRootModule,
            ReactiveFormsModule,
            NoopAnimationsModule,
            TuiInputDateTimeModule,
        ],
        declarations: [TestComponent],
    };

    function initializeEnvironment(
        componentClass: Type<TestComponent> = TestComponent,
    ): void {
        fixture = TestBed.createComponent(componentClass);
        component = fixture.componentInstance;
        pageObject = new TuiPageObject(fixture);
        inputPO = new TuiNativeInputPO(fixture, testContext.nativeInputAutomationId);
        fixture.autoDetectChanges();
    }

    describe(`Default`, () => {
        configureTestSuite(() =>
            TestBed.configureTestingModule(defaultTestingModuleMeta),
        );

        beforeEach(() => initializeEnvironment());

        it(`displays initial value`, () => {
            expect(inputPO.value).toBe(`12.07.2021`);
        });

        it(`does not clear not finished time string on the first blur`, () => {
            inputPO.sendText(`12.07.2021 1`);
            inputPO.blur();

            expect(inputPO.value).toBe(`12.07.2021, 1`);
        });

        it(`does not clear not finished time string on the second blur`, () => {
            inputPO.focus();
            inputPO.blur();

            inputPO.sendText(`12.07.20211`);
            inputPO.blur();

            expect(inputPO.value).toBe(`12.07.2021, 1`);
        });

        it(`does not clear all date string if 1 char of date was erased`, () => {
            inputPO.sendText(`14.07.2021`);

            expect(inputPO.value).toBe(`14.07.2021`);

            inputPO.sendText(`14.07.202`);

            expect(inputPO.value).toBe(`14.07.202`);
        });

        it(`keeps not finished time string if date was changed using calendar`, () => {
            const timeString = `1`;

            inputPO.sendText(`05.07.2021${timeString}`);
            mouseDownOnTextfield();

            expect(inputPO.value).toBe(`05.07.2021, ${timeString}`);
            expect(getCalendar()).not.toBeFalsy();
            clickOnCellInsideCalendar(27);

            expect(inputPO.value).toBe(`27.07.2021, ${timeString}`);
        });

        it(`min day works`, () => {
            component.min = TuiDay.normalizeParse(`13.08.2021`);
            fixture.detectChanges();
            inputPO.sendText(`12.08.2021`);

            expect(inputPO.value).toBe(`13.08.2021`);
        });

        it(`max day works`, () => {
            component.max = TuiDay.normalizeParse(`13.08.2021`);
            fixture.detectChanges();
            inputPO.sendText(`14.08.2021`);

            expect(inputPO.value).toBe(`13.08.2021`);
        });

        it(`min day + time work`, () => {
            component.min = [
                TuiDay.normalizeParse(`13.08.2021`),
                TuiTime.fromString(`12:00`),
            ];
            fixture.detectChanges();
            inputPO.sendText(`13.08.2021, 10:00`);

            expect(inputPO.value).toBe(`13.08.2021, 12:00`);
        });

        it(`min day + time work within min day only`, () => {
            component.min = [
                TuiDay.normalizeParse(`13.08.2021`),
                TuiTime.fromString(`12:00`),
            ];
            fixture.detectChanges();
            inputPO.sendText(`14.08.2021 10:00`);

            expect(inputPO.value).toBe(`14.08.2021, 10:00`);
        });

        it(`max day + time work`, () => {
            component.max = [
                TuiDay.normalizeParse(`13.08.2021`),
                TuiTime.fromString(`12:00`),
            ];
            fixture.detectChanges();
            inputPO.sendText(`13.08.2021, 14:00`);

            expect(inputPO.value).toBe(`13.08.2021, 12:00`);
        });

        it(`max day + time work within max day only`, () => {
            component.max = [
                TuiDay.normalizeParse(`13.08.2021`),
                TuiTime.fromString(`12:00`),
            ];
            fixture.detectChanges();
            inputPO.sendText(`12.08.2021, 14:00`);

            expect(inputPO.value).toBe(`12.08.2021, 14:00`);
        });

        it(`keeps finished time string if date was changed using calendar`, () => {
            const time = `18:00`;
            const timeRaw = time.replace(`:`, ``);

            inputPO.sendText(`14.07.2021${timeRaw}`);
            mouseDownOnTextfield();

            expect(inputPO.value).toBe(`14.07.2021, ${time}`);
            expect(getCalendar()).not.toBeFalsy();
            clickOnCellInsideCalendar(10);

            expect(inputPO.value).toBe(`10.07.2021, ${time}`);
        });

        it(`changes time if max day was selected (via calendar) and time is more than max time now`, () => {
            const maxDay = TuiDay.normalizeParse(`15.08.2021`);
            const maxTime = TuiTime.fromString(`16:20`);

            const maxDateString = maxDay.toString();
            const dayBeforeMaxString = maxDay.append({day: -1}).toString();

            const maxTimeString = maxTime.toString();
            const timeAfterMaxString = maxTime.shift({hours: 3}).toString();

            component.max = [maxDay, maxTime];
            fixture.detectChanges();

            inputPO.sendText(
                `${dayBeforeMaxString}${timeAfterMaxString.replace(`:`, ``)}`,
            );
            mouseDownOnTextfield();

            clickOnCellInsideCalendar(maxDay.day);

            expect(inputPO.value).toBe(`${maxDateString}, ${maxTimeString}`);
        });

        it(`empty value opens dropdown`, () => {
            inputPO.sendText(``);
            fixture.detectChanges();
            expect(component.dateTimeComponent.open).toEqual(true);
        });
    });

    describe(`InputDateTime + TUI_DATE_FORMAT="DMY" + TUI_DATE_SEPARATOR="/"`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                ...defaultTestingModuleMeta,
                providers: [
                    {provide: TUI_DATE_FORMAT, useValue: `MDY`},
                    {provide: TUI_DATE_SEPARATOR, useValue: `/`},
                ],
            });
        });

        beforeEach(() => initializeEnvironment());

        it(`displays correctly initial value`, () => {
            expect(inputPO.value).toBe(`07/12/2021`);
        });

        it(`corrects date if month more than 12`, () => {
            inputPO.sendTextAndBlur(`151420071830`);
            expect(inputPO.value).toBe(`12/14/2007, 18:30`);
        });

        it(`corrects date if day more than 31`, () => {
            inputPO.sendTextAndBlur(`153320071642`);
            expect(inputPO.value).toBe(`12/31/2007, 16:42`);
        });

        it(`does not accept another separator`, () => {
            inputPO.sendTextAndBlur(`05.27.2002, 12:11`);
            expect(inputPO.value).toBe(`05/27/2002, 12:11`);
        });

        it(`keeps typed time if new date selected via calendar`, () => {
            inputPO.sendTextAndBlur(`041520102018`);
            expect(inputPO.value).toBe(`04/15/2010, 20:18`);

            mouseDownOnTextfield();
            expect(getCalendar()).not.toBeNull();

            const calendarCell = getCalendarCell(9);

            calendarCell?.nativeElement.click();
            fixture.detectChanges();

            expect(inputPO.value).toBe(`04/09/2010, 20:18`);
        });
    });

    describe(`InputDateTime + TUI_DATE_FORMAT="YMD" + TUI_DATE_SEPARATOR="-"`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                ...defaultTestingModuleMeta,
                providers: [
                    {provide: TUI_DATE_FORMAT, useValue: `YMD`},
                    {provide: TUI_DATE_SEPARATOR, useValue: `-`},
                ],
            });
        });

        beforeEach(() => initializeEnvironment());

        it(`displays correctly initial value`, () => {
            expect(inputPO.value).toBe(`2021-07-12`);
        });

        it(`corrects date if month more than 12`, () => {
            inputPO.sendTextAndBlur(`200715141830`);
            expect(inputPO.value).toBe(`2007-12-14, 18:30`);
        });

        it(`corrects date if day more than 31`, () => {
            inputPO.sendTextAndBlur(`200715331642`);
            expect(inputPO.value).toBe(`2007-12-31, 16:42`);
        });

        it(`does not accept another separator`, () => {
            inputPO.sendTextAndBlur(`2002.05.27, 12:11`);
            expect(inputPO.value).toBe(`2002-05-27, 12:11`);
        });

        it(`keeps typed time if new date selected via calendar`, () => {
            inputPO.sendTextAndBlur(`201004152018`);
            expect(inputPO.value).toBe(`2010-04-15, 20:18`);

            mouseDownOnTextfield();
            expect(getCalendar()).not.toBeNull();

            const calendarCell = getCalendarCell(9);

            calendarCell?.nativeElement.click();
            fixture.detectChanges();

            expect(inputPO.value).toBe(`2010-04-09, 20:18`);
        });
    });

    describe(`InputDateTime + TUI_DATE_TIME_VALUE_TRANSFORMER`, () => {
        class ExampleDateTimeTransformer
            implements
                TuiControlValueTransformer<[TuiDay | null, TuiTime | null], string>
        {
            private readonly separator = `, `;

            fromControlValue(controlValue: string): [TuiDay | null, TuiTime | null] {
                const [day, time = ``] = controlValue.split(this.separator);

                if (!day) {
                    return [null, null];
                }

                return [
                    TuiDay.normalizeParse(day),
                    time ? TuiTime.fromString(time) : null,
                ];
            }

            toControlValue([day, time]: [TuiDay | null, TuiTime | null]): string {
                if (!day) {
                    return ``;
                }

                return (
                    day.toString() + (time ? `${this.separator}${time.toString()}` : ``)
                );
            }
        }

        class TransformerTestComponent extends TestComponent {
            override control = new FormControl(`19.01.2022, 12:33`);
            override min = new TuiDay(1900, 0, 1);
        }

        configureTestSuite(() => {
            TestBed.configureTestingModule({
                ...defaultTestingModuleMeta,
                declarations: [TransformerTestComponent],
                providers: [
                    {
                        provide: TUI_DATE_TIME_VALUE_TRANSFORMER,
                        useClass: ExampleDateTimeTransformer,
                    },
                ],
            });
        });

        beforeEach(() => initializeEnvironment(TransformerTestComponent));

        it(`correctly transforms initial value`, () => {
            expect(inputPO.value).toBe(`19.01.2022, 12:33`);
            expect(component.control.value).toEqual(`19.01.2022, 12:33`);
        });

        it(`transforms typed value`, () => {
            inputPO.sendText(`150520220943`);

            expect(inputPO.value).toBe(`15.05.2022, 09:43`);
            expect(component.control.value).toEqual(`15.05.2022, 09:43`);
        });

        it(`transforms min day as output (if typed day is less than min day)`, () => {
            inputPO.sendText(`19.02.1861,1833`);

            expect(inputPO.value).toBe(`01.01.1900, 18:33`);
            expect(component.control.value).toEqual(`01.01.1900, 18:33`);
        });

        it(`transforms value which was selected via calendar`, () => {
            inputPO.sendTextAndBlur(`020320221211`);
            expect(inputPO.value).toBe(`02.03.2022, 12:11`);

            mouseDownOnTextfield();
            expect(getCalendar()).not.toBeNull();

            const calendarCell = getCalendarCell(17);

            calendarCell?.nativeElement.click();
            fixture.detectChanges();

            expect(inputPO.value).toBe(`17.03.2022, 12:11`);
        });

        it(`transforms value which was programmatically patched`, () => {
            component.control.patchValue(`09.05.1945, 00:43`);

            expect(inputPO.value).toBe(`09.05.1945, 00:43`);
            expect(component.control.value).toEqual(`09.05.1945, 00:43`);
        });
    });

    function clickOnCellInsideCalendar(dayNumber: number): void {
        const cells = pageObject.getAllByAutomationId(
            testContext.calendarCellAutomationId,
        );
        const cell = cells.find(
            debugEl => debugEl.nativeElement.textContent.trim() === `${dayNumber}`,
        );

        cell?.nativeElement.click();
        fixture.detectChanges();
    }

    function mouseDownOnTextfield(): void {
        getTextfield()?.nativeElement.dispatchEvent(
            new MouseEvent(`mousedown`, {bubbles: true}),
        );
        getTextfield()?.nativeElement.click();
        fixture.detectChanges();
    }

    function getTextfield(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}textfield`);
    }

    function getCalendar(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}calendar`);
    }

    function getCalendarCell(dayNumber: number): DebugElement | null {
        return (
            pageObject
                .getAllByAutomationId(testContext.calendarCellAutomationId)
                .find(el => Number(el.nativeElement.textContent.trim()) === dayNumber) ||
            null
        );
    }
});
