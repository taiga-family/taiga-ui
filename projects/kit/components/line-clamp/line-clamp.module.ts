import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule, TuiResizeModule} from '@taiga-ui/cdk';
import {TuiHintModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLineClampComponent} from './line-clamp.component';
import {TuiLineClampBoxComponent} from './line-clamp-box.component';
import {TuiLineClampPositionDirective} from './line-clamp-position.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiHintModule,
        TuiResizeModule,
        TuiLetModule,
    ],
    declarations: [
        TuiLineClampComponent,
        TuiLineClampBoxComponent,
        TuiLineClampPositionDirective,
    ],
    exports: [TuiLineClampComponent],
})
export class TuiLineClampModule {}
