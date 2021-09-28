import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiRatingComponent} from './rating.component';

@NgModule({
    imports: [CommonModule, TuiRepeatTimesModule, TuiSvgModule],
    declarations: [TuiRatingComponent],
    exports: [TuiRatingComponent],
})
export class TuiRatingModule {}
