import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiWithAppearance} from '@taiga-ui/core/directives/appearance';

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
    hostDirectives: [TuiWithAppearance],
    host: {
        tuiCardLarge: '',
        '[attr.data-space]': 'space() || "normal"',
    },
})
export class TuiCardLarge {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly space = input<'' | 'compact' | 'normal'>('normal', {
        alias: 'tuiCardLarge',
    });
}
