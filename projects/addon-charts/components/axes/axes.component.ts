import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import type {TuiLineHandler, TuiLineType} from '@taiga-ui/addon-charts/types';
import {CHAR_NO_BREAK_SPACE, TuiRepeatTimes} from '@taiga-ui/cdk';

export const TUI_ALWAYS_DASHED: TuiLineHandler = () => 'dashed';
export const TUI_ALWAYS_DOTTED: TuiLineHandler = () => 'dotted';
export const TUI_ALWAYS_SOLID: TuiLineHandler = () => 'solid';
export const TUI_ALWAYS_NONE: TuiLineHandler = () => 'none';

@Component({
    standalone: true,
    selector: 'tui-axes',
    imports: [NgIf, NgForOf, TuiRepeatTimes],
    templateUrl: './axes.template.html',
    styleUrls: ['./axes.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    @HostBinding('class._centered')
    protected get centeredXLabels(): boolean {
        return this.axisY === 'none';
    }
}
