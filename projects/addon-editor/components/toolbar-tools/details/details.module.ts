import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule, TuiDescribedByModule, TuiHintModule} from '@taiga-ui/core';

import {TuiDetailsComponent} from './details.component';

@NgModule({
    imports: [CommonModule, TuiButtonModule, TuiHintModule, TuiDescribedByModule],
    declarations: [TuiDetailsComponent],
    exports: [TuiDetailsComponent],
})
export class TuiDetailsModule {}
