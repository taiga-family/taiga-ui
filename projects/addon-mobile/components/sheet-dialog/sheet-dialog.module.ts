import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiAsDialog, TuiClickOutsideModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiSheetDialogComponent} from './sheet-dialog.component';
import {TuiSheetDialogDirective} from './sheet-dialog.directive';
import {TuiSheetDialogService} from './sheet-dialog.service';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiClickOutsideModule, TuiButtonModule],
    declarations: [TuiSheetDialogComponent, TuiSheetDialogDirective],
    exports: [TuiSheetDialogComponent, TuiSheetDialogDirective],
    providers: [tuiAsDialog(TuiSheetDialogService)],
})
export class TuiSheetDialogModule {}
