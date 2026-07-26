import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiTextfieldOptionsProvider} from '@taiga-ui/core/components/textfield';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core/portals/dropdown';
import {tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';
import {tuiBadgeNotificationOptionsProvider} from '@taiga-ui/kit/components/badge-notification';

@Component({
    selector: 'header[tuiNavigationHeader]',
    template: '<ng-content />',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './header.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAvatarOptionsProvider({size: 's', appearance: 'secondary-grayscale'}),
        tuiBadgeNotificationOptionsProvider({size: 'xs'}),
        tuiBadgeOptionsProvider({size: 'm', appearance: 'primary'}),
        tuiButtonOptionsProvider({size: 's', appearance: 'flat-grayscale'}),
        tuiDropdownOptionsProvider({appearance: 'dropdown-navigation'}),
        tuiTextfieldOptionsProvider({size: signal('s')}),
        tuiHintOptionsProvider({appearance: 'floating'}),
    ],
    host: {'data-tui-version': TUI_VERSION, tuiTheme: 'dark'},
})
export class TuiHeaderComponent {}
