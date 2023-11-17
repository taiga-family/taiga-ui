import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiHintModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiIconModule, TuiTooltipModule} from '@taiga-ui/experimental';
import {TuiInputModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTooltipExample1} from './examples/1';
import {TuiTooltipExample2} from './examples/2';
import {TuiTooltipExample3} from './examples/3';
import {ExampleTuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        TuiTooltipModule,
        TuiHintModule,
        TuiLinkModule,
        TuiLoaderModule,
        TuiInputModule,
        PolymorpheusModule,
        TuiModeModule,
        TuiAddonDocModule,
        CommonModule,
        FormsModule,
        TuiTextfieldControllerModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTooltipComponent)),
        TuiNotificationModule,
        TuiIconModule,
    ],
    declarations: [
        ExampleTuiTooltipComponent,
        TuiTooltipExample1,
        TuiTooltipExample2,
        TuiTooltipExample3,
    ],
    exports: [ExampleTuiTooltipComponent],
})
export class ExampleTuiTooltipModule {}
