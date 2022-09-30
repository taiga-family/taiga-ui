import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';

import {TuiFontStyleComponent} from './font-style.component';

@NgModule({
    imports: [CommonModule, TuiHostedDropdownModule, TuiButtonModule, TuiHintModule],
    declarations: [TuiFontStyleComponent],
    exports: [TuiFontStyleComponent],
})
export class TuiFontStyleModule {}
