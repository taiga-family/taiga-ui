import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {TUI_ALWAYS_DASHED, TUI_ALWAYS_SOLID} from '@taiga-ui/addon-charts/constants';
import {TuiLineHandler, TuiLineType} from '@taiga-ui/addon-charts/types';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE} from '@taiga-ui/core';

@Component({
    selector: 'tui-axes',
    templateUrl: './axes.template.html',
    styleUrls: ['./axes.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiAxesComponent {
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

    @HostBinding('class._centered')
    protected get centeredXLabels(): boolean {
        return this.axisY === 'none';
    }

    protected readonly mode$ = inject(TUI_MODE);

    protected get hasXLabels(): boolean {
        return !!this.axisXLabels.length;
    }

    protected get hasYLabels(): boolean {
        return (!!this.axisYLabels.length && !this.axisYInset) || !!this.axisYName;
    }

    protected get hasYSecondaryLabels(): boolean {
        return (
            (!!this.axisYSecondaryLabels.length && !this.axisYSecondaryInset) ||
            !!this.axisYSecondaryName
        );
    }

    protected fallback(label: string | null): string {
        return label || CHAR_NO_BREAK_SPACE;
    }
}
