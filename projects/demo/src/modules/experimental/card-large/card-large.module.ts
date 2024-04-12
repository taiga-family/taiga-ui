import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiExamplePipe} from '@demo/utils';
import {TuiThumbnailCardComponent} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRippleModule} from '@taiga-ui/addon-mobile';
import {TuiPlatformModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiAutoColorPipe,
    TuiButtonDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiFallbackSrcPipe,
    TuiHintModule,
    TuiIconComponent,
    TuiInitialsPipe,
    TuiLinkDirective,
    TuiNotificationModule,
    TuiScrollbarComponent,
    TuiSurfaceDirective,
    TuiSvgComponent,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {TuiCardModule, TuiCellModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiAvatarStackComponent,
    TuiBadgeDirective,
    TuiButtonCloseDirective,
    TuiFadeDirective,
} from '@taiga-ui/kit';
import {TuiHeaderDirective} from '@taiga-ui/layout';

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
        TuiAutoColorPipe,
        TuiInitialsPipe,
        TuiNotificationModule,
        TuiFallbackSrcPipe,
        TuiFadeDirective,
        TuiCardModule,
        TuiSvgComponent,
        TuiSurfaceDirective,
        TuiBadgeDirective,
        TuiTitleDirective,
        TuiScrollbarComponent,
        TuiHintModule,
        FormsModule,
        TuiRippleModule,
        TuiThumbnailCardComponent,
        TuiIconComponent,
        TuiButtonDirective,
        TuiHeaderDirective,
        TuiCellModule,
        tuiGetDocModules(ExampleTuiCardLargeComponent),
        TuiRepeatTimesModule,
        TuiDataListModule,
        TuiDropdownModule,
        TuiButtonCloseDirective,
        TuiPlatformModule,
        TuiLinkDirective,
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
