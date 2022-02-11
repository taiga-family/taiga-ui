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
import {
    TuiInputDateTimeComponent,
    TuiInputDateTimeModule,
} from '@taiga-ui/kit/components';
import {TUI_DATE_TIME_VALUE_TRANSFORMER} from '@taiga-ui/kit/tokens';
import {configureTestSuite, NativeInputPO, PageObject} from '@taiga-ui/testing';

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
let inputPO: NativeInputPO;
let pageObject: PageObject<TestComponent>;
const testContext = {
    get prefix() {
        return 'tui-input-date-time__';
    },
    get calendarCellAutomationId() {
        return 'tui-primitive-calendar__cell';
    },
    get nativeInputAutomationId() {
        return 'tui-primitive-textfield__native-input';
    },
};

const DEFAULT_TESTING_MODULE_META = {
    imports: [
        TuiRootModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        TuiInputDateTimeModule,
    ],
    declarations: [TestComponent],
};

const initializeEnvironment = async (
    componentClass: Type<TestComponent> = TestComponent,
) => {
    fixture = TestBed.createComponent(componentClass);
    component = fixture.componentInstance;
    pageObject = new PageObject(fixture);
    inputPO = new NativeInputPO(fixture, testContext.nativeInputAutomationId);

    fixture.detectChanges();
    await fixture.whenStable();
};

describe('InputDateTime', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule(DEFAULT_TESTING_MODULE_META);
    });

    beforeEach(async () => {
        await initializeEnvironment();
    });

    it('displays initial value', done => {
        fixture.whenStable().then(() => {
            expect(inputPO.value).toBe('12.07.2021');
            done();
        });
    });

    it('does not clear not finished time string on the first blur', done => {
        fixture
            .whenStable()
            .then(() => {
                inputPO.sendText('12.07.2021 1');
                inputPO.blur();

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe('12.07.2021, 1');
                done();
            });
    });

    it('does not clear not finished time string on the second blur', done => {
        inputPO.focus();
        inputPO.blur();

        fixture
            .whenStable()
            .then(() => {
                inputPO.sendText('12.07.20211');
                inputPO.blur();

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe('12.07.2021, 1');
                done();
            });
    });

    it('does not clear all date string if 1 char of date was erased', done => {
        inputPO.sendText('14.07.2021');

        fixture
            .whenStable()
            .then(() => {
                inputPO.sendText('14.07.202');

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe('14.07.202');
                done();
            });
    });

    it('keeps not finished time string if date was changed using calendar', done => {
        const TIME_STRING = '1';

        fixture
            .whenStable()
            .then(() => {
                inputPO.sendText(`05.07.2021${TIME_STRING}`);
                mouseDownOnTextfield();

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe(`05.07.2021, ${TIME_STRING}`);
                expect(getCalendar()).not.toBeFalsy();
                clickOnCellInsideCalendar(27);

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe(`27.07.2021, ${TIME_STRING}`);

                done();
            });
    });

    it('min day works', done => {
        component.min = TuiDay.normalizeParse('13.08.2021');
        fixture.detectChanges();
        inputPO.sendText('12.08.2021');

        fixture.whenStable().then(() => {
            expect(inputPO.value).toBe('13.08.2021');
            done();
        });
    });

    it('max day works', done => {
        component.max = TuiDay.normalizeParse('13.08.2021');
        fixture.detectChanges();
        inputPO.sendText('14.08.2021');

        fixture.whenStable().then(() => {
            expect(inputPO.value).toBe('13.08.2021');
            done();
        });
    });

    it('min day + time work', done => {
        component.min = [
            TuiDay.normalizeParse('13.08.2021'),
            TuiTime.fromString('12:00'),
        ];
        fixture.detectChanges();
        inputPO.sendText('13.08.2021, 10:00');

        fixture.whenStable().then(() => {
            expect(inputPO.value).toBe('13.08.2021, 12:00');
            done();
        });
    });

    it('min day + time work within min day only', done => {
        component.min = [
            TuiDay.normalizeParse('13.08.2021'),
            TuiTime.fromString('12:00'),
        ];
        fixture.detectChanges();

        fixture
            .whenStable()
            .then(() => {
                inputPO.sendText('14.08.2021 10:00');

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe('14.08.2021, 10:00');
                done();
            });
    });

    it('max day + time work', done => {
        component.max = [
            TuiDay.normalizeParse('13.08.2021'),
            TuiTime.fromString('12:00'),
        ];
        fixture.detectChanges();
        inputPO.sendText('13.08.2021, 14:00');

        fixture.whenStable().then(() => {
            expect(inputPO.value).toBe('13.08.2021, 12:00');
            done();
        });
    });

    it('max day + time work within max day only', done => {
        component.max = [
            TuiDay.normalizeParse('13.08.2021'),
            TuiTime.fromString('12:00'),
        ];
        fixture.detectChanges();

        fixture
            .whenStable()
            .then(() => {
                inputPO.sendText('12.08.2021, 14:00');

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe('12.08.2021, 14:00');
                done();
            });
    });

    it('keeps finished time string if date was changed using calendar', done => {
        const TIME = '18:00';
        const TIME_RAW = TIME.replace(':', '');

        fixture
            .whenStable()
            .then(() => {
                inputPO.sendText(`14.07.2021${TIME_RAW}`);
                mouseDownOnTextfield();

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe(`14.07.2021, ${TIME}`);
                expect(getCalendar()).not.toBeFalsy();
                clickOnCellInsideCalendar(10);

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe(`10.07.2021, ${TIME}`);

                done();
            });
    });

    it('changes time if max day was selected (via calendar) and time is more than max time now', done => {
        const MAX_DAY = TuiDay.normalizeParse('15.08.2021');
        const MAX_TIME = TuiTime.fromString('16:20');

        const maxDateString = MAX_DAY.toString();
        const dayBeforeMaxString = MAX_DAY.append({day: -1}).toString();

        const maxTimeString = MAX_TIME.toString();
        const timeAfterMaxString = MAX_TIME.shift({hours: 3}).toString();

        component.max = [MAX_DAY, MAX_TIME];
        fixture.detectChanges();

        fixture
            .whenStable()
            .then(() => {
                inputPO.sendText(
                    `${dayBeforeMaxString}${timeAfterMaxString.replace(':', '')}`,
                );
                mouseDownOnTextfield();

                return fixture.whenStable();
            })
            .then(() => {
                clickOnCellInsideCalendar(MAX_DAY.day);

                return fixture.whenStable();
            })
            .then(() => {
                expect(inputPO.value).toBe(`${maxDateString}, ${maxTimeString}`);

                done();
            });
    });

    it('empty value opens dropdown', () => {
        inputPO.sendText('');
        fixture.detectChanges();
        expect(component.dateTimeComponent.open).toEqual(true);
    });
});

