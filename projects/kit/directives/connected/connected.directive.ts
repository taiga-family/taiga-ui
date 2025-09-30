import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrls: ['./connected.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-connected'},
})
class Styles {}

@Directive({
    standalone: true,
    selector: '[tuiConnected]',
})
export class TuiConnected {
    protected readonly nothing = tuiWithStyles(Styles);
}
