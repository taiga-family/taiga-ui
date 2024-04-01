import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiArrowOldComponent} from './arrow.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule, PolymorpheusModule],
    declarations: [TuiArrowOldComponent],
    exports: [TuiArrowOldComponent],
})
export class TuiArrowModule {}
