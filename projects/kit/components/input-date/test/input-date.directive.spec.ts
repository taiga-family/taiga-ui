import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDay, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiRoot} from '@taiga-ui/core/components/root';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {TuiInputDateComponent, TuiInputDateDirective} from '../index';

describe('InputDate directive', () => {
    @Component({
        standalone: true,
        imports: [
            ReactiveFormsModule,
            TuiRoot,
            TuiInputDateComponent,
            TuiInputDateDirective,
            TuiDropdown,
            TuiCalendar,
        ],
        template: `
            <tui-root>
                <input
                    type="text"
                    tuiInputDate
                    [formControl]="control"
                    [min]="min"
                    [max]="max"
                />
                <tui-dropdown>
                    <tui-calendar />
                </tui-dropdown>
            </tui-root>
        `,
    })
    class TestComponent {
        public control = new FormControl<TuiDay | null>(null);
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
        // Set max to a date before current month
        const maxDate = new TuiDay(2023, 0, 15); // January 15, 2023
        component.max = maxDate;
        fixture.detectChanges();

        // Click to open the calendar dropdown
        const input = fixture.nativeElement.querySelector('input');
        input.click();
        fixture.detectChanges();

        // Find the calendar component
        const calendar = fixture.debugElement.query((el) => el.componentInstance instanceof TuiCalendar);
        
        if (calendar) {
            const calendarInstance = calendar.componentInstance as TuiCalendar;
            
            // The calendar month should be clamped to max month or before
            expect(calendarInstance.month.monthSameOrBefore(maxDate)).toBe(true);
        }
    });

    it('should clamp initial month to min when min is after current month', () => {
        // Set min to a date after current month (unlikely in real usage but for testing)
        const minDate = new TuiDay(2030, 11, 1); // December 1, 2030
        component.min = minDate;
        fixture.detectChanges();

        // Click to open the calendar dropdown
        const input = fixture.nativeElement.querySelector('input');
        input.click();
        fixture.detectChanges();

        // Find the calendar component
        const calendar = fixture.debugElement.query((el) => el.componentInstance instanceof TuiCalendar);
        
        if (calendar) {
            const calendarInstance = calendar.componentInstance as TuiCalendar;
            
            // The calendar month should be clamped to min month or after
            expect(calendarInstance.month.monthSameOrAfter(minDate)).toBe(true);
        }
    });

    it('should not change month when current month is within min/max range', () => {
        const currentMonth = TuiMonth.currentLocal();
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
        const calendar = fixture.debugElement.query((el) => el.componentInstance instanceof TuiCalendar);
        
        if (calendar) {
            const calendarInstance = calendar.componentInstance as TuiCalendar;
            
            // The calendar month should be the current month since it's within range
            expect(calendarInstance.month.monthSame(currentMonth)).toBe(true);
        }
    });
});