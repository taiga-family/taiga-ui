import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiGroupComponent} from './group.component';
import {TuiGroupDirective} from './group.directive';
import {TuiGroupStylesComponent} from './group-styles.component';

@NgModule({
    imports: [CommonModule],
    entryComponents: [TuiGroupStylesComponent],
    declarations: [TuiGroupComponent, TuiGroupDirective, TuiGroupStylesComponent],
    exports: [TuiGroupComponent, TuiGroupDirective, TuiGroupStylesComponent],
})
export class TuiGroupModule {}
