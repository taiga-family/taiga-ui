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
    styleUrls: ['./card.style.less', './medium.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-card-medium',
    },
})
class TuiCardMediumStyles {}

@Directive({
    standalone: true,
    selector: '[tuiCardMedium]',
})
export class TuiCardMedium {
    protected readonly nothing = tuiWithStyles(TuiCardMediumStyles);
}
