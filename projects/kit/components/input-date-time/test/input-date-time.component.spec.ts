import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';
import {
    TuiInputDateTimeComponent,
    TuiInputDateTimeModule,
} from '@taiga-ui/kit/components';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';

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
    dateTimeComponent: TuiInputDateTimeComponent;

    readonly control = new FormControl([new TuiDay(2021, 6, 12), null]);

    min: TuiDay | [TuiDay, TuiTime] = TUI_FIRST_DAY;
    max: TuiDay | [TuiDay, TuiTime] = TUI_LAST_DAY;
}

describe('InputDateTime', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiInputDateTimeModule,
            ],
            declarations: [TestComponent],
        });
    });

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

    beforeEach(done => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        pageObject = new PageObject(fixture);
        inputPO = new NativeInputPO(fixture, testContext.nativeInputAutomationId);

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            done();
        });
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
});
