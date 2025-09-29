import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

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
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
})
export class TuiCardMedium {}
