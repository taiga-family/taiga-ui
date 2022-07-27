import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {DomSanitizer, SafeValue} from '@angular/platform-browser';
import {TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts/constants';
import {TuiColorHandler} from '@taiga-ui/addon-charts/types';
import {tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {colorFallback, TuiSizeL, TuiSizeS} from '@taiga-ui/core';

const PERCENT = 100;
const EMPTY_ARRAY: readonly number[] = [];
const FILLER_ARRAY: readonly number[] = [1];

// TODO: 3.0 Remove sanitizer when Angular version is bumped
@Component({
    selector: `tui-bar-set`,
    templateUrl: `./bar-set.template.html`,
    styleUrls: [`./bar-set.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBarSetComponent {
    @Input()
    @tuiDefaultProp()
    value: readonly number[] = [];

    @Input()
    @tuiDefaultProp()
    colorHandler: TuiColorHandler = TUI_DEFAULT_COLOR_HANDLER;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL | null = `m`;

    @Input()
    @tuiDefaultProp()
    collapsed = false;

    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}

    get computedValue(): readonly number[] {
        return this.collapsed ? FILLER_ARRAY : this.value;
    }

    get computedSegments(): readonly number[] {
        return this.collapsed ? this.value : EMPTY_ARRAY;
    }

    get computedSize(): TuiSizeS | TuiSizeL {
        return this.size || `m`;
    }

    getHeight(value: number): number {
        return Math.abs((PERCENT * value) / this.getLargest(this.computedValue));
    }

    getColor(index: number): SafeValue {
        return this.sanitizer.bypassSecurityTrustStyle(
            `var(--tui-chart-${index}, ${colorFallback(this.colorHandler(index))})`,
        );
    }

    @tuiPure
    private getLargest(value: readonly number[]): number {
        return value.reduce((a, b) => (a > b ? a : b), 0);
    }
}
