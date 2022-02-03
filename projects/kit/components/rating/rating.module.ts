import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiFocusableModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiRatingComponent} from './rating.component';

@NgModule({
    imports: [
        TuiSvgModule,
        TuiFocusableModule,
        TuiRepeatTimesModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [TuiRatingComponent],
    exports: [TuiRatingComponent],
})
export class TuiRatingModule {}
