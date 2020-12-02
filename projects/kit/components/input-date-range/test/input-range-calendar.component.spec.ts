import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RANGE_SEPARATOR_CHAR, TUI_LAST_DAY, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiRootModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiDayRangePeriod} from '../../../classes/day-range-period';
import {TuiInputDateRangeComponent} from '../input-date-range.component';
import {TuiInputDateRangeModule} from '../input-date-range.module';

describe('InputDateRangeComponent', () => {
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

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiInputDateRangeModule,
                TuiRootModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiTextfieldControllerModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(done => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        inputPO = new NativeInputPO(fixture, 'tui-primitive-textfield__native-input');
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            done();
        });
    });

    describe('Клик на поле ввода', () => {
        it('открывает календарь', () => {
            clickOnTextfield();

            expect(getCalendars()).not.toBeNull();
        });

        it('при повторном клике закроет календарь', () => {
            clickOnTextfield();
            clickOnTextfield();

            expect(getCalendars()).toBeNull();
        });
    });

    describe('выпадающий календарь', () => {
        let y2000m0d1: TuiDay;
        let y2000m0d2: TuiDay;

        beforeEach(() => {
            y2000m0d1 = new TuiDay(2000, 0, 1);
            y2000m0d2 = new TuiDay(2000, 0, 2);
            component.onClick();
            fixture.detectChanges();
        });

        describe('закрывается при выборе', () => {
            it('той же даты', () => {
                component.onRangeChange(new TuiDayRange(y2000m0d1, y2000m0d1));
                fixture.detectChanges();

                expect(getCalendars()).toBeNull();
            });

            it('другой даты', () => {
                component.onRangeChange(new TuiDayRange(y2000m0d2, y2000m0d2));
                fixture.detectChanges();

                expect(getCalendars()).toBeNull();
            });
        });
    });

    describe('Ввод с клавиатуры', () => {
        beforeEach(done => {
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                done();
            });
        });

        it('При вводе неверной даты значение корректируется', () => {
            inputPO.sendText('32.12.2012');

            expect(inputPO.value).toBe('31.12.2012');
        });

        it('При вводе первой даты значение контрола — null', () => {
            inputPO.sendText('31.12.2012');

            expect(testComponent.control.value).toBeNull();
        });

        it('При вводе двух дат значение контрола обновляется', () => {
            inputPO.sendText(`15.07.2000${RANGE_SEPARATOR_CHAR}15.07.2020`);

            expect(testComponent.control.value.formattedDayRange).toBe(
                `15.07.2000${RANGE_SEPARATOR_CHAR}15.07.2020`,
            );
        });

        it('При вводе двух дат значение обрезается по min/max обновляется', () => {
            testComponent.min = new TuiDay(2001, 6, 15);
            testComponent.max = new TuiDay(2019, 6, 15);
            fixture.detectChanges();
            inputPO.sendText(`15.07.2000${RANGE_SEPARATOR_CHAR}15.07.2020`);

            expect(testComponent.control.value.formattedDayRange).toBe(
                `15.07.2001${RANGE_SEPARATOR_CHAR}15.07.2019`,
            );
        });
    });

    function clickOnTextfield() {
        getTextfield()!.nativeElement.click();
        fixture.detectChanges();
    }

    function getCalendars(): DebugElement | null {
        return pageObject.getByAutomationId('tui-calendar-range__calendars');
    }

    function getTextfield(): DebugElement | null {
        return pageObject.getByAutomationId('tui-input-date-range__textfield');
    }
});
