import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TUI_FIRST_DAY, TuiDay, TuiDayRange, TuiYear} from '@taiga-ui/cdk';
import {
    TuiInteractiveState,
    TuiPrimitiveYearPickerComponent,
    TuiPrimitiveYearPickerModule,
    TuiRangeState,
} from '@taiga-ui/core';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

describe('TuiPrimitiveYearPickerComponent', () => {
    @Component({
        template: `
            <tui-primitive-year-picker
                [initialItem]="initialItem"
                [disabledItemHandler]="disabledItemHandler"
                [min]="min"
                [max]="max"
                [value]="value"
            ></tui-primitive-year-picker>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPrimitiveYearPickerComponent, {static: true})
        component!: TuiPrimitiveYearPickerComponent;

        min = TUI_FIRST_DAY;
        max = TuiDay.currentLocal().append({year: 200});
        value = TuiDay.currentLocal();
        initialItem = TuiDay.currentLocal();
        disabledItemHandler = (item: TuiDay): boolean => item.day === 10;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiPrimitiveYearPickerComponent;
    let pageObject: TuiPageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-primitive-year-picker__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPrimitiveYearPickerModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
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

    describe('getItemState', () => {
        it('returns disabled state correctly', () => {
            const item = 2019;

            component.max = new TuiYear(item - 1);

            expect(component.getItemState(item)).toBe(TuiInteractiveState.Disabled);
        });

        it('returns pressed state if it is not disabled', () => {
            const item = 2019;

            component.onItemPressed(true, item);

            expect(component.getItemState(item)).toBe(TuiInteractiveState.Pressed);
        });

        it('returns hovered state if it is not disabled and pressed', () => {
            const item = 2019;

            component.onItemHovered(true, item);

            expect(component.getItemState(item)).toBe(TuiInteractiveState.Hovered);
        });
    });

    describe('getItemRange', () => {
        it('returns null if there is no value', () => {
            const item = 2019;

            component.value = null;

            expect(component.getItemRange(item)).toBe(null);
        });

        it('returns start correctly', () => {
            const item = 2019;

            component.value = new TuiDayRange(
                new TuiDay(item, 1, 1),
                new TuiDay(2020, 1, 1),
            );

            expect(component.getItemRange(item)).toBe(TuiRangeState.Start);
        });

        it('returns end correctly', () => {
            const item = 2019;

            component.value = new TuiDayRange(
                new TuiDay(2018, 1, 1),
                new TuiDay(item, 1, 1),
            );

            expect(component.getItemRange(item)).toBe(TuiRangeState.End);
        });

        it('returns single correctly', () => {
            const item = 2018;

            component.value = new TuiDayRange(
                new TuiDay(item, 1, 1),
                new TuiDay(item, 2, 2),
            );

            expect(component.getItemRange(item)).toBe(TuiRangeState.Single);
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

    it('emits year by click on item', () => {
        let result: TuiYear | undefined;
        const item = 2019;

        component.yearClick.subscribe((year: TuiYear) => {
            result = year;
        });

        component.onItemClick(item);

        expect(result?.yearSame(new TuiYear(item))).toBe(true);
    });
});
