import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLoaderModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiIconsDirective, TuiIconsModule} from '@taiga-ui/experimental/directives/icons';

import {TuiButtonComponent} from './button.component';
import {TuiButtonDirective, TuiButtonStylesComponent} from './button.directive';

@NgModule({
    imports: [CommonModule, TuiSvgModule, TuiLoaderModule, TuiIconsModule],
    declarations: [TuiButtonComponent, TuiButtonDirective, TuiButtonStylesComponent],
    exports: [TuiButtonComponent, TuiButtonDirective, TuiIconsDirective],
})
export class TuiButtonModule {}
