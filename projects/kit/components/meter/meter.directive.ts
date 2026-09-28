import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/meter.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-meter-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: 'meter[tuiMeter]',
    host: {
        'data-tui-version': TUI_VERSION,
        '[attr.high]': 'high()',
        '[attr.low]': 'low()',
        '[attr.max]': 'max()',
        '[attr.min]': 'min()',
        '[attr.optimum]': 'optimum()',
        '[attr.value]': 'value()',
        '[style.--t-high]': 'high()',
        '[style.--t-low]': 'low()',
        '[style.--t-max]': 'max()',
        '[style.--t-min]': 'min()',
        '[style.--t-optimum]': 'optimum()',
        '[style.--t-value]': 'value()',
    },
})
export class TuiMeter {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly min = input('0');
    public readonly max = input('1');
    public readonly low = input('0');
    public readonly high = input('1');
    public readonly optimum = input('0.5');
    public readonly value = input('0');
}
