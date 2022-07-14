import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiDescribedByModule,
    TuiHintModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiModeModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {TuiAvatarModule, TuiInputModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTooltipExample1} from './examples/1';
import {TuiTooltipExample2} from './examples/2';
import {TuiTooltipExample3} from './examples/3';
import {TuiTooltipExample4} from './examples/4';
import {ExampleTuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        TuiTooltipModule,
        TuiHintModule,
        TuiLinkModule,
        TuiAvatarModule,
        TuiLoaderModule,
        TuiInputModule,
        PolymorpheusModule,
        TuiModeModule,
        TuiDescribedByModule,
        TuiAddonDocModule,
        CommonModule,
        FormsModule,
        TuiTextfieldControllerModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTooltipComponent)),
    ],
    declarations: [
        ExampleTuiTooltipComponent,
        TuiTooltipExample1,
        TuiTooltipExample2,
        TuiTooltipExample3,
        TuiTooltipExample4,
    ],
    exports: [ExampleTuiTooltipComponent],
})
export class ExampleTuiTooltipModule {}
