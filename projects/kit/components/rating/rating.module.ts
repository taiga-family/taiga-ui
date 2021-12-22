import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiRatingPercentPipe} from './pipes/rating-percent.pipe';
import {TuiRatingComponent} from './rating.component';

@NgModule({
    imports: [CommonModule, TuiRepeatTimesModule, TuiSvgModule, FormsModule],
    declarations: [TuiRatingComponent, TuiRatingPercentPipe],
    exports: [TuiRatingComponent],
})
export class TuiRatingModule {}
