import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiButtonDirective,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiDropdownPositionSidedDirective,
    TuiExpand,
    TuiIconComponent,
    TuiOptionComponent,
    TuiSurfaceDirective,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {TuiNavigationModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiChevronDirective,
    TuiFadeDirective,
    TuiTabDirective,
    TuiTabsHorizontalDirective,
} from '@taiga-ui/kit';
import {TuiCardLargeDirective, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiNavigationModule,
        TuiButtonDirective,
        TuiIconComponent,
        TuiChevronDirective,
        TuiDropdownOpenDirective,
        TuiDropdownDirective,
        TuiFadeDirective,
        TuiDataListComponent,
        TuiOptionComponent,
        TuiBadgeNotificationComponent,
        TuiAvatarComponent,
        RouterLink,
        RouterLinkActive,
        TuiAppearanceDirective,
        TuiDropdownPositionSidedDirective,
        TuiExpand,
        TuiBadgeDirective,
        TuiTabsHorizontalDirective,
        TuiTabDirective,
        TuiRepeatTimesDirective,
        TuiCardLargeDirective,
        TuiHeaderDirective,
        TuiSurfaceDirective,
        TuiTitleDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected open = false;
    protected expanded = false;
    protected submenu = false;
    protected readonly routes = DemoRoute;
}
