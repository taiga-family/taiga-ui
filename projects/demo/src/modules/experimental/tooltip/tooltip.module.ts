import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiIconComponent,
    TuiLinkDirective,
    TuiLoaderComponent,
    TuiNotificationComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';
import {TuiInputModule} from '@taiga-ui/legacy';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTooltipExample1} from './examples/1';
import {TuiTooltipExample2} from './examples/2';
import {TuiTooltipExample3} from './examples/3';
import {ExampleTuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        TuiTooltipModule,
        TuiLinkDirective,
        TuiLoaderComponent,
        TuiInputModule,
        PolymorpheusModule,
        CommonModule,
        FormsModule,
        TuiAppearanceDirective,
        TuiTextfieldControllerModule,
        tuiGetDocModules(ExampleTuiTooltipComponent),
        TuiNotificationComponent,
        TuiIconComponent,
        TuiLetDirective,
        TuiSetupComponent,
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
