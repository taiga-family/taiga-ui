import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRippleModule} from '@taiga-ui/addon-mobile';
import {TuiPlatformModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiScrollbarModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {
    TuiAppearanceModule,
    TuiAutoColorModule,
    TuiAvatarModule,
    TuiAvatarStackModule,
    TuiBadgeModule,
    TuiButtonCloseModule,
    TuiButtonModule,
    TuiCardModule,
    TuiCellModule,
    TuiFadeModule,
    TuiFallbackSrcModule,
    TuiHeaderModule,
    TuiIconModule,
    TuiInitialsModule,
    TuiSurfaceModule,
    TuiThumbnailCardModule,
    TuiTitleModule,
} from '@taiga-ui/experimental';

import {ExampleTuiCardComponent} from './card-medium.component';
import {TuiCardMediumExample1} from './examples/1';
import {TuiCardMediumExample2} from './examples/2';
import {TuiCardMediumExample3} from './examples/3';
import {TuiCardExample4} from './examples/4';
import {TuiCardMediumExample5} from './examples/5';
import {TuiCardMediumExample6} from './examples/6';
import {TuiCardMediumExample7} from './examples/7';

@NgModule({
    imports: [
        CommonModule,
        TuiAvatarStackModule,
        TuiAutoColorModule,
        TuiInitialsModule,
        TuiNotificationModule,
        TuiFallbackSrcModule,
        TuiFadeModule,
        TuiCardModule,
        TuiSurfaceModule,
        TuiSvgModule,
        TuiBadgeModule,
        TuiTitleModule,
        TuiAvatarModule,
        TuiScrollbarModule,
        TuiHintModule,
        FormsModule,
        TuiRippleModule,
        TuiThumbnailCardModule,
        TuiIconModule,
        TuiButtonModule,
        TuiHeaderModule,
        TuiCellModule,
        tuiGetDocModules(ExampleTuiCardComponent),
        TuiRepeatTimesModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiButtonCloseModule,
        TuiPlatformModule,
        TuiLinkModule,
        TuiAppearanceModule,
    ],
    declarations: [
        ExampleTuiCardComponent,
        TuiCardMediumExample1,
        TuiCardMediumExample2,
        TuiCardMediumExample3,
        TuiCardExample4,
        TuiCardMediumExample5,
        TuiCardMediumExample6,
        TuiCardMediumExample7,
    ],
    exports: [ExampleTuiCardComponent],
})
export class ExampleTuiCardModule {}
