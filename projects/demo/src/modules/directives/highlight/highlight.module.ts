import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiHighlightModule, TuiInputModule, TuiToRegexpModule} from '@taiga-ui/kit';

import {TuiHighlightExample1} from './examples/1';
import {TuiHighlightExample2} from './examples/2';
import {TuiHighlightExample3} from './examples/3';
import {TuiHighlightExample4} from './examples/4';
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
        TuiToRegexpModule,
    ],
    declarations: [
        ExampleTuiHighlightComponent,
        TuiHighlightExample1,
        TuiHighlightExample2,
        TuiHighlightExample3,
        TuiHighlightExample4,
    ],
    exports: [ExampleTuiHighlightComponent],
})
export class ExampleTuiHighlightModule {}
