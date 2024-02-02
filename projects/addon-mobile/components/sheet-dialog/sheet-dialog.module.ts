import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiClickOutsideModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiSheetDialogComponent} from './sheet-dialog.component';
import {TuiSheetDialogDirective} from './sheet-dialog.directive';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiClickOutsideModule, TuiButtonModule],
    declarations: [TuiSheetDialogComponent, TuiSheetDialogDirective],
    exports: [TuiSheetDialogComponent, TuiSheetDialogDirective],
})
export class TuiSheetDialogModule {}
