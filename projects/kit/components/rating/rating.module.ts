import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiFocusableModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiRatingComponent} from './rating.component';

@NgModule({
    imports: [TuiRepeatTimesModule, TuiFocusableModule, TuiSvgModule, FormsModule],
    declarations: [TuiRatingComponent],
    exports: [TuiRatingComponent],
})
export class TuiRatingModule {}
