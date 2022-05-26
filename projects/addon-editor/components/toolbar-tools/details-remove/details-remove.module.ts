import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule, TuiDescribedByModule, TuiHintModule} from '@taiga-ui/core';

import {TuiDetailsRemoveComponent} from './details-remove.component';

@NgModule({
    imports: [CommonModule, TuiButtonModule, TuiHintModule, TuiDescribedByModule],
    declarations: [TuiDetailsRemoveComponent],
    exports: [TuiDetailsRemoveComponent],
})
export class TuiDetailsRemoveModule {}
