import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule, TuiPluralizePipeModule} from '@taiga-ui/core';
import {TuiInputSliderModule} from '@taiga-ui/kit';

import {ExampleTuiPluralizeComponent} from './pluralize.component';

@NgModule({
    imports: [
        TuiPluralizePipeModule,
        TuiInputSliderModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPluralizeComponent)),
    ],
    declarations: [ExampleTuiPluralizeComponent],
    exports: [ExampleTuiPluralizeComponent],
})
export class ExampleTuiPluralizeModule {}
