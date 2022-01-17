import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiRatingModule} from '@taiga-ui/kit';

import {TuiRatingExample1} from './examples/1';
import {TuiRatingExample2} from './examples/2';
import {ExampleTuiRatingComponent} from './rating.component';

@NgModule({
    imports: [
        FormsModule,
        TuiRatingModule,
        TuiAddonDocModule,
        ReactiveFormsModule,
        RouterModule.forChild(generateRoutes(ExampleTuiRatingComponent)),
    ],
    declarations: [ExampleTuiRatingComponent, TuiRatingExample1, TuiRatingExample2],
    exports: [ExampleTuiRatingComponent],
})
export class ExampleTuiRatingModule {}
