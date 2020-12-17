import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TUI_ALWAYS_DASHED, TUI_ALWAYS_SOLID} from '@taiga-ui/addon-charts/constants';
import {TuiLineType} from '@taiga-ui/addon-charts/enums';
import {TuiLineHandler} from '@taiga-ui/addon-charts/types';
import {CHAR_NO_BREAK_SPACE, tuiDefaultProp} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-axes',
    templateUrl: './axes.template.html',
    styleUrls: ['./axes.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAxesComponent {
    @Input()
    @tuiDefaultProp()
    axisX: TuiLineType = TuiLineType.Solid;

    @Input()
    @tuiDefaultProp()
    axisXLabels: ReadonlyArray<string | null> = [];

    @Input()
    @tuiDefaultProp()
    axisY: TuiLineType = TuiLineType.Solid;

    @Input()
    @tuiDefaultProp()
    axisYInset = false;

    @Input()
    @tuiDefaultProp()
    axisYLabels: readonly string[] = [];

    @Input()
    @tuiDefaultProp()
    axisYName = '';

    @Input()
    @tuiDefaultProp()
    axisYSecondaryInset = false;

    @Input()
    @tuiDefaultProp()
    axisYSecondaryLabels: readonly string[] = [];

    @Input()
    @tuiDefaultProp()
    axisYSecondaryName = '';

    @Input()
    @tuiDefaultProp()
    horizontalLines = 0;

    @Input()
    @tuiDefaultProp()
    horizontalLinesHandler: TuiLineHandler = TUI_ALWAYS_SOLID;

    @Input()
    @tuiDefaultProp()
    verticalLines = 0;

    @Input()
    @tuiDefaultProp()
    verticalLinesHandler: TuiLineHandler = TUI_ALWAYS_DASHED;

    @HostBinding('class._centered')
    get centeredXLabels(): boolean {
        return this.axisY === TuiLineType.None;
    }

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
