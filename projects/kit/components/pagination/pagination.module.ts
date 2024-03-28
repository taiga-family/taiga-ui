import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiActiveZoneDirective,
    TuiFocusableModule,
    TuiLetModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPaginationComponent} from './pagination.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiRepeatTimesModule,
        TuiLetModule,
        TuiActiveZoneDirective,
        TuiButtonModule,
        TuiFocusableModule,
    ],
    declarations: [TuiPaginationComponent],
    exports: [TuiPaginationComponent],
})
export class TuiPaginationModule {}
