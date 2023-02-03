import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule, TuiWrapperModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiArrowComponent} from './arrow.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule, TuiWrapperModule, PolymorpheusModule],
    declarations: [TuiArrowComponent],
    exports: [TuiArrowComponent],
})
export class TuiArrowModule {}
