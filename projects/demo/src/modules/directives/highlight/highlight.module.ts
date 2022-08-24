import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiHighlightModule, TuiInputModule} from '@taiga-ui/kit';

import {TuiHighlightExample1} from './examples/1';
import {ExampleTuiHighlightComponent} from './highlight.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputModule,
        TuiHighlightModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiHighlightComponent)),
        TuiTextfieldControllerModule,
    ],
    declarations: [ExampleTuiHighlightComponent, TuiHighlightExample1],
    exports: [ExampleTuiHighlightComponent],
})
export class ExampleTuiHighlightModule {}
