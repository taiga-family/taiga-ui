import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiElasticStickyModule, TuiSheetModule} from '@taiga-ui/addon-mobile';
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {TuiAvatarModule} from '@taiga-ui/kit';

import {TuiSheetExample1} from './examples/1';
import {TuiSheetExample2} from './examples/2';
import {TuiSheetExample3} from './examples/3';
import {TuiSheetExample4} from './examples/4';
import {TuiSheetExample5} from './examples/5';
import {TuiSheetExample6} from './examples/6';
import {ExampleTuiSheetComponent} from './sheet.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiLabelModule,
        TuiMoneyModule,
        TuiAvatarModule,
        TuiNotificationModule,
        TuiLinkModule,
        TuiElasticStickyModule,
        TuiSheetModule,
        IntersectionObserverModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiSheetComponent)),
    ],
    declarations: [
        ExampleTuiSheetComponent,
        TuiSheetExample1,
        TuiSheetExample2,
        TuiSheetExample3,
        TuiSheetExample4,
        TuiSheetExample5,
        TuiSheetExample6,
    ],
    exports: [ExampleTuiSheetComponent],
})
export class ExampleTuiSheetModule {}
