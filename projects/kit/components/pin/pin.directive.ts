import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    HostBinding,
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
})
export class TuiPin {
    protected readonly nothing = tuiWithStyles(TuiPinStyles);

    @Input()
    @HostBinding('class._open')
    public open = false;
}
