import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core/directives/dropdown';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components/badge';
import {tuiBadgeNotificationOptionsProvider} from '@taiga-ui/kit/components/badge-notification';

@Component({
    selector: 'header[tuiNavigationHeader]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./header.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAvatarOptionsProvider({size: 's', appearance: 'secondary'}),
        tuiBadgeNotificationOptionsProvider({size: 'xs'}),
        tuiBadgeOptionsProvider({size: 'm', appearance: 'primary'}),
        tuiButtonOptionsProvider({size: 's', appearance: 'flat'}),
        tuiDropdownOptionsProvider({appearance: 'dropdown-navigation'}),
    ],
    host: {
        tuiTheme: 'dark',
    },
})
export class TuiHeaderComponent {}
