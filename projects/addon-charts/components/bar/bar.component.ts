import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {tuiSum} from '@taiga-ui/cdk/utils/math';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-bar',
    templateUrl: './bar.template.html',
    styleUrl: './bar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'[attr.data-size]': 'size()'},
})
export class TuiBar {
    public readonly value = input<readonly number[]>([]);
    public readonly size = input<TuiSizeL | TuiSizeS>('m');
    private readonly absoluteSum = computed(() => tuiSum(...this.value().map(Math.abs)));

    protected readonly segments = computed(() => {
        const sum = this.absoluteSum();

        const items = this.value().map((value, index) => ({
            value,
            index,
            height: sum ? Math.abs((100 * value) / sum) : 0,
        }));

        return [
            ...items.filter(({value}) => value < 0),
            ...items.filter(({value}) => value >= 0),
        ];
    });
}
