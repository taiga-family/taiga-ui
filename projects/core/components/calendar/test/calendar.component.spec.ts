import type {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiDay, TuiMonth} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiCalendarHarness} from '@taiga-ui/testing';

describe('Calendar', () => {
    @Component({
        standalone: true,
        imports: [TuiCalendar],
        template: `
            <tui-calendar
                [value]="value"
                (dayClick)="dayClick($event)"
                (hoveredItemChange)="hoveredItemChange($event)"
            />
            <tui-calendar
                id="min-case"
                [min]="min"
                [minViewedMonth]="minViewedMonth"
                [(month)]="month"
            />
            <tui-calendar
                id="max-case"
                [max]="max"
                [maxViewedMonth]="maxViewedMonth"
                [(month)]="month"
            />
            <tui-calendar
                id="year-view"
                initialView="year"
            />
        `,
    })
    class Test {
        @ViewChild(TuiCalendar, {static: true})
        public component!: TuiCalendar;

        public value = TuiDay.currentLocal();
        public month = new TuiMonth(2019, 2);

        public min = new TuiDay(2019, 2, 1);
        public minViewedMonth = new TuiDay(2019, 1, 1);

        public max = new TuiDay(2019, 2, 1);
        public maxViewedMonth = new TuiDay(2019, 3, 1);

        public dayClick: any = jest.fn();
        public hoveredItemChange: any = jest.fn();
    }

    let fixture: ComponentFixture<Test>;
    let loader: HarnessLoader;
    let testComponent: Test;
    let component: TuiCalendar;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    it('year selection is not initially visible', async () => {
        const calendar = await loader.getHarness(TuiCalendarHarness);

        expect(await calendar.yearPickerShown()).toBe(false);
    });

    it('month selection is initially visible', async () => {
        const calendar = await loader.getHarness(TuiCalendarHarness);

        expect(await calendar.yearMonthPaginationShown()).toBe(true);
    });

    it('day selection is initially visible', async () => {
        const calendar = await loader.getHarness(TuiCalendarHarness);

        expect(await calendar.primitiveCalendarShown()).toBe(true);
    });

    it('year selection is initially visible in "year" view', async () => {
        const calendar = await loader.getHarness(
            TuiCalendarHarness.with({selector: '#year-view'}),
        );

        expect(await calendar.yearPickerShown()).toBe(true);
    });

    it('month selection is not initially visible in "year" view', async () => {
        const calendar = await loader.getHarness(
            TuiCalendarHarness.with({selector: '#year-view'}),
        );

        expect(await calendar.yearMonthPaginationShown()).toBe(false);
    });

    it('day selection is initially visible in "year" view', async () => {
        const calendar = await loader.getHarness(
            TuiCalendarHarness.with({selector: '#year-view'}),
        );

        expect(await calendar.primitiveCalendarShown()).toBe(false);
    });

    it('onPaginationYearClick shows primitive year picker component', async () => {
        const calendar = await loader.getHarness(TuiCalendarHarness);

        await calendar.clickPaginationYear();
        expect(await calendar.yearPickerShown()).toBe(true);
    });

    it('onPickerYearClick sets year as null', async () => {
        const calendar = await loader.getHarness(TuiCalendarHarness);

        await calendar.clickPaginationYear();

        await calendar.clickPickerYear('2022');

        expect(await calendar.yearPickerShown()).toBe(false);
    });

    it('onPaginationValueChange does not update month if it is the same with current', () => {
        const date = new Date();
        const savedMonth = new TuiMonth(date.getFullYear(), date.getMonth());
        const sameMonth = new TuiMonth(date.getFullYear(), date.getMonth());

        component.month = savedMonth;

        component.onPaginationValueChange(sameMonth);

        expect(component.month).toBe(savedMonth);
    });

    it('click on day calls emitter', async () => {
        const day = TuiDay.fromUtcNativeDate(new Date());
        const calendar = await loader.getHarness(TuiCalendarHarness);

        await calendar.clickDay(day.day);
        expect(testComponent.dayClick).toHaveBeenCalledWith(day);
    });

    it('right button should not toggle after max value', async () => {
        const calendar = await loader.getHarness(
            TuiCalendarHarness.with({selector: '#max-case'}),
        );

        expect(await calendar.getContentText()).toBe('March  2019');

        await calendar.clickMonthLeft(); // Feb
        await calendar.clickMonthLeft(); // Jan

        expect(await calendar.getContentText()).toBe('January  2019');

        await calendar.clickMonthRight(); // Feb

        expect(await calendar.getContentText()).toBe('February  2019');

        await calendar.clickMonthRight(); // Mar

        // max month is March
        await calendar.clickMonthRight(); // Mar
        await calendar.clickMonthRight(); // Mar
        await calendar.clickMonthRight(); // Mar
        await calendar.clickMonthRight(); // Mar

        expect(await calendar.getContentText()).toBe('March  2019');
    });

    it('monitors hover on a certain day', async () => {
        const day = TuiDay.fromUtcNativeDate(new Date());
        const calendar = await loader.getHarness(TuiCalendarHarness);

        await calendar.hoverDay(day.day);
        expect(testComponent.hoveredItemChange).toHaveBeenCalledWith(day);
    });

    it('does not monitor hover on the day secondly and more', async () => {
        const day = TuiDay.fromUtcNativeDate(new Date());
        const calendar = await loader.getHarness(TuiCalendarHarness);

        await calendar.hoverDay(day.day);
        await calendar.hoverDay(day.day);
        expect(testComponent.hoveredItemChange).toHaveBeenCalledTimes(1);
    });

    it('if minViewedMonth is less than set min, it will be computed as min', async () => {
        const calendar = await loader.getHarness(
            TuiCalendarHarness.with({selector: '#min-case'}),
        );
        const res = await calendar.isPaginationLeftDisabled();

        expect(res).toBe(true);
    });

    it('if maxViewedMonth is more than set max, it will be computed as max', async () => {
        const calendar = await loader.getHarness(
            TuiCalendarHarness.with({selector: '#max-case'}),
        );
        const res = await calendar.isPaginationRightDisabled();

        expect(res).toBe(true);
    });
});
