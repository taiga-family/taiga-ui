import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFadeDirective} from '@taiga-ui/kit';

import {TuiAppBarComponent} from './app-bar.component';
import {TuiAppBarDirective} from './app-bar.directive';
import {TuiAppBarBackComponent} from './app-bar-back.component';

@NgModule({
    imports: [CommonModule, TuiFadeDirective],
    declarations: [TuiAppBarComponent, TuiAppBarDirective, TuiAppBarBackComponent],
    exports: [TuiAppBarComponent, TuiAppBarDirective, TuiAppBarBackComponent],
})
export class TuiAppBarModule {}
