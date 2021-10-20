import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {PreviewDialogComponent} from './preview-dialog.component';

@NgModule({
    imports: [TuiButtonModule, PolymorpheusModule, CommonModule],
    declarations: [PreviewDialogComponent],
    exports: [PreviewDialogComponent],
})
export class PreviewDialogModule {}
