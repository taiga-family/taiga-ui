import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiGroupDirective} from './group.directive';
import {TuiGroupStylesComponent} from './group-styles.component';

@NgModule({
    imports: [CommonModule],
    entryComponents: [TuiGroupStylesComponent],
    declarations: [TuiGroupDirective, TuiGroupStylesComponent],
    exports: [TuiGroupDirective, TuiGroupStylesComponent],
})
export class TuiGroupModule {}
