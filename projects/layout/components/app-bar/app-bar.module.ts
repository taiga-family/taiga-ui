import {NgModule} from '@angular/core';

import {TuiAppBarComponent} from './app-bar.component';
import {TuiAppBarDirective} from './app-bar.directive';
import {TuiAppBarBackComponent} from './app-bar-back.component';

@NgModule({
    imports: [TuiAppBarComponent, TuiAppBarDirective, TuiAppBarBackComponent],
    exports: [TuiAppBarComponent, TuiAppBarDirective, TuiAppBarBackComponent],
})
export class TuiAppBarModule {}
