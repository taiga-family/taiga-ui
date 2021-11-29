import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPreviewDialogComponent} from './preview-dialog.component';

@NgModule({
    imports: [PolymorpheusModule],
    declarations: [TuiPreviewDialogComponent],
    exports: [TuiPreviewDialogComponent],
})
export class TuiPreviewDialogModule {}
