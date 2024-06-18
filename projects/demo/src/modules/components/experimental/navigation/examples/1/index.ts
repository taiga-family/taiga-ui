import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiDropdownPositionSidedDirective,
    TuiExpand,
    TuiIcon,
    TuiOptionComponent,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiNavigationModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiChevron,
    TuiFadeDirective,
    TuiTabDirective,
    TuiTabsHorizontalDirective,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiNavigationModule,
        TuiButton,
        TuiIcon,
        TuiChevron,
        TuiDropdownOpenDirective,
        TuiDropdownDirective,
        TuiFadeDirective,
        TuiDataListComponent,
        TuiOptionComponent,
        TuiBadgeNotificationComponent,
        TuiAvatarComponent,
        RouterLink,
        RouterLinkActive,
        TuiAppearance,
        TuiDropdownPositionSidedDirective,
        TuiExpand,
        TuiBadgeDirective,
        TuiTabsHorizontalDirective,
        TuiTabDirective,
        TuiRepeatTimes,
        TuiCardLarge,
        TuiHeader,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected expanded = false;
    protected submenu = false;
    protected readonly routes = DemoRoute;
}
