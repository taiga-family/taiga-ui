import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiActiveZoneModule,
    TuiLetModule,
    TuiPreventDefaultModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPaginationComponent} from './pagination.component';

@NgModule({
    imports: [
        CommonModule,
        TuiRepeatTimesModule,
        TuiLetModule,
        PolymorpheusModule,
        TuiPreventDefaultModule,
        TuiActiveZoneModule,
        TuiButtonModule,
    ],
    declarations: [TuiPaginationComponent],
    exports: [TuiPaginationComponent],
})
export class TuiPaginationModule {}
