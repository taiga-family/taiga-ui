import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./connected.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-connected-styles',
    },
})
class TuiConnectedStyles {}

@Directive({
    standalone: true,
    selector: '[tuiConnected]',
    host: {
        tuiConnected: '',
    },
})
export class TuiConnected {
    protected readonly nothing = tuiWithStyles(TuiConnectedStyles);
}
