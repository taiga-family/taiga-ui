import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAmountPipe, TuiThumbnailCardComponent} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRippleModule} from '@taiga-ui/addon-mobile';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiButtonDirective,
    TuiLabelModule,
    TuiLinkModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiScrollbarComponent,
} from '@taiga-ui/core';
import {TuiSurfaceModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent, TuiBadgeDirective} from '@taiga-ui/kit';

import {TuiSurfaceExample1} from './examples/1';
import {TuiSurfaceExample2} from './examples/2';
import {TuiSurfaceExample3} from './examples/3';
import {TuiSurfaceExample4} from './examples/4';
import {TuiSurfaceExample5} from './examples/5';
import {TuiSurfaceExample6} from './examples/6';
import {TuiSurfaceExample7} from './examples/7';
import {ExampleTuiSurfaceComponent} from './surface.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiSurfaceModule,
        TuiNotificationModule,
        TuiRippleModule,
        TuiRepeatTimesModule,
        TuiBadgeDirective,
        TuiScrollbarComponent,
        TuiButtonDirective,
        TuiLinkModule,
        TuiAvatarComponent,
        TuiLabelModule,
        TuiModeModule,
        TuiAmountPipe,
        TuiThumbnailCardComponent,
        tuiGetDocModules(ExampleTuiSurfaceComponent),
        TuiAppearanceDirective,
    ],
    declarations: [
        ExampleTuiSurfaceComponent,
        TuiSurfaceExample1,
        TuiSurfaceExample2,
        TuiSurfaceExample3,
        TuiSurfaceExample4,
        TuiSurfaceExample5,
        TuiSurfaceExample6,
        TuiSurfaceExample7,
    ],
    exports: [ExampleTuiSurfaceComponent],
})
export class ExampleTuiSurfaceModule {}
