import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {type TuiLineHandler, type TuiLineType} from '@taiga-ui/addon-charts/types';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';

export const TUI_ALWAYS_DASHED: TuiLineHandler = () => 'dashed';
export const TUI_ALWAYS_DOTTED: TuiLineHandler = () => 'dotted';
export const TUI_ALWAYS_SOLID: TuiLineHandler = () => 'solid';
export const TUI_ALWAYS_NONE: TuiLineHandler = () => 'none';

@Component({
    selector: 'tui-axes',
    imports: [TuiRepeatTimes],
    templateUrl: './axes.template.html',
    styleUrl: './axes.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        dir: 'ltr',
        '[class._centered]': 'centeredXLabels',
    },
})
export class TuiAxes {
    @Input()
    public axisX: TuiLineType = 'solid';

    @Input()
    public axisXLabels: ReadonlyArray<string | null> = [];

    @Input()
    public axisY: TuiLineType = 'solid';

    @Input()
    public axisYInset = false;

    @Input()
    public axisYLabels: readonly string[] = [];

    @Input()
    public axisYName = '';

    @Input()
    public axisYSecondaryInset = false;

    @Input()
    public axisYSecondaryLabels: readonly string[] = [];

    @Input()
    public axisYSecondaryName = '';

    @Input()
    public horizontalLines = 0;

    @Input()
    public horizontalLinesHandler: TuiLineHandler = TUI_ALWAYS_SOLID;

    @Input()
    public verticalLines = 0;

    @Input()
    public verticalLinesHandler: TuiLineHandler = TUI_ALWAYS_DASHED;

    public get hasXLabels(): boolean {
        return !!this.axisXLabels.length;
    }

    public get hasYLabels(): boolean {
        return (!!this.axisYLabels.length && !this.axisYInset) || !!this.axisYName;
    }

    public get hasYSecondaryLabels(): boolean {
        return (
            (!!this.axisYSecondaryLabels.length && !this.axisYSecondaryInset) ||
            !!this.axisYSecondaryName
        );
    }

    public fallback(label: string | null): string {
        return label || CHAR_NO_BREAK_SPACE;
    }

    protected get centeredXLabels(): boolean {
        return this.axisY === 'none';
    }
}
