import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonDirective, TuiSvgComponent} from '@taiga-ui/core';
import {TuiTilesModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiReorderComponent} from './reorder.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgComponent,
        TuiButtonDirective,
        TuiTilesModule,
        PolymorpheusModule,
    ],
    declarations: [TuiReorderComponent],
    exports: [TuiReorderComponent],
})
export class TuiReorderModule {}
