import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiWithAppearance} from '@taiga-ui/core/directives/appearance';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {TuiSurface} from '@taiga-ui/layout/components/surface';

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
    providers: [tuiAvatarOptionsProvider({size: 'l'})],
    hostDirectives: [TuiWithAppearance, TuiSurface],
})
export class TuiCardMedium {
    protected readonly nothing = tuiWithStyles(Styles);
}
