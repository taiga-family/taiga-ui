import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiLabelModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiButtonModule, TuiRatingModule} from '@taiga-ui/experimental';

import {TuiRatingExample1} from './examples/1';
import {TuiRatingExample2} from './examples/2';
import {TuiRatingExample3} from './examples/3';
import {ExampleTuiRatingComponent} from './rating.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiRatingModule,
        TuiNotificationModule,
        TuiLabelModule,
        tuiGetDocModules(ExampleTuiRatingComponent),
        TuiButtonModule,
    ],
    declarations: [
        ExampleTuiRatingComponent,
        TuiRatingExample1,
        TuiRatingExample2,
        TuiRatingExample3,
    ],
    exports: [ExampleTuiRatingComponent],
})
export class ExampleTuiRatingModule {}
