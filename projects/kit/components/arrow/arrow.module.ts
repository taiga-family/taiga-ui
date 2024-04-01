import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiArrowComponent} from './arrow.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule, PolymorpheusModule],
    declarations: [TuiArrowComponent],
    exports: [TuiArrowComponent],
})
export class TuiArrowModule {}
