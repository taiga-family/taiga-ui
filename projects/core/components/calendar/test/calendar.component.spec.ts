import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiDay, TuiMonth, TuiYear} from '@taiga-ui/cdk';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiCalendarComponent} from '../calendar.component';
import {TuiCalendarModule} from '../calendar.module';

describe('Calendar', () => {
    @Component({
        template: `
            <tui-calendar
                [value]="value"
                [disabledItemHandler]="disabledItemHandler"
                [min]="min"
                [max]="max"
                [minViewedMonth]="minViewedMonth"
                [maxViewedMonth]="maxViewedMonth"
                [(month)]="month"
            ></tui-calendar>
        `,
    })
    class TestComponent {
        @ViewChild(TuiCalendarComponent, {static: true})
        component: TuiCalendarComponent;

        min = TuiDay.currentLocal().append({month: -2});
        max = TuiDay.currentLocal().append({month: 2});
        minViewedMonth: TuiMonth | null = TuiMonth.currentLocal().append({month: -1});
        maxViewedMonth: TuiMonth | null = TuiMonth.currentLocal().append({month: 1});
        value = TuiDay.currentLocal();
        month = TuiMonth.currentLocal();
        disabledItemHandler = (item: TuiDay) => item.day === 10;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiCalendarComponent;
    let pageObject: PageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-calendar__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiCalendarModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        pageObject = new PageObject(fixture);
        fixture.detectChanges();
    });

    it('Year selection is not initially visible', () => {
        expect(pageObject.getByAutomationId(`${testContext.prefix}year`)).toBeNull();
    });

    it('Month selection is initially visible', () => {
        expect(
            pageObject.getByAutomationId(`${testContext.prefix}pagination`),
        ).not.toBeNull();
    });

    it('Day selection is initially visible', () => {
        expect(
            pageObject.getByAutomationId(`${testContext.prefix}calendar`),
        ).not.toBeNull();
    });

    it('onPaginationYearClick changes year correctly', () => {
        component.onPaginationYearClick(new TuiYear(2002));

        expect(component.year!.formattedYear).toBe('2002');
    });

    it('onPickerYearClick sets year as null', () => {
        const year = new TuiYear(2002);

        component.onPickerYearClick(year);

        expect(component.year).toBe(null);
    });

    it('onPaginationValueChange does not update month if it is the same with current', () => {
        const savedMonth = new TuiMonth(2002, 2);
        const sameMonth = new TuiMonth(2002, 2);

        component.month = savedMonth;

        component.onPaginationValueChange(sameMonth);

        expect(component.month).toBe(savedMonth);
    });

    it('click on day calls emitter', done => {
        const savedDay = new TuiDay(2019, 2, 1);

        component.dayClick.subscribe((day: TuiDay) => {
            expect(day).toBe(savedDay);
            done();
        });

        component.onDayClick(savedDay);
    });

    it('monitors hover on a certain day', () => {
        const hoveredDay = new TuiDay(2019, 2, 1);

        component.onHoveredItemChange(hoveredDay);

        expect(component.hoveredItem).toBe(hoveredDay);
    });

    it('does not monitor hover on the day secondly and more', () => {
        const hoveredDay = new TuiDay(2019, 2, 1);

        component.hoveredItem = hoveredDay;
        component.onHoveredItemChange(hoveredDay);

        expect(component.hoveredItem).toBe(hoveredDay);
    });

    it('if minViewedMonth is less than set min, it will be computed as min', () => {
        const minDay = new TuiDay(2019, 2, 3);
        const beforeMinDay = minDay.append({month: -1});

        component.min = minDay;
        component.minViewedMonth = beforeMinDay;

        expect(component.computedMinViewedMonth).toBe(minDay);
    });

    it('if maxViewedMonth is more than set max, it will be computed as max', () => {
        const maxDay = new TuiDay(2019, 2, 3);
        const afterMaxDay = maxDay.append({month: 1});

        component.max = maxDay;
        component.maxViewedMonth = afterMaxDay;

        expect(component.computedMaxViewedMonth).toBe(maxDay);
    });

    it('if set month is less than viewed, it takes computed min viewed', () => {
        const month = TuiMonth.currentLocal();
        const monthAfter = month.append({month: 1});

        component.month = month;
        component.minViewedMonth = monthAfter;

        expect(component.computedMonth).toBe(monthAfter);
    });

    it('if set month is more than max, it takes max viewed', () => {
        component.max = TuiDay.currentLocal().append({month: -1});

        expect(component.computedMonth).toBe(component.max);
    });
});
