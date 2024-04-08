import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDialogModule,
    TuiLinkDirective,
    TuiLoaderModule,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiCarouselModule,
    TuiIslandModule,
    TuiPaginationModule,
} from '@taiga-ui/kit';

import {ExampleTuiCarouselComponent} from './carousel.component';
import {TuiCarouselExample1} from './examples/1';
import {TuiCarouselExample2} from './examples/2';
import {TuiCarouselExample3} from './examples/3';
import {TuiCarouselExample4} from './examples/4';
import {TuiCarouselExample5} from './examples/5';

@NgModule({
    imports: [
        CommonModule,
        TuiCarouselModule,
        TuiPaginationModule,
        TuiNotificationModule,
        TuiLinkDirective,
        TuiButtonDirective,
        TuiIslandModule,
        TuiAmountPipe,
        TuiLoaderModule,
        TuiAvatarComponent,
        TuiDialogModule,
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
        TuiCarouselExample5,
    ],
    exports: [ExampleTuiCarouselComponent],
})
export class ExampleTuiCarouselModule {}
