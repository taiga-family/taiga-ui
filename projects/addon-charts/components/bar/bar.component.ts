import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts/constants';
import {TuiColorHandler} from '@taiga-ui/addon-charts/types';
import {sum, tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

const PERCENT = 100;

@Component({
    selector: 'tui-bar',
    templateUrl: './bar.template.html',
    styleUrls: ['./bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBarComponent {
    @Input()
    @tuiDefaultProp()
    value: ReadonlyArray<number> = [];

    @Input()
    @tuiDefaultProp()
    colorHandler: TuiColorHandler = TUI_DEFAULT_COLOR_HANDLER;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = 'm';

    get sum(): number {
        return this.getSum(this.value);
    }

    get largest(): number {
        return this.getLargest(this.value);
    }

    getHeight(value: number): number {
        return (PERCENT * value) / this.sum;
    }

    @tuiPure
    private getSum(value: ReadonlyArray<number>): number {
        return sum(...value);
    }

    @tuiPure
    private getLargest(value: ReadonlyArray<number>): number {
        return Math.max(...value);
    }
}
