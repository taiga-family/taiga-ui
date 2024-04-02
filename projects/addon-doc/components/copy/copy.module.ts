import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';

import {TuiDocCopyComponent} from './copy.component';

@NgModule({
    imports: [CommonModule, TuiButtonDirective],
    declarations: [TuiDocCopyComponent],
    exports: [TuiDocCopyComponent],
})
export class TuiDocCopyModule {}
