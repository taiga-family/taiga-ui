import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiLegendItem, TuiRingChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {TuiHovered, tuiSum} from '@taiga-ui/cdk';

@Component({
    imports: [TuiAmountPipe, TuiHovered, TuiLegendItem, TuiRingChart],
    template: `
        <tui-ring-chart
            [value]="value"
            [(activeItemIndex)]="index"
        >
            {{ sum | tuiAmount: 'USD' }}
            <div>Total</div>
        </tui-ring-chart>
        @for (label of labels; track $index) {
            @let formatted = value[$index] || 0 | tuiAmount: 'USD';

            <tui-legend-item
                [active]="index() === $index"
                [color]="'var(--tui-chart-categorical-0'.concat($index.toString())"
                [text]="label"
                (click)="sheets.open(formatted, {label: label}).subscribe()"
                (tuiHoveredChange)="index.set($event ? $index : -1)"
            >
                <span>{{ formatted }}</span>
            </tui-legend-item>
        }
    `,
    styles: `
        :host {
            display: grid;
            padding: 2rem;
            justify-items: center;
            grid-template-rows: 11rem;
            gap: 0.5rem;
        }

        [tuiTitle] {
            text-align: center;
            color: var(--tui-text-primary);
        }
    `,
    changeDetection,
})
export class Popout {
    protected readonly sheets = inject(TuiSheetDialogService);
    protected readonly index = signal(-1);
    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly sum = tuiSum(...this.value);
    protected readonly labels = ['Food', 'Cafe', 'OSS', 'Taxi', 'Other'];
}
