import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetDirective, TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiPaginationComponent} from './pagination.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiRepeatTimesDirective,
        TuiLetDirective,
        TuiButtonDirective,
    ],
    declarations: [TuiPaginationComponent],
    exports: [TuiPaginationComponent],
})
export class TuiPaginationModule {}
