import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgComponent} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiArrowComponent} from './arrow.component';

@NgModule({
    imports: [CommonModule, TuiSvgComponent, PolymorpheusModule],
    declarations: [TuiArrowComponent],
    exports: [TuiArrowComponent],
})
export class TuiArrowModule {}
