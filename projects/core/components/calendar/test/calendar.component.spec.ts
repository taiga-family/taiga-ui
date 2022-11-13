import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiDay, TuiMonth} from '@taiga-ui/cdk';
import {TuiCalendarComponent, TuiCalendarModule} from '@taiga-ui/core';
import {configureTestSuite, TuiCalendarHarness} from '@taiga-ui/testing';

describe(`Calendar`, () => {
    @Component({
        template: `
            <tui-calendar
                [value]="value"
                (dayClick)="dayClick($event)"
                (hoveredItemChange)="hoveredItemChange($event)"
            ></tui-calendar>
            <tui-calendar
                id="min-case"
                [min]="min"
                [minViewedMonth]="minViewedMonth"
                [(month)]="minMonthValue"
            ></tui-calendar>
            <tui-calendar
                id="max-case"
                [max]="max"
                [maxViewedMonth]="maxViewedMonth"
                [(month)]="maxMonthValue"
            ></tui-calendar>
        `,
    })
    class TestComponent {
        @ViewChild(TuiCalendarComponent, {static: true})
        component!: TuiCalendarComponent;

        value = TuiDay.currentLocal();

        min = new TuiDay(2019, 2, 1);
        minViewedMonth = new TuiDay(2019, 1, 1);
        minMonthValue = new TuiMonth(2019, 2);

        max = new TuiDay(2019, 2, 1);
        maxViewedMonth = new TuiDay(2019, 3, 1);
        maxMonthValue = new TuiMonth(2019, 2);

        dayClick = jest.fn();
        hoveredItemChange = jest.fn();
    }

    let fixture: ComponentFixture<TestComponent>;
    let loader: HarnessLoader;
    let testComponent: TestComponent;
    let component: TuiCalendarComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiCalendarModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    it(`Year selection is not initially visible`, async () => {
        const calendar = await loader.getHarness(TuiCalendarHarness);

        expect(await calendar.yearPickerShown()).toBe(false);
    });

    it(`Month selection is initially visible`, async () => {
        const calendar = await loader.getHarness(TuiCalendarHarness);

        expect(await calendar.yearMonthPaginationShown()).toBe(true);
    });

    it(`Day selection is initially visible`, async () => {
        const calendar = await loader.getHarness(TuiCalendarHarness);

        expect(await calendar.primitiveCalendarShown()).toBe(true);
    });

    it(`onPaginationYearClick shows primtive year picker component`, async () => {
        const calendar = await loader.getHarness(TuiCalendarHarness);

        await calendar.clickPaginationYear();
        expect(await calendar.yearPickerShown()).toBe(true);
    });

    it(`onPickerYearClick sets year as null`, async () => {
        const calendar = await loader.getHarness(TuiCalendarHarness);

        await calendar.clickPaginationYear();

        await calendar.clickPickerYear(`2022`);

        expect(await calendar.yearPickerShown()).toBe(false);
    });

    it(`onPaginationValueChange does not update month if it is the same with current`, () => {
        const date = new Date();
        const savedMonth = new TuiMonth(date.getFullYear(), date.getMonth());
        const sameMonth = new TuiMonth(date.getFullYear(), date.getMonth());

        component.month = savedMonth;

        component.onPaginationValueChange(sameMonth);

        expect(component.month).toBe(savedMonth);
    });

    it(`click on day calls emitter`, async () => {
        const day = TuiDay.fromUtcNativeDate(new Date());
        const calendar = await loader.getHarness(TuiCalendarHarness);

        await calendar.clickDay(day.day);
        expect(testComponent.dayClick).toHaveBeenCalledWith(day);
    });

    it(`monitors hover on a certain day`, async () => {
        const day = TuiDay.fromUtcNativeDate(new Date());
        const calendar = await loader.getHarness(TuiCalendarHarness);

        await calendar.hoverDay(day.day);
        expect(testComponent.hoveredItemChange).toHaveBeenCalledWith(day);
    });

    it(`does not monitor hover on the day secondly and more`, async () => {
        const day = TuiDay.fromUtcNativeDate(new Date());
        const calendar = await loader.getHarness(TuiCalendarHarness);

        await calendar.hoverDay(day.day);
        await calendar.hoverDay(day.day);
        expect(testComponent.hoveredItemChange).toHaveBeenCalledTimes(1);
    });

    it(`if minViewedMonth is less than set min, it will be computed as min`, async () => {
        const calendar = await loader.getHarness(
            TuiCalendarHarness.with({selector: `#min-case`}),
        );
        const res = await calendar.isPaginationLeftDisabled();

        expect(res).toBe(true);
    });

    it(`if maxViewedMonth is more than set max, it will be computed as max`, async () => {
        const calendar = await loader.getHarness(
            TuiCalendarHarness.with({selector: `#max-case`}),
        );
        const res = await calendar.isPaginationRightDisabled();

        expect(res).toBe(true);
    });
});
