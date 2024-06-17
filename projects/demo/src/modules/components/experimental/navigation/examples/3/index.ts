import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItemDirective, TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiButton,
    TuiIcon,
    TuiLink,
    TuiSurfaceDirective,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {TuiNavigationModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBreadcrumbsComponent,
    TuiTabDirective,
    TuiTabsHorizontalDirective,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiNavigationModule,
        TuiIcon,
        TuiAvatarComponent,
        TuiBreadcrumbsComponent,
        TuiItemDirective,
        TuiLink,
        TuiAppearanceDirective,
        TuiCardLarge,
        TuiHeaderDirective,
        TuiTitleDirective,
        TuiButton,
        TuiTabsHorizontalDirective,
        TuiTabDirective,
        TuiSurfaceDirective,
        TuiRepeatTimes,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
