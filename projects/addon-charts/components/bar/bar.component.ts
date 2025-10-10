import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {tuiSum} from '@taiga-ui/cdk/utils/math';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-bar',
    templateUrl: './bar.template.html',
    styleUrl: './bar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiBar {
    @Input()
    public value: readonly number[] = [];

    @Input()
    public size: TuiSizeL | TuiSizeS = 'm';

    protected getHeight(value: number): number {
        return (100 * value) / this.getSum(this.value);
    }

    @tuiPure
    private getSum(value: readonly number[]): number {
        return tuiSum(...value);
    }
}
