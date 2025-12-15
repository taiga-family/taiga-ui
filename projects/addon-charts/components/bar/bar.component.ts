import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {tuiSum} from '@taiga-ui/cdk/utils/math';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-bar',
    templateUrl: './bar.template.html',
    styleUrl: './bar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiBar {
    private readonly sum = computed(() => tuiSum(...this.value()));

    public readonly value = input<readonly number[]>([]);
    public readonly size = input<TuiSizeL | TuiSizeS>('m');

    protected getHeight(value: number): number {
        return (100 * value) / this.sum();
    }
}
