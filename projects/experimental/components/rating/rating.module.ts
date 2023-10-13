import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiRatingComponent} from './rating.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        FormsModule,
        TuiRepeatTimesModule,
        PolymorpheusModule,
    ],
    declarations: [TuiRatingComponent],
    exports: [TuiRatingComponent],
})
export class TuiRatingModule {}
