import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TUI_DIALOGS, TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core/components/button';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiDialogComponent} from './dialog.component';
import {TuiDialogService} from './dialog.service';

@NgModule({
    declarations: [TuiDialogComponent],
    exports: [TuiDialogComponent],
    entryComponents: [TuiDialogComponent],
    providers: [
        {
            provide: TUI_DIALOGS,
            useExisting: TuiDialogService,
            multi: true,
        },
    ],
    imports: [PolymorpheusModule, TuiButtonModule, CommonModule, TuiPreventDefaultModule],
})
export class TuiDialogModule {}
