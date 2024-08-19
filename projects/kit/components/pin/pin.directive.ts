import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
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
        '[class._open]': 'open',
    },
})
export class TuiPin {
    protected readonly nothing = tuiWithStyles(TuiPinStyles);

    @Input()
    public open = false;
}
