import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import type {SafeValue} from '@angular/platform-browser';
import {TuiBarComponent} from '@taiga-ui/addon-charts/components/bar';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

const PERCENT = 100;
const EMPTY_ARRAY: readonly number[] = [];
const FILLER_ARRAY: readonly number[] = [1];

@Component({
    standalone: true,
    selector: 'tui-bar-set',
    imports: [NgIf, NgForOf, NgTemplateOutlet, TuiBarComponent],
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
