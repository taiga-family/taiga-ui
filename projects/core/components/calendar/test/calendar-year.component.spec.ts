import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiDay, TuiDayRange, tuiSetSignal} from '@taiga-ui/cdk';
import {TuiCalendarYear} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';

describe('TuiCalendarYearComponent', () => {
    @Component({
        imports: [TuiCalendarYear],
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
        public readonly component = viewChild.required(TuiCalendarYear);
        public min = 0;
        public max = TuiDay.currentLocal().year + 200;
        public value = TuiDay.currentLocal();
        public initialItem = TuiDay.currentLocal().year;
        public disabledItemHandler = (day: number): boolean => day === 10;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiCalendarYear;
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
        component = testComponent.component();
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();
    });

    it('showed 200 years', () => {
        expect(pageObject.getAllByAutomationId(`${testContext.prefix}cell`).length).toBe(
            200,
        );
    });

    describe('getItemRange', () => {
        it('returns null if there is no value', () => {
            const item = 2019;

            tuiSetSignal(component.value, null);

            expect(component.getItemRange(item)).toBeNull();
        });

        it('returns start correctly', () => {
            const item = 2019;

            tuiSetSignal(
                component.value,
                new TuiDayRange(new TuiDay(item, 1, 1), new TuiDay(2020, 1, 1)),
            );

            expect(component.getItemRange(item)).toBe('start');
        });

        it('returns end correctly', () => {
            const item = 2019;

            tuiSetSignal(
                component.value,
                new TuiDayRange(new TuiDay(2018, 1, 1), new TuiDay(item, 1, 1)),
            );

            expect(component.getItemRange(item)).toBe('end');
        });

        it('returns active correctly', () => {
            const item = 2018;

            tuiSetSignal(
                component.value,
                new TuiDayRange(new TuiDay(item, 1, 1), new TuiDay(item, 2, 2)),
            );

            expect(component.getItemRange(item)).toBe('active');
        });
    });
});
