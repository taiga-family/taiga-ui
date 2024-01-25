import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRippleModule} from '@taiga-ui/addon-mobile';
import {
    TuiHintModule,
    TuiNotificationModule,
    TuiScrollbarModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {
    TuiAutoColorModule,
    TuiCardModule,
    TuiFadeModule,
    TuiFallbackSrcModule,
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

import {ExampleTuiCardComponent} from './card.component';
import {TuiCardExample1} from './examples/1';
import {TuiCardExample2} from './examples/2';
import {TuiCardExample3} from './examples/3';
import {TuiCardExample4} from './examples/4';
import {TuiCardExample5} from './examples/5';
import {TuiCardExample6} from './examples/6';
import {TuiCardExample7} from './examples/7';

@NgModule({
    imports: [
        CommonModule,
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
        TuiAvatarComponent,
        TuiScrollbarModule,
        TuiHintModule,
        FormsModule,
        TuiRippleModule,
        TuiThumbnailCardModule,
        tuiGetDocModules(ExampleTuiCardComponent),
        TuiIconModule,
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
    ],
    exports: [ExampleTuiCardComponent],
})
export class ExampleTuiCardModule {}
