import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {type SafeValue} from '@angular/platform-browser';
import {tuiPure} from '@taiga-ui/cdk';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';

const PERCENT = 100;
const EMPTY_ARRAY: readonly number[] = [];
const FILLER_ARRAY: readonly number[] = [1];

@Component({
    selector: 'tui-bar-set',
    templateUrl: './bar-set.template.html',
    styleUrls: ['./bar-set.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBarSetComponent {
    @Input()
    public value: readonly number[] = [];

    @Input()
    public size: TuiSizeL | TuiSizeS | null = 'm';

    @Input()
    public collapsed = false;

    protected get computedValue(): readonly number[] {
        return this.collapsed ? FILLER_ARRAY : this.value;
    }

    protected get computedSegments(): readonly number[] {
        return this.collapsed ? this.value : EMPTY_ARRAY;
    }

    protected get computedSize(): TuiSizeL | TuiSizeS {
        return this.size || 'm';
    }

    protected getHeight(value: number): number {
        return Math.abs((PERCENT * value) / this.getLargest(this.computedValue));
    }

    protected getColor(index: number): SafeValue {
        return `var(--tui-chart-${index})`;
    }

    @tuiPure
    private getLargest(value: readonly number[]): number {
        return value.some(a => a > 0)
            ? value.reduce((a, b) => (a > b ? a : b), 0)
            : Math.abs(value.reduce((a, b) => (a < b ? a : b), 0));
    }
}
