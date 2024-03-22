import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRippleModule} from '@taiga-ui/addon-mobile';
import {TuiPlatformModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiAutoColorPipe,
    TuiDataListModule,
    TuiFallbackSrcPipe,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiIconComponent,
    TuiInitialsPipe,
    TuiLinkModule,
    TuiNotificationModule,
    TuiScrollbarComponent,
    TuiSvgModule,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {
    TuiButtonCloseModule,
    TuiButtonModule,
    TuiCardModule,
    TuiCellModule,
    TuiSurfaceModule,
    TuiThumbnailCardModule,
} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiAvatarStackComponent,
    TuiBadgeDirective,
    TuiFadeDirective,
} from '@taiga-ui/kit';
import {TuiHeaderDirective} from '@taiga-ui/layout';

import {ExampleTuiCardMediumComponent} from './card-medium.component';
import {TuiCardMediumExample1} from './examples/1';
import {TuiCardMediumExample2} from './examples/2';
import {TuiCardMediumExample3} from './examples/3';
import {TuiCardMediumExample4} from './examples/4';
import {TuiCardMediumExample5} from './examples/5';
import {TuiCardMediumExample6} from './examples/6';
import {TuiCardMediumExample7} from './examples/7';

@NgModule({
    imports: [
        CommonModule,
        TuiAutoColorPipe,
        TuiInitialsPipe,
        TuiNotificationModule,
        TuiFallbackSrcPipe,
        TuiFadeDirective,
        TuiCardModule,
        TuiSurfaceModule,
        TuiSvgModule,
        TuiBadgeDirective,
        TuiTitleDirective,
        TuiAvatarComponent,
        TuiAvatarStackComponent,
        TuiScrollbarComponent,
        TuiHintModule,
        FormsModule,
        TuiRippleModule,
        TuiThumbnailCardModule,
        TuiIconComponent,
        TuiButtonModule,
        TuiHeaderDirective,
        TuiCellModule,
        tuiGetDocModules(ExampleTuiCardMediumComponent),
        TuiRepeatTimesModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiButtonCloseModule,
        TuiPlatformModule,
        TuiLinkModule,
        TuiAppearanceDirective,
    ],
    declarations: [
        ExampleTuiCardMediumComponent,
        TuiCardMediumExample1,
        TuiCardMediumExample2,
        TuiCardMediumExample3,
        TuiCardMediumExample4,
        TuiCardMediumExample5,
        TuiCardMediumExample6,
        TuiCardMediumExample7,
    ],
    exports: [ExampleTuiCardMediumComponent],
})
export class ExampleTuiCardMediumModule {}
