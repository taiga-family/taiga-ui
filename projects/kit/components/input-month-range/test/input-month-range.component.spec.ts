import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputMonthRangeComponent} from '../input-month-range.component';
import {TuiInputMonthRangeModule} from '../input-month-range.module';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
] as const;

describe('InputMonthRange', () => {
    @Component({
        template: `
            <tui-input-month-range [formControl]="control"></tui-input-month-range>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputMonthRangeComponent, {static: true})
        component: TuiInputMonthRangeComponent;

        control = new FormControl(null);
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputMonthRangeComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiInputMonthRangeModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    describe('computedValue', () => {
        it('returns empty string if no value', () => {
            testComponent.control.setValue(null);

            expect(component.nativeFocusableElement!.value).toBe('');
        });

        it('returns a half of stringified range if single month', () => {
            const testMonth = new TuiMonth(2020, 4);
            const testRange = new TuiMonthRange(testMonth, testMonth);

            component.nativeFocusableElement!.focus();
            component.writeValue(testRange);

            expect(component.computeValue(testRange, true, months)).toBe(`May 2020 — `);
        });

        it('returns the whole stringified range if there is', () => {
            const testMonth = new TuiMonth(2020, 4);
            const testRange = new TuiMonthRange(testMonth, testMonth.append({month: 2}));

            component.nativeFocusableElement!.focus();
            component.writeValue(testRange);

            expect(component.computeValue(testRange, true, months)).toBe(
                `May 2020 — July 2020`,
            );
        });

        it('returns the whole stringified range of single month if there is no focus on input', () => {
            const testMonth = new TuiMonth(2020, 4);
            const testRange = new TuiMonthRange(testMonth, testMonth);

            component.writeValue(testRange);

            expect(component.computeValue(testRange, false, months)).toBe(
                `May 2020 — May 2020`,
            );
        });
    });

    describe('onMonthClick', () => {
        it('creates a new single month range if there is no value', () => {
            const newMonth = new TuiMonth(2020, 5);

            component.onMonthClick(newMonth);

            expect(component.value!.from.month).toBe(newMonth.month);
            expect(component.value!.to.month).toBe(newMonth.month);
        });

        it('creates a new single month range if there is a range value', () => {
            const previousRange = new TuiMonthRange(
                new TuiMonth(2020, 2),
                new TuiMonth(2020, 3),
            );
            const newMonth = new TuiMonth(2020, 5);

            testComponent.control.setValue(previousRange);

            component.onMonthClick(newMonth);

            expect(component.value!.from.month).toBe(newMonth.month);
            expect(component.value!.to.month).toBe(newMonth.month);
        });

        it('update value and sort it if it can be a new range', () => {
            const newMonthStart = new TuiMonth(2020, 5);
            const newMonthEnd = new TuiMonth(2020, 7);

            component.onMonthClick(newMonthStart);
            component.onMonthClick(newMonthEnd);

            expect(component.value!.from.month).toBe(newMonthStart.month);
            expect(component.value!.to.month).toBe(newMonthEnd.month);
        });
    });
});
