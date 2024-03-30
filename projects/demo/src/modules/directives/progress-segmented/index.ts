import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemoModule} from '@demo/utils';
import type {TuiProgressBarComponent} from '@taiga-ui/kit';
import {TuiProgressModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemoModule, TuiProgressModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleComponent {
    protected value = 3;
    protected max = 5;
    protected segments = this.max;

    protected examples = ['Basic', 'Sizes', 'Colors', 'With labels', 'No round corners'];

    protected readonly sizeVariants: ReadonlyArray<TuiProgressBarComponent['size']> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    protected size: TuiProgressBarComponent['size'] = this.sizeVariants[2];

    protected readonly colorsVariants: readonly string[][] = [
        ['var(--tui-primary)'],
        ['#39b54a', '#ffd450', '#ffd450', '#fcc521', '#fab619', '#f8a34d', '#e01f19'],
        new Array(20).fill('').map((_, index) => `var(--tui-support-0${index + 1})`),
    ];

    protected colors: string[] = this.colorsVariants[0];

    protected get computedColors(): string[] {
        return this.colors.slice(0, this.segments);
    }
}
