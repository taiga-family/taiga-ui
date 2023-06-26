import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {TUI_ALWAYS_DASHED, TUI_ALWAYS_SOLID} from '@taiga-ui/addon-charts/constants';
import {TuiLineHandler, TuiLineType} from '@taiga-ui/addon-charts/types';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {Observable} from 'rxjs';

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
    axisX: TuiLineType = 'solid';

    @Input()
    axisXLabels: ReadonlyArray<string | null> = [];

    @Input()
    axisY: TuiLineType = 'solid';

    @Input()
    axisYInset = false;

    @Input()
    axisYLabels: readonly string[] = [];

    @Input()
    axisYName = '';

    @Input()
    axisYSecondaryInset = false;

    @Input()
    axisYSecondaryLabels: readonly string[] = [];

    @Input()
    axisYSecondaryName = '';

    @Input()
    horizontalLines = 0;

    @Input()
    horizontalLinesHandler: TuiLineHandler = TUI_ALWAYS_SOLID;

    @Input()
    verticalLines = 0;

    @Input()
    verticalLinesHandler: TuiLineHandler = TUI_ALWAYS_DASHED;

    @HostBinding('class._centered')
    get centeredXLabels(): boolean {
        return this.axisY === 'none';
    }

    constructor(@Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>) {}

    get hasXLabels(): boolean {
        return !!this.axisXLabels.length;
    }

    get hasYLabels(): boolean {
        return (!!this.axisYLabels.length && !this.axisYInset) || !!this.axisYName;
    }

    get hasYSecondaryLabels(): boolean {
        return (
            (!!this.axisYSecondaryLabels.length && !this.axisYSecondaryInset) ||
            !!this.axisYSecondaryName
        );
    }

    fallback(label: string | null): string {
        return label || CHAR_NO_BREAK_SPACE;
    }
}
