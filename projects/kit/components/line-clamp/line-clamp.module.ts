import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiResizeModule} from '@taiga-ui/cdk';
import {TuiHintModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLineClampComponent} from './line-clamp.component';
import {TuiLineClampDirective} from './line-clamp.directive';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiHintModule, TuiResizeModule],
    declarations: [TuiLineClampComponent, TuiLineClampDirective],
    exports: [TuiLineClampComponent],
})
export class TuiLineClampModule {}
