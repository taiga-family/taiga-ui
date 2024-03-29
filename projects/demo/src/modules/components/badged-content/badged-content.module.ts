import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {
    TuiFallbackSrcPipe,
    TuiIconComponent,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgedContentComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiInputModule,
} from '@taiga-ui/kit';

import {ExampleTuiBadgedContentComponent} from './badged-content.component';
import {TuiBadgedContentExample1} from './examples/1';
import {TuiBadgedContentExample2} from './examples/2';
import {TuiBadgedContentExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiBadgeNotificationComponent,
        TuiIconComponent,
        TuiBadgeDirective,
        TuiBadgedContentComponent,
        TuiAvatarComponent,
        TuiFallbackSrcPipe,
        TuiInputModule,
        TuiButtonModule,
        TuiAddonDocModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBadgedContentComponent)),
        TuiPlatformModule,
    ],
    declarations: [
        ExampleTuiBadgedContentComponent,
        TuiBadgedContentExample1,
        TuiBadgedContentExample2,
        TuiBadgedContentExample3,
    ],
    exports: [ExampleTuiBadgedContentComponent],
})
export class ExampleTuiBadgedContentModule {}
