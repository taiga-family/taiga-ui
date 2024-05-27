import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiButtonDirective,
    TuiIconComponent,
    TuiLinkDirective,
    TuiSurfaceDirective,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {TuiNavigationModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBreadcrumbsModule,
    TuiTabDirective,
    TuiTabsHorizontalDirective,
} from '@taiga-ui/kit';
import {TuiCardLargeDirective, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiNavigationModule,
        TuiIconComponent,
        TuiAvatarComponent,
        TuiBreadcrumbsModule,
        TuiLinkDirective,
        TuiAppearanceDirective,
        TuiCardLargeDirective,
        TuiHeaderDirective,
        TuiTitleDirective,
        TuiButtonDirective,
        TuiTabsHorizontalDirective,
        TuiTabDirective,
        TuiSurfaceDirective,
        TuiRepeatTimesDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
