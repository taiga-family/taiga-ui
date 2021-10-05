import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiBarComponent} from './bar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiBarComponent],
    exports: [TuiBarComponent],
})
export class TuiBarModule {}
