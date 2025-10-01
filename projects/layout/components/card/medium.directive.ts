import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrls: ['./card.style.less', './medium.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-card-medium'},
})
class Styles {}

@Directive({
    selector: '[tuiCardMedium]',
})
export class TuiCardMedium {
    protected readonly nothing = tuiWithStyles(Styles);
}
