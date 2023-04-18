import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';

import {TuiDocCopyComponent} from './copy.component';

@NgModule({
    imports: [CommonModule, TuiButtonModule],
    declarations: [TuiDocCopyComponent],
    exports: [TuiDocCopyComponent],
})
export class TuiDocCopyModule {}
