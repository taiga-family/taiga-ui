import {Component} from '@angular/core';

@Component({
    selector: '[tuiProgressBar]',
    template: '',
    styleUrls: ['./progress-bar.component.less'],
    host: {
        '[style.--tui-progress-color]': 'color',
        '[style.--tui-progress-color-old-edge]': 'oldEdgeColor',
    },
})
export class TuiProgressBarComponent {
    oldEdgeColor = 'var(--tui-primary)';
    color = 'linear-gradient(to left, lime 25%, red 25% 50%, cyan 50% 75%, yellow 75%)';
}
