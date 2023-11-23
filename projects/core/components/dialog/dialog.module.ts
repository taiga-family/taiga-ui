import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiAsDialog, TuiAutoFocusModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core/components/button';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDialogComponent} from './dialog.component';
import {TuiDialogDirective} from './dialog.directive';
import {TuiDialogService} from './dialog.service';

@NgModule({
    imports: [PolymorpheusModule, TuiButtonModule, CommonModule, TuiAutoFocusModule],
    declarations: [TuiDialogComponent, TuiDialogDirective],
    providers: [tuiAsDialog(TuiDialogService)],
    exports: [TuiDialogComponent, TuiDialogDirective],
})
export class TuiDialogModule {}
