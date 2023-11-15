import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLoaderModule, TuiSvgModule} from '@taiga-ui/core';

import {TuiButtonCloseStylesComponent} from './button-close.component';
import {TuiButtonCloseDirective} from './button-close.directive';

@NgModule({
    imports: [CommonModule, TuiSvgModule, TuiLoaderModule],
    declarations: [TuiButtonCloseDirective, TuiButtonCloseStylesComponent],
    exports: [TuiButtonCloseDirective, TuiButtonCloseStylesComponent],
})
export class TuiButtonCloseModule {}