describe('InputDateTime + TUI_DATE_FORMAT="DMY" + TUI_DATE_SEPARATOR="/"', () => {
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

    it('displays correctly initial value', () => {
        expect(inputPO.value).toBe('07/12/2021');
    });

    it('corrects date if month more than 12', () => {
        inputPO.sendTextAndBlur('151420071830');
        expect(inputPO.value).toBe('12/14/2007, 18:30');
    });

    it('corrects date if day more than 31', () => {
        inputPO.sendTextAndBlur('153320071642');
        expect(inputPO.value).toBe('12/31/2007, 16:42');
    });

    it('does not accept another separator', () => {
        inputPO.sendTextAndBlur('05.27.2002, 12:11');
        expect(inputPO.value).toBe('05/27/2002, 12:11');
    });

    it('keeps typed time if new date selected via calendar', async () => {
        inputPO.sendTextAndBlur('041520102018');
        expect(inputPO.value).toBe('04/15/2010, 20:18');

        mouseDownOnTextfield();
        expect(getCalendar()).not.toBeNull();

        const calendarCell = getCalendarCell(9);

        calendarCell?.nativeElement.click();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('04/09/2010, 20:18');
    });
});

describe('InputDateTime + TUI_DATE_FORMAT="YMD" + TUI_DATE_SEPARATOR="-"', () => {
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

    it('displays correctly initial value', () => {
        expect(inputPO.value).toBe('2021-07-12');
    });

    it('corrects date if month more than 12', () => {
        inputPO.sendTextAndBlur('200715141830');
        expect(inputPO.value).toBe('2007-12-14, 18:30');
    });

    it('corrects date if day more than 31', () => {
        inputPO.sendTextAndBlur('200715331642');
        expect(inputPO.value).toBe('2007-12-31, 16:42');
    });

    it('does not accept another separator', () => {
        inputPO.sendTextAndBlur('2002.05.27, 12:11');
        expect(inputPO.value).toBe('2002-05-27, 12:11');
    });

    it('keeps typed time if new date selected via calendar', async () => {
        inputPO.sendTextAndBlur('201004152018');
        expect(inputPO.value).toBe('2010-04-15, 20:18');

        mouseDownOnTextfield();
        expect(getCalendar()).not.toBeNull();

        const calendarCell = getCalendarCell(9);

        calendarCell?.nativeElement.click();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('2010-04-09, 20:18');
    });
});

