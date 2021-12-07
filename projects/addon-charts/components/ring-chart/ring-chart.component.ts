import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import {TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts/constants';
import {TuiRingChartContext} from '@taiga-ui/addon-charts/interfaces';
import {TuiColorHandler} from '@taiga-ui/addon-charts/types';
import {tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-ring-chart',
    templateUrl: './ring-chart.template.html',
    styleUrls: ['./ring-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiRingChartComponent {
    @Input()
    @tuiDefaultProp()
    value: readonly number[] = [];

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeXL = 'm';

    @Input()
    @tuiDefaultProp()
    colorHandler: TuiColorHandler = TUI_DEFAULT_COLOR_HANDLER;

    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent<TuiRingChartContext> = '';

    @Input()
    @tuiDefaultProp()
    masked = true;

    @Input()
    @tuiDefaultProp()
    activeItemIndex = NaN;

    @Output()
    activeItemIndexChange = new EventEmitter<number>();

    get hasContent(): boolean {
        return this.size !== 's' && !!this.content;
    }

    get contentContext(): TuiRingChartContext {
        return this.getContentContext(this.activeItemIndex, this.value);
    }

    onActiveItemIndexChange(index: number) {
        this.updateActiveItemIndex(index);
    }

    @tuiPure
    private getContentContext(
        $implicit: number,
        value: readonly number[],
    ): TuiRingChartContext {
        return {$implicit, value};
    }

    private updateActiveItemIndex(index: number) {
        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
}
