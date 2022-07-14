import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDialogModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiModeModule,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {
    TuiCarouselModule,
    TuiIslandModule,
    TuiMarkerIconModule,
    TuiPaginationModule,
} from '@taiga-ui/kit';

import {ExampleTuiCarouselComponent} from './carousel.component';
import {TuiCarouselExample1} from './examples/1';
import {TuiCarouselExample2} from './examples/2';
import {TuiCarouselExample3} from './examples/3';
import {TuiCarouselExample4} from './examples/4';

@NgModule({
    imports: [
        CommonModule,
        TuiCarouselModule,
        TuiPaginationModule,
        TuiNotificationModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiIslandModule,
        TuiMoneyModule,
        TuiLoaderModule,
        TuiMarkerIconModule,
        TuiDialogModule,
        TuiModeModule,
        TuiRepeatTimesModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCarouselComponent)),
    ],
    declarations: [
        ExampleTuiCarouselComponent,
        TuiCarouselExample1,
        TuiCarouselExample2,
        TuiCarouselExample3,
        TuiCarouselExample4,
    ],
    exports: [ExampleTuiCarouselComponent],
})
export class ExampleTuiCarouselModule {}
