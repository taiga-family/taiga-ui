import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiBar} from '@taiga-ui/addon-charts/components/bar';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

const PERCENT = 100;
const EMPTY_ARRAY: readonly number[] = [];
const FILLER_ARRAY: readonly number[] = [1];

@Component({
    standalone: true,
    selector: 'tui-bar-set',
    imports: [NgForOf, NgIf, NgTemplateOutlet, TuiBar],
    templateUrl: './bar-set.template.html',
    styleUrls: ['./bar-set.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBarSet {
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

    @tuiPure
    private getLargest(value: readonly number[]): number {
        return value.some((a) => a > 0)
            ? value.reduce((a, b) => (a > b ? a : b), 0)
            : Math.abs(value.reduce((a, b) => (a < b ? a : b), 0));
    }
}
