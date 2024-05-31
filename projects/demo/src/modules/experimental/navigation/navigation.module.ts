import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiExpandModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {
    TuiAppearanceModule,
    TuiAvatarModule,
    TuiBadgeModule,
    TuiBadgeNotificationModule,
    TuiButtonModule,
    TuiCardModule,
    TuiFadeModule,
    TuiHeaderModule,
    TuiIconModule,
    TuiNavigationModule,
    TuiSurfaceModule,
    TuiTitleModule,
    TuiToggleModule,
} from '@taiga-ui/experimental';
import {TuiBreadcrumbsModule, TuiTabsModule} from '@taiga-ui/kit';

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
        TuiAvatarModule,
        TuiButtonModule,
        TuiIconModule,
        TuiBadgeModule,
        TuiBadgeNotificationModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
        TuiFadeModule,
        TuiExpandModule,
        TuiTabsModule,
        TuiCardModule,
        TuiSurfaceModule,
        TuiTitleModule,
        TuiHeaderModule,
        TuiRepeatTimesModule,
        TuiAppearanceModule,
        TuiToggleModule,
        TuiBreadcrumbsModule,
        TuiLinkModule,
        TuiHintModule,
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
