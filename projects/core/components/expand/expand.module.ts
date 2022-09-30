import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLoaderModule} from '@taiga-ui/core/components/loader';

import {TuiExpandComponent} from './expand.component';

@NgModule({
    imports: [CommonModule, TuiLoaderModule],
    declarations: [TuiExpandComponent],
    exports: [TuiExpandComponent],
})
export class TuiExpandModule {}
