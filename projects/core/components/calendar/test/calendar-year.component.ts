import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiCalendarYearComponent} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';

describe('TuiCalendarYearComponent', () => {
    @Component({
        standalone: true,
        imports: [TuiCalendarYearComponent],
        template: `
            <tui-calendar-year
                [disabledItemHandler]="disabledItemHandler"
                [initialItem]="initialItem"
                [max]="max"
                [min]="min"
                [value]="value"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiCalendarYearComponent, {static: true})
        public component!: TuiCalendarYearComponent;

        public min = 0;
        public max = TuiDay.currentLocal().year + 200;
        public value = TuiDay.currentLocal();
        public initialItem = TuiDay.currentLocal().year;
        public disabledItemHandler = (day: number): boolean => day === 10;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiCalendarYearComponent;
    let pageObject: TuiPageObject<Test>;
    const testContext = {
        get prefix() {
            return 'tui-calendar-year__';
        },
    };

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();
    });

    it('Showed 200 years', () => {
        expect(pageObject.getAllByAutomationId(`${testContext.prefix}cell`).length).toBe(
            200,
        );
    });

    describe('getItemRange', () => {
        it('returns null if there is no value', () => {
            const item = 2019;

            component.value = null;

            expect(component.getItemRange(item)).toBeNull();
        });

        it('returns start correctly', () => {
            const item = 2019;

            component.value = new TuiDayRange(
                new TuiDay(item, 1, 1),
                new TuiDay(2020, 1, 1),
            );

            expect(component.getItemRange(item)).toBe('start');
        });

        it('returns end correctly', () => {
            const item = 2019;

            component.value = new TuiDayRange(
                new TuiDay(2018, 1, 1),
                new TuiDay(item, 1, 1),
            );

            expect(component.getItemRange(item)).toBe('end');
        });

        it('returns single correctly', () => {
            const item = 2018;

            component.value = new TuiDayRange(
                new TuiDay(item, 1, 1),
                new TuiDay(item, 2, 2),
            );

            expect(component.getItemRange(item)).toBe('single');
        });
    });

    describe('itemIsInterval', () => {
        it('works correctly if item is in value range', () => {
            component.value = new TuiDayRange(
                new TuiDay(2018, 4, 20),
                new TuiDay(2020, 4, 22),
            );

            expect(component.itemIsInterval(2019)).toBe(true);
        });

        it('returns false if item is in value range of same year and no item is hovered', () => {
            component.value = new TuiDayRange(
                new TuiDay(2019, 4, 20),
                new TuiDay(2019, 4, 22),
            );

            expect(component.itemIsInterval(2019)).toBe(false);
        });

        it('works correctly if item is in value range of same year and there is hovered item', () => {
            component.value = new TuiDayRange(
                new TuiDay(2019, 4, 20),
                new TuiDay(2019, 4, 22),
            );
            component.onItemHovered(true, 2017);

            expect(component.itemIsInterval(2018)).toBe(true);
        });
    });
});
