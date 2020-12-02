import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts/constants';
import {TuiColorHandler} from '@taiga-ui/addon-charts/types';
import {sum, tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

const PERCENT = 100;
const EMPTY_ARRAY: ReadonlyArray<number> = [];
const FILLER_ARRAY: ReadonlyArray<number> = [1];

@Component({
    selector: 'tui-bar-set',
    templateUrl: './bar-set.template.html',
    styleUrls: ['./bar-set.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBarSetComponent {
    @Input()
    @tuiDefaultProp()
    value: ReadonlyArray<number> = [];

    @Input()
    @tuiDefaultProp()
    colorHandler: TuiColorHandler = TUI_DEFAULT_COLOR_HANDLER;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL | null = 'm';

    @Input()
    @tuiDefaultProp()
    collapsed = false;

    get computedValue(): ReadonlyArray<number> {
        return this.collapsed ? FILLER_ARRAY : this.value;
    }

    get computedSegments(): ReadonlyArray<number> {
        return this.collapsed ? this.value : EMPTY_ARRAY;
    }

    get computedSize(): TuiSizeS | TuiSizeL {
        return this.size || 'm';
    }

    get sum(): number {
        return this.getSum(this.value);
    }

    get largest(): number {
        return this.getLargest(this.computedValue);
    }

    getHeight(value: number): number {
        return Math.abs((PERCENT * value) / this.largest);
    }

    @tuiPure
    private getSum(value: ReadonlyArray<number>): number {
        return sum(...value);
    }

    @tuiPure
    private getLargest(value: ReadonlyArray<number>): number {
        return value.reduce((a, b) => (a > b ? a : b), 0);
    }
}
