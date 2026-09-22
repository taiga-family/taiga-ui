import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {RANGE_SEPARATOR_CHAR, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {provideTaiga, TUI_TEXTFIELD_VALUE} from '@taiga-ui/core';
import {TuiCalendarRange} from '@taiga-ui/kit';

const TEXTFIELD_VALUE = signal('');

describe('TuiCalendarRange textfield integration', () => {
    @Component({
        imports: [TuiCalendarRange],
        template: '<tui-calendar-range />',
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [{provide: TUI_TEXTFIELD_VALUE, useValue: TEXTFIELD_VALUE}],
    })
    class Test {
        public readonly calendar = viewChild.required(TuiCalendarRange);
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let calendar: TuiCalendarRange;

    beforeEach(async () => {
        TEXTFIELD_VALUE.set('');
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        calendar = testComponent.calendar();
    });

    it('reflects unfinished range picking in textfield', () => {
        const day = new TuiDay(2025, 0, 1);

        calendar['onDayClick'](day);

        expect(TEXTFIELD_VALUE()).toBe(`01.01.2025${RANGE_SEPARATOR_CHAR}`);
        expect(calendar.value()).toBeNull();
    });

    it('commits unfinished range as single day on destroy', () => {
        const day = new TuiDay(2025, 0, 1);
        const range = new TuiDayRange(day, day);

        calendar['onDayClick'](day);
        calendar.ngOnDestroy();

        expect(calendar.value()?.daySame(range)).toBe(true);
    });
});
