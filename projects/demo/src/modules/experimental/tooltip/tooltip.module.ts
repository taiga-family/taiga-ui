import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiIconComponent,
    TuiLinkDirective,
    TuiLoaderModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';
import {TuiInputModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTooltipExample1} from './examples/1';
import {TuiTooltipExample2} from './examples/2';
import {TuiTooltipExample3} from './examples/3';
import {ExampleTuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        TuiTooltipModule,
        TuiLinkDirective,
        TuiLoaderModule,
        TuiInputModule,
        PolymorpheusModule,
        TuiModeModule,
        CommonModule,
        FormsModule,
        TuiAppearanceDirective,
        TuiTextfieldControllerModule,
        tuiGetDocModules(ExampleTuiTooltipComponent),
        TuiNotificationModule,
        TuiIconComponent,
        TuiLetModule,
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
