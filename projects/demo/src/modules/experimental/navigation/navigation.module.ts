import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiExpandModule,
    TuiIconComponent,
    TuiLinkModule,
    TuiNotificationModule,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {
    TuiButtonModule,
    TuiCardModule,
    TuiNavigationModule,
    TuiSurfaceModule,
    TuiToggleModule,
} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiBreadcrumbsModule,
    TuiFadeDirective,
    TuiTabsModule,
} from '@taiga-ui/kit';
import {TuiHeaderDirective} from '@taiga-ui/layout';

import {TuiNavigationExample1} from './examples/1';
import {TuiNavigationExample2} from './examples/2';
import {TuiNavigationExample3} from './examples/3';
import {ExampleTuiNavigationComponent} from './navigation.component';

@NgModule({
    imports: [
        tuiGetDocModules(ExampleTuiNavigationComponent),
        CommonModule,
        FormsModule,
        TuiNotificationModule,
        TuiNavigationModule,
        TuiAvatarComponent,
        TuiButtonModule,
        TuiIconComponent,
        TuiBadgeDirective,
        TuiBadgeNotificationComponent,
        TuiDropdownModule,
        TuiDataListModule,
        TuiFadeDirective,
        TuiExpandModule,
        TuiTabsModule,
        TuiCardModule,
        TuiSurfaceModule,
        TuiTitleDirective,
        TuiHeaderDirective,
        TuiRepeatTimesModule,
        TuiAppearanceDirective,
        TuiToggleModule,
        TuiBreadcrumbsModule,
        TuiLinkModule,
    ],
    declarations: [
        ExampleTuiNavigationComponent,
        TuiNavigationExample1,
        TuiNavigationExample2,
        TuiNavigationExample3,
    ],
    exports: [ExampleTuiNavigationComponent],
})
export class ExampleTuiNavigationModule {}
