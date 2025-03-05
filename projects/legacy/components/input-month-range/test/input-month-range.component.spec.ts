import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiInputMonthRangeComponent, TuiInputMonthRangeModule} from '@taiga-ui/legacy';

describe('InputMonthRange', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputMonthRangeModule],
        template: `
            <tui-input-month-range [formControl]="control"></tui-input-month-range>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiInputMonthRangeComponent, {static: true})
        public component!: TuiInputMonthRangeComponent;

        public control = new FormControl<TuiMonthRange | null>(null);
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiInputMonthRangeComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    describe('computedValue', () => {
        it('returns empty string if no value', () => {
            testComponent.control.setValue(null);

            expect(component.nativeFocusableElement?.value).toBe('');
        });

        it('returns a half of stringified range if single month', () => {
            const testMonth = new TuiMonth(2020, 4);
            const testRange = new TuiMonthRange(testMonth, testMonth);

            component.nativeFocusableElement?.focus();
            component.writeValue(testRange);

            expect(component.computeValue('May 2020', 'May 2020')).toBe('May 2020 – ');
        });

        it('returns a full of stringified range if single month and readonly state', () => {
            const testMonth = new TuiMonth(2020, 4);
            const testRange = new TuiMonthRange(testMonth, testMonth);

            component.readOnly = true;
            component.nativeFocusableElement?.focus();
            component.writeValue(testRange);

            expect(component.computeValue('May 2020', 'May 2020')).toBe(
                'May 2020 – May 2020',
            );
        });

        it('returns the whole stringified range if there is', () => {
            const testMonth = new TuiMonth(2020, 4);
            const testRange = new TuiMonthRange(testMonth, testMonth.append({month: 2}));

            component.nativeFocusableElement?.focus();
            component.writeValue(testRange);

            expect(component.computeValue('May 2020', 'July 2020')).toBe(
                'May 2020 – July 2020',
            );
        });

        it('returns the whole stringified range of single month if there is no focus on input', () => {
            const testMonth = new TuiMonth(2020, 4);
            const testRange = new TuiMonthRange(testMonth, testMonth);

            component.writeValue(testRange);

            expect(component.computeValue('May 2020', 'May 2020')).toBe(
                'May 2020 – May 2020',
            );
        });
    });

    describe('onMonthClick', () => {
        it('creates a new single month range if there is no value', () => {
            const newMonth = new TuiMonth(2020, 5);

            component.onMonthClick(newMonth);

            expect(component.value?.from.month).toBe(newMonth.month);
            expect(component.value?.to.month).toBe(newMonth.month);
        });

        it('creates a new single month range if there is a range value', () => {
            const previousRange = new TuiMonthRange(
                new TuiMonth(2020, 2),
                new TuiMonth(2020, 3),
            );
            const newMonth = new TuiMonth(2020, 5);

            testComponent.control.setValue(previousRange);

            component.onMonthClick(newMonth);

            expect(component.value?.from.month).toBe(newMonth.month);
            expect(component.value?.to.month).toBe(newMonth.month);
        });

        it('update value and sort it if it can be a new range', () => {
            const newMonthStart = new TuiMonth(2020, 5);
            const newMonthEnd = new TuiMonth(2020, 7);

            component.onMonthClick(newMonthStart);
            component.onMonthClick(newMonthEnd);

            expect(component.value?.from.month).toBe(newMonthStart.month);
            expect(component.value?.to.month).toBe(newMonthEnd.month);
        });

        it('empty value opens dropdown', () => {
            component.onValueChange('');
            fixture.detectChanges();

            expect(component.open).toBe(true);
        });
    });
});
