import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiExamplePipe} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRippleModule} from '@taiga-ui/addon-mobile';
import {TuiPlatformModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiDataListModule,
    TuiHintModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiScrollbarComponent,
    TuiSvgModule,
} from '@taiga-ui/core';
import {
    TuiAutoColorModule,
    TuiButtonCloseModule,
    TuiButtonModule,
    TuiCardModule,
    TuiCellModule,
    TuiFadeModule,
    TuiFallbackSrcModule,
    TuiHeaderDirective,
    TuiIconModule,
    TuiInitialsModule,
    TuiSurfaceModule,
    TuiThumbnailCardModule,
    TuiTitleModule,
} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiAvatarStackComponent,
    TuiBadgeDirective,
} from '@taiga-ui/kit';

import {ExampleTuiCardLargeComponent} from './card-large.component';
import {TuiCardLargeExample1} from './examples/1';
import {TuiCardLargeExample2} from './examples/2';
import {TuiCardLargeExample3} from './examples/3';
import {TuiCardLargeExample4} from './examples/4';
import {TuiCardLargeExample5} from './examples/5';
import {TuiCardLargeExample6} from './examples/6';
import {TuiCardLargeExample7} from './examples/7';
import {TuiCardLargeExample8} from './examples/8';
import {TuiCardLargeExample9} from './examples/9';
import {TuiCardLargeExample10} from './examples/10';
import {TuiCardLargeExample11} from './examples/11';
import {TuiCardLargeExample12} from './examples/12';

@NgModule({
    imports: [
        CommonModule,
        TuiAvatarComponent,
        TuiAvatarStackComponent,
        TuiAutoColorModule,
        TuiInitialsModule,
        TuiNotificationModule,
        TuiFallbackSrcModule,
        TuiFadeModule,
        TuiCardModule,
        TuiSurfaceModule,
        TuiSvgModule,
        TuiBadgeDirective,
        TuiTitleModule,
        TuiScrollbarComponent,
        TuiHintModule,
        FormsModule,
        TuiRippleModule,
        TuiThumbnailCardModule,
        TuiIconModule,
        TuiButtonModule,
        TuiHeaderDirective,
        TuiCellModule,
        tuiGetDocModules(ExampleTuiCardLargeComponent),
        TuiRepeatTimesModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiButtonCloseModule,
        TuiPlatformModule,
        TuiLinkModule,
        TuiAppearanceDirective,
        TuiExamplePipe,
    ],
    declarations: [
        ExampleTuiCardLargeComponent,
        TuiCardLargeExample1,
        TuiCardLargeExample2,
        TuiCardLargeExample3,
        TuiCardLargeExample4,
        TuiCardLargeExample5,
        TuiCardLargeExample6,
        TuiCardLargeExample7,
        TuiCardLargeExample8,
        TuiCardLargeExample9,
        TuiCardLargeExample10,
        TuiCardLargeExample11,
        TuiCardLargeExample12,
    ],
    exports: [ExampleTuiCardLargeComponent],
})
export class ExampleTuiCardLargeModule {}
