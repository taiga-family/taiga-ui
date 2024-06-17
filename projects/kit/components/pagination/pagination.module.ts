import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLet, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiPaginationComponent} from './pagination.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiRepeatTimes,
        TuiLet,
        TuiButton,
    ],
    declarations: [TuiPaginationComponent],
    exports: [TuiPaginationComponent],
})
export class TuiPaginationModule {}
