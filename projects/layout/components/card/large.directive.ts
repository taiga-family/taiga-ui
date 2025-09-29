import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';

@Component({
    template: '',
    styleUrls: ['./card.style.less', './large.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-card-large'},
})
class Styles {}

@Directive({
    selector: '[tuiCardLarge]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {
        tuiCardLarge: '',
        '[attr.data-space]': 'tuiCardLarge() || "normal"',
    },
})
export class TuiCardLarge {
    public readonly tuiCardLarge = input<'' | 'compact' | 'normal'>('normal');
}
