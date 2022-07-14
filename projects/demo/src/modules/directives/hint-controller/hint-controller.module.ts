import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiHintControllerModule,
    TuiLinkModule,
    TuiPrimitiveTextfieldModule,
} from '@taiga-ui/core';

import {TuiHintControllerExample1} from './examples/1';
import {ExampleTuiHintControllerComponent} from './hint-controller.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiLinkModule,
        TuiPrimitiveTextfieldModule,
        TuiHintControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHintControllerComponent)),
    ],
    declarations: [ExampleTuiHintControllerComponent, TuiHintControllerExample1],
    exports: [ExampleTuiHintControllerComponent],
})
export class ExampleTuiHintControllerModule {}