describe('InputDateTime + TUI_DATE_TIME_VALUE_TRANSFORMER', () => {
    class ExampleDateTimeTransformer
        implements TuiControlValueTransformer<[TuiDay | null, TuiTime | null], string>
    {
        private readonly separator = ', ';

        fromControlValue(controlValue: string): [TuiDay | null, TuiTime | null] {
            const [day, time = ''] = controlValue.split(this.separator);

            if (!day) {
                return [null, null];
            }

            return [TuiDay.normalizeParse(day), time ? TuiTime.fromString(time) : null];
        }

        toControlValue([day, time]: [TuiDay | null, TuiTime | null]): string {
            if (!day) return '';

            return day.toString() + (time ? `${this.separator}${time.toString()}` : '');
        }
    }

    class TransformerTestComponent extends TestComponent {
        control = new FormControl('19.01.2022, 12:33');
        min = new TuiDay(1900, 0, 1);
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            ...DEFAULT_TESTING_MODULE_META,
            declarations: [TransformerTestComponent],
            providers: [
                {
                    provide: TUI_DATE_TIME_VALUE_TRANSFORMER,
                    useClass: ExampleDateTimeTransformer,
                },
            ],
        });
    });

    beforeEach(async () => {
        await initializeEnvironment(TransformerTestComponent);
    });

    it('correctly transforms initial value', () => {
        expect(inputPO.value).toBe('19.01.2022, 12:33');
        expect(component.control.value).toEqual('19.01.2022, 12:33');
    });

    it('transforms typed value', () => {
        inputPO.sendText('150520220943');

        expect(inputPO.value).toBe('15.05.2022, 09:43');
        expect(component.control.value).toEqual('15.05.2022, 09:43');
    });

    it('transforms min day as output (if typed day is less than min day)', () => {
        inputPO.sendText('19.02.1861,1833');

        expect(inputPO.value).toBe('01.01.1900, 18:33');
        expect(component.control.value).toEqual('01.01.1900, 18:33');
    });

    it('transforms value which was selected via calendar', async () => {
        inputPO.sendTextAndBlur('020320221211');
        expect(inputPO.value).toBe('02.03.2022, 12:11');

        mouseDownOnTextfield();
        expect(getCalendar()).not.toBeNull();

        const calendarCell = getCalendarCell(17);

        calendarCell?.nativeElement.click();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('17.03.2022, 12:11');
    });

    it('transforms value which was programmatically patched', () => {
        component.control.patchValue('09.05.1945, 00:43');

        expect(inputPO.value).toBe('09.05.1945, 00:43');
        expect(component.control.value).toEqual('09.05.1945, 00:43');
    });
});

function clickOnCellInsideCalendar(dayNumber: number): void {
    const cells = pageObject.getAllByAutomationId(testContext.calendarCellAutomationId);
    const cell = cells.find(
        debugEl => debugEl.nativeElement.textContent.trim() === `${dayNumber}`,
    );

    cell?.nativeElement.click();
    fixture.detectChanges();
}

function mouseDownOnTextfield() {
    getTextfield()!.nativeElement.dispatchEvent(
        new MouseEvent('mousedown', {bubbles: true}),
    );
    getTextfield()!.nativeElement.click();
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
            .find(el => Number(el.nativeElement.innerText.trim()) === dayNumber) || null
    );
}
