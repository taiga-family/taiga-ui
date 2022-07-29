import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule, TuiResizeModule} from '@taiga-ui/cdk';
import {TuiHintModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLineClampComponent} from './line-clamp.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiHintModule,
        TuiResizeModule,
        TuiLetModule,
    ],
    declarations: [TuiLineClampComponent],
    exports: [TuiLineClampComponent],
})
export class TuiLineClampModule {}
