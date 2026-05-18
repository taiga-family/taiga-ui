import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/pin.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-pin',
    },
})
class TuiPinStyles {}

@Directive({
    standalone: true,
    selector: 'tui-pin,[tuiPin]',
    host: {
        tuiPinV: TUI_VERSION,
        '[class._open]': 'open',
    },
})
export class TuiPin {
    protected readonly nothing = tuiWithStyles(TuiPinStyles);

    @Input()
    public open = false;
}
