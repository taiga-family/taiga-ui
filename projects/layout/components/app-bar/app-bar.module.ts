import {AsyncPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFade} from '@taiga-ui/kit';

import {TuiAppBarComponent} from './app-bar.component';
import {TuiAppBarDirective} from './app-bar.directive';
import {TuiAppBarBack} from './app-bar-back.component';

@NgModule({
    imports: [TuiFade, AsyncPipe],
    declarations: [TuiAppBarComponent, TuiAppBarDirective, TuiAppBarBack],
    exports: [TuiAppBarComponent, TuiAppBarDirective, TuiAppBarBack],
})
export class TuiAppBar {}
