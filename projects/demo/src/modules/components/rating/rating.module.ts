import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiRatingModule} from '@taiga-ui/kit';

import {TuiRatingExample1} from './examples/1';
import {TuiRatingExample2} from './examples/2';
import {ExampleTuiRatingComponent} from './rating.component';

@NgModule({
    imports: [
        FormsModule,
        TuiRatingModule,
        TuiButtonModule,
        TuiAddonDocModule,
        ReactiveFormsModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiRatingComponent)),
    ],
    declarations: [ExampleTuiRatingComponent, TuiRatingExample1, TuiRatingExample2],
    exports: [ExampleTuiRatingComponent],
})
export class ExampleTuiRatingModule {}
