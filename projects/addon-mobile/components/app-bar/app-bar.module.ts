import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';

import {TuiAppBarComponent} from './app-bar.component';
import {TuiAppBarDirective} from './app-bar.directive';
import {TuiAppBarBackComponent} from './app-bar-back.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule],
    declarations: [TuiAppBarComponent, TuiAppBarDirective, TuiAppBarBackComponent],
    exports: [TuiAppBarComponent, TuiAppBarDirective, TuiAppBarBackComponent],
})
export class TuiAppBarModule {}
