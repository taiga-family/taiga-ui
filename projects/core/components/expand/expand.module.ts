import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLoaderModule} from '@taiga-ui/core/components/loader';

import {TuiExpandComponent} from './expand.component';
import {TuiExpandContentDirective} from './expand-content.directive';

@NgModule({
    imports: [CommonModule, TuiLoaderModule],
    declarations: [TuiExpandComponent, TuiExpandContentDirective],
    exports: [TuiExpandComponent, TuiExpandContentDirective],
})
export class TuiExpandModule {}
