import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {type TuiLineHandler, type TuiLineType} from '@taiga-ui/addon-charts/types';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';

export const TUI_ALWAYS_DASHED: TuiLineHandler = () => 'dashed';
export const TUI_ALWAYS_DOTTED: TuiLineHandler = () => 'dotted';
export const TUI_ALWAYS_SOLID: TuiLineHandler = () => 'solid';
export const TUI_ALWAYS_NONE: TuiLineHandler = () => 'none';

@Component({
    selector: 'tui-axes',
    templateUrl: './axes.template.html',
    styleUrl: './axes.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        dir: 'ltr',
        '[class._centered]': 'centeredXLabels()',
    },
})
export class TuiAxes {
    protected readonly centeredXLabels = computed(() => this.axisY() === 'none');

    public readonly axisX = input<TuiLineType>('solid');

    public readonly axisXLabels = input<ReadonlyArray<string | null>>([]);

    public readonly axisY = input<TuiLineType>('solid');

    public readonly axisYInset = input(false);

    public readonly axisYLabels = input<readonly string[]>([]);

    public readonly axisYName = input('');

    public readonly axisYSecondaryInset = input(false);

    public readonly axisYSecondaryLabels = input<readonly string[]>([]);

    public readonly axisYSecondaryName = input('');

    public readonly horizontalLines = input(0);

    public readonly horizontalLinesHandler = input<TuiLineHandler>(TUI_ALWAYS_SOLID);

    public readonly verticalLines = input(0);

    /**
     * A function to handle vertical lines style.
     * Initially set to always dashed.
     */
    public readonly verticalLinesHandler = input<TuiLineHandler>(TUI_ALWAYS_DASHED);

    public readonly fallbackLabel = CHAR_NO_BREAK_SPACE;

    public readonly hasXLabels = computed(() => !!this.axisXLabels().length);

    public readonly hasYLabels = computed(() => {
        // keep this to prevent tracking loss on short circuits
        const yN = this.axisYName();

        return (this.axisYLabels().length && !this.axisYInset()) || !!yN;
    });

    public readonly hasYSecondaryLabels = computed(() => {
        // keep this to prevent tracking loss on short circuits
        const ySN = this.axisYSecondaryName();

        return (
            (this.axisYSecondaryLabels().length && !this.axisYSecondaryInset()) || !!ySN
        );
    });
}
