import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLoaderModule} from '@taiga-ui/core/components/loader';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiExpandContentDirective} from './expand-content.directive';
import {TuiExpandComponent} from './expand.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiLoaderModule],
    declarations: [TuiExpandComponent, TuiExpandContentDirective],
    exports: [TuiExpandComponent, TuiExpandContentDirective],
})
export class TuiExpandModule {}
