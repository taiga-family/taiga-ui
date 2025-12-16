import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {type TuiLineHandler} from '@taiga-ui/addon-charts/types';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';

export const TUI_ALWAYS_DASHED: TuiLineHandler = (index) =>
    (index && 'dashed') || 'solid';
export const TUI_ALWAYS_DOTTED: TuiLineHandler = (index) =>
    (index && 'dotted') || 'solid';
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
    public readonly axisXLabels = input<ReadonlyArray<string | null>>([]);
    public readonly axisYInset = input(false);
    public readonly axisYLabels = input<readonly string[]>([]);
    public readonly axisYName = input('');
    public readonly axisYSecondaryInset = input(false);
    public readonly axisYSecondaryLabels = input<readonly string[]>([]);
    public readonly axisYSecondaryName = input('');
    public readonly centeredXLabels = input(false);
    public readonly horizontalLines = input(1);
    public readonly horizontalLinesHandler = input<TuiLineHandler>(TUI_ALWAYS_SOLID);
    public readonly verticalLines = input(1);
    public readonly verticalLinesHandler = input<TuiLineHandler>(TUI_ALWAYS_DASHED);

    public readonly fallbackLabel = CHAR_NO_BREAK_SPACE;

    public readonly hasXLabels = computed(() => !!this.axisXLabels().length);

    public readonly hasYLabels = computed(
        () => (this.axisYLabels().length && !this.axisYInset()) || !!this.axisYName(),
    );

    public readonly hasYSecondaryLabels = computed(
        () =>
            (this.axisYSecondaryLabels().length && !this.axisYSecondaryInset()) ||
            !!this.axisYSecondaryName(),
    );
}
