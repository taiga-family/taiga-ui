import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk/date-time';
import {TuiRoot} from '@taiga-ui/core/components/root';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiCalendarRange} from '@taiga-ui/kit/components/calendar-range';
import {TuiInputDateRangeDirective} from '../index';

describe('InputDateRange directive min/max clamping', () => {
    @Component({
        standalone: true,
        imports: [
            ReactiveFormsModule,
            TuiRoot,
            TuiInputDateRangeDirective,
            TuiTextfield,
            TuiDropdown,
            TuiCalendarRange,
        ],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputDateRange
                        [formControl]="control"
                        [min]="min"
                        [max]="max"
                    />
                    <tui-calendar-range *tuiTextfieldDropdown />
                </tui-textfield>
            </tui-root>
        `,
    })
    class TestComponent {
        public control = new FormControl<TuiDayRange | null>(null);
        public min: TuiDay | null = null;
        public max: TuiDay | null = null;
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should clamp initial month to max when max is before current month', () => {
        // Set max to a date before current month (January 2023)
        const maxDate = new TuiDay(2023, 0, 15); // January 15, 2023
        component.max = maxDate;
        fixture.detectChanges();

        // Click to open the calendar dropdown
        const input = fixture.nativeElement.querySelector('input');
        input.click();
        fixture.detectChanges();

        // Find the calendar component
        const calendarEl = fixture.debugElement.query((el) => el.componentInstance instanceof TuiCalendarRange);
        
        if (calendarEl) {
            const calendar = calendarEl.componentInstance as TuiCalendarRange;
            
            // The calendar month should be clamped to max month or before
            expect(calendar.defaultViewedMonth.monthSameOrBefore(maxDate)).toBe(true);
        } else {
            fail('CalendarRange component not found');
        }
    });

    it('should clamp initial month to min when min is after current month', () => {
        // Set min to a date after current month (December 2030)
        const minDate = new TuiDay(2030, 11, 1); // December 1, 2030
        component.min = minDate;
        fixture.detectChanges();

        // Click to open the calendar dropdown
        const input = fixture.nativeElement.querySelector('input');
        input.click();
        fixture.detectChanges();

        // Find the calendar component
        const calendarEl = fixture.debugElement.query((el) => el.componentInstance instanceof TuiCalendarRange);
        
        if (calendarEl) {
            const calendar = calendarEl.componentInstance as TuiCalendarRange;
            
            // The calendar month should be clamped to min month or after
            expect(calendar.defaultViewedMonth.monthSameOrAfter(minDate)).toBe(true);
        } else {
            fail('CalendarRange component not found');
        }
    });

    it('should not change month when current month is within min/max range', () => {
        const currentMonth = new TuiDay();
        const minDate = currentMonth.append({month: -2});
        const maxDate = currentMonth.append({month: 2});
        
        component.min = minDate;
        component.max = maxDate;
        fixture.detectChanges();

        // Click to open the calendar dropdown
        const input = fixture.nativeElement.querySelector('input');
        input.click();
        fixture.detectChanges();

        // Find the calendar component
        const calendarEl = fixture.debugElement.query((el) => el.componentInstance instanceof TuiCalendarRange);
        
        if (calendarEl) {
            const calendar = calendarEl.componentInstance as TuiCalendarRange;
            
            // The calendar month should be within the expected range
            expect(calendar.defaultViewedMonth.monthSameOrAfter(minDate)).toBe(true);
            expect(calendar.defaultViewedMonth.monthSameOrBefore(maxDate)).toBe(true);
        } else {
            fail('CalendarRange component not found');
        }
    });
});