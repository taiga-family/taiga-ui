import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './connected.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-connected'},
})
class Styles {}

@Directive({
    selector: '[tuiConnected]',
})
export class TuiConnected {
    protected readonly nothing = tuiWithStyles(Styles);
}
