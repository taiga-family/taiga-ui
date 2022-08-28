import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule, TuiHintModule} from '@taiga-ui/core';

import {TuiDetailsComponent} from './details.component';
import {TuiDetailsRemoveComponent} from './details-remove/details-remove.component';

@NgModule({
    imports: [CommonModule, TuiButtonModule, TuiHintModule],
    declarations: [TuiDetailsComponent, TuiDetailsRemoveComponent],
    exports: [TuiDetailsComponent, TuiDetailsRemoveComponent],
})
export class TuiDetailsModule {}
