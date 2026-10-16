import {ChangeDetectionStrategy, Component, type Type} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiAxes, TuiLineChart, TuiLineChartHint} from '@taiga-ui/addon-charts';
import {TuiHintPosition, type TuiPoint} from '@taiga-ui/core';

describe('LineChart', () => {
    describe('[tuiLineChartHint]', () => {
        const value: readonly TuiPoint[] = [
            [50, 50],
            [100, 75],
            [150, 50],
        ];

        @Component({
            imports: [TuiAxes, TuiLineChart, TuiLineChartHint],
            template: `
                <tui-axes tuiLineChartHint="Hint">
                    <tui-line-chart
                        [height]="200"
                        [value]="value"
                        [width]="400"
                    />
                </tui-axes>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class WithoutDirection {
            protected readonly value = value;
        }

        @Component({
            imports: [TuiAxes, TuiLineChart, TuiLineChartHint],
            template: `
                <tui-axes
                    tuiHintDirection="start"
                    tuiLineChartHint="Hint"
                >
                    <tui-line-chart
                        [height]="200"
                        [value]="value"
                        [width]="400"
                    />
                </tui-axes>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class WithDirection {
            protected readonly value = value;
        }

        const getDirections = (component: Type<unknown>): unknown[] => {
            const fixture = TestBed.createComponent(component);

            fixture.detectChanges();

            return fixture.debugElement
                .queryAll(By.css('.t-column'))
                .map((column) => column.injector.get(TuiHintPosition).direction());
        };

        it('keeps default direction of the chart', () => {
            expect(getDirections(WithoutDirection)).toEqual(['top', 'top', 'top']);
        });

        it('respects [tuiHintDirection] on the same host', () => {
            expect(getDirections(WithDirection)).toEqual(['start', 'start', 'start']);
        });
    });
});
