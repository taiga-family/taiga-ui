import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';

import {CustomLabelComponent} from './custom-label.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule],
    declarations: [CustomLabelComponent],
    exports: [CustomLabelComponent],
})
export class CustomLabelModule {}
