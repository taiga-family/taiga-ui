import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiAsDialog, TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core/components/button';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDialogComponent} from './dialog.component';
import {TuiDialogDirective} from './dialog.directive';
import {TuiDialogService} from './dialog.service';

@NgModule({
    imports: [PolymorpheusModule, TuiButtonModule, CommonModule, TuiPreventDefaultModule],
    declarations: [TuiDialogComponent, TuiDialogDirective],
    exports: [TuiDialogComponent, TuiDialogDirective],
    providers: [tuiAsDialog(TuiDialogService)],
})
export class TuiDialogModule {}
