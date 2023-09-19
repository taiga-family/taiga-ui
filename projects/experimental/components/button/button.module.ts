import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLoaderModule, TuiSvgModule} from '@taiga-ui/core';

import {TuiButtonComponent} from './button.component';
import {TuiButtonDirective, TuiButtonStylesComponent} from './button.directive';

@NgModule({
    imports: [CommonModule, TuiSvgModule, TuiLoaderModule],
    declarations: [TuiButtonComponent, TuiButtonDirective, TuiButtonStylesComponent],
    exports: [TuiButtonComponent, TuiButtonDirective],
})
export class TuiButtonModule {}
