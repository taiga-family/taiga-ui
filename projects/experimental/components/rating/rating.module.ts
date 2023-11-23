import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiIconModule} from '@taiga-ui/experimental/components/icon';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiRatingComponent} from './rating.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiIconModule,
        TuiRepeatTimesModule,
        PolymorpheusModule,
    ],
    declarations: [TuiRatingComponent],
    exports: [TuiRatingComponent],
})
export class TuiRatingModule {}
