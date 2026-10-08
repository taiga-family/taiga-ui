import {ChangeDetectionStrategy, Component, signal, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {RANGE_SEPARATOR_CHAR, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiTextfieldComponent} from '@taiga-ui/core';
import {TuiCalendarRange} from '@taiga-ui/kit';

const TEXTFIELD_VALUE = signal('');

@Component({
    standalone: true,
    imports: [TuiCalendarRange],
    template: '<tui-calendar-range />',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TuiTextfieldComponent,
            useValue: {value: TEXTFIELD_VALUE},
        },
    ],
})
class Test {
    @ViewChild(TuiCalendarRange)
    public readonly calendar!: TuiCalendarRange;
}

describe('TuiCalendarRange textfield integration', () => {
    let fixture: ComponentFixture<Test>;
    let calendar: TuiCalendarRange;

    beforeEach(async () => {
        TEXTFIELD_VALUE.set('');
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
        calendar = fixture.componentInstance.calendar;
    });

    it('reflects unfinished range picking in textfield', () => {
        const day = new TuiDay(2025, 0, 1);

        calendar['onDayClick'](day);

        expect(TEXTFIELD_VALUE()).toBe(`01.01.2025${RANGE_SEPARATOR_CHAR}`);
    });

    it('commits unfinished range as single day on destroy', () => {
        const day = new TuiDay(2025, 0, 1);
        const range = new TuiDayRange(day, day);
        const valueChange = jest.fn();

        calendar.valueChange.subscribe(valueChange);
        calendar['onDayClick'](day);
        calendar.ngOnDestroy();

        expect(valueChange).toHaveBeenCalledWith(range);
    });
});
