import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental/components/button';
import {
    tuiAvatarOptionsProvider,
    tuiBadgeNotificationOptionsProvider,
    tuiBadgeOptionsProvider,
} from '@taiga-ui/kit';

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
        tuiTheme: 'night',
    },
})
export class TuiHeaderComponent {}
