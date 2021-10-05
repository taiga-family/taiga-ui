import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiGroupComponent} from './group.component';
import {TuiGroupDirective} from './group.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiGroupComponent, TuiGroupDirective],
    exports: [TuiGroupComponent, TuiGroupDirective],
})
export class TuiGroupModule {}
