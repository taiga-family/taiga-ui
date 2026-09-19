import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiLineDaysChart} from '@taiga-ui/addon-charts';
import {TuiDay} from '@taiga-ui/cdk';

describe('LineDaysChart', () => {
    let fixture: ComponentFixture<TuiLineDaysChart>;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [TuiLineDaysChart]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TuiLineDaysChart);
        fixture.componentRef.setInput('dots', true);
        fixture.componentRef.setInput('height', 100);
    });

    it('renders each supplied point once across months of different lengths', () => {
        fixture.componentRef.setInput('value', [
            [new TuiDay(2021, 3, 30), 10],
            [new TuiDay(2021, 4, 15), 20],
        ]);
        fixture.detectChanges();

        const dots = fixture.debugElement.queryAll(By.css('.t-dot'));

        expect(dots).toHaveLength(2);
        expect(
            Number.parseFloat(dots[0]?.styles['inset-inline-start'] ?? ''),
        ).toBeCloseTo((100 * 29) / 60);
        expect(
            Number.parseFloat(dots[1]?.styles['inset-inline-start'] ?? ''),
        ).toBeCloseTo(50 + (50 * 14) / 31);
    });

    it.each([2023, 2024])('keeps calendar coordinates in February %i', (year) => {
        const day = new TuiDay(year, 1, 28);

        fixture.componentRef.setInput('value', [
            [day, 10],
            [new TuiDay(year, 2, 1), 20],
        ]);
        fixture.detectChanges();

        const dots = fixture.debugElement.queryAll(By.css('.t-dot'));

        expect(dots).toHaveLength(2);
        expect(
            Number.parseFloat(dots[0]?.styles['inset-inline-start'] ?? ''),
        ).toBeCloseTo((50 * 27) / day.daysCount);
        expect(Number.parseFloat(dots[1]?.styles['inset-inline-start'] ?? '')).toBe(50);
    });

    it('resolves hover and hint context after missing days and an empty month', () => {
        const start = new TuiDay(2023, 11, 20);
        const end = new TuiDay(2024, 1, 15);

        fixture.componentRef.setInput('value', [
            [start, 10],
            [end, 20],
        ]);
        fixture.detectChanges();

        const component = fixture.componentInstance;

        component.onHovered(end);

        const active = component.charts().filter((chart) => chart.hovered() >= 0);
        const chart = active[0];

        expect(active).toHaveLength(1);

        if (!chart) {
            throw new Error('Expected a hovered chart');
        }

        expect(component.getContext(chart.hovered(), chart)).toEqual([end, 20]);
        expect(fixture.debugElement.queryAll(By.css('.t-dot'))).toHaveLength(2);

        component.onHovered(Number.NaN);

        expect(component.charts().every((item) => Number.isNaN(item.hovered()))).toBe(
            true,
        );
    });

    it('handles an empty value and subsequent updates', () => {
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('.t-dot'))).toHaveLength(0);

        fixture.componentRef.setInput('value', [[new TuiDay(2024, 0, 1), 10]]);
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('.t-dot'))).toHaveLength(1);

        fixture.componentRef.setInput('value', []);
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('.t-dot'))).toHaveLength(0);
    });

    it('maps fractional coordinates back to dates for labels and pointer hover', () => {
        const day = new TuiDay(2024, 1, 15);
        const stringify = jest.fn(String);

        fixture.componentRef.setInput('value', [
            [new TuiDay(2024, 0, 31), 10],
            [day, 20],
        ]);
        fixture.componentRef.setInput('xStringify', stringify);
        fixture.detectChanges();

        const component = fixture.componentInstance;
        const chart = component.charts()[0];

        if (!chart) {
            throw new Error('Expected a line chart');
        }

        component.raise(1, chart);
        fixture.detectChanges();

        expect(chart.hovered()).toBe(1);
        expect(component.getContext(1, chart)).toEqual([day, 20]);
        expect(stringify).toHaveBeenCalledWith(day);

        component.onHovered(day.append({day: 1}));

        expect(chart.hovered()).toBe(-1);
    });
});
