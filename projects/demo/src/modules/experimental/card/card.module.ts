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

import {ExampleTuiCardComponent} from './card.component';
import {TuiCardExample1} from './examples/1';
import {TuiCardExample2} from './examples/2';
import {TuiCardExample3} from './examples/3';
import {TuiCardExample4} from './examples/4';
import {TuiCardExample5} from './examples/5';
import {TuiCardExample6} from './examples/6';
import {TuiCardExample7} from './examples/7';
import {TuiCardExample8} from './examples/8';
import {TuiCardExample9} from './examples/9';
import {TuiCardExample10} from './examples/10';
import {TuiCardExample11} from './examples/11';
import {TuiCardExample12} from './examples/12';
import {TuiCardExample13} from './examples/13';
import {TuiCardExample14} from './examples/14';
import {TuiCardExample15} from './examples/15';
import {TuiCardExample16} from './examples/16';
import {TuiCardExample17} from './examples/17';
import {TuiCardExample18} from './examples/18';
import {TuiCardExample19} from './examples/19';

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
        TuiCardExample1,
        TuiCardExample2,
        TuiCardExample3,
        TuiCardExample4,
        TuiCardExample5,
        TuiCardExample6,
        TuiCardExample7,
        TuiCardExample8,
        TuiCardExample9,
        TuiCardExample10,
        TuiCardExample11,
        TuiCardExample12,
        TuiCardExample13,
        TuiCardExample14,
        TuiCardExample15,
        TuiCardExample16,
        TuiCardExample17,
        TuiCardExample18,
        TuiCardExample19,
    ],
    exports: [ExampleTuiCardComponent],
})
export class ExampleTuiCardModule {}
