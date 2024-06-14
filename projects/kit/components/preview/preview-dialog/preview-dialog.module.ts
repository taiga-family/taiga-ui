import {NgModule} from '@angular/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiPreviewDialogComponent} from './preview-dialog.component';
import {TuiPreviewDialogDirective} from './preview-dialog.directive';

@NgModule({
    imports: [PolymorpheusOutlet],
    declarations: [TuiPreviewDialogComponent, TuiPreviewDialogDirective],
    exports: [TuiPreviewDialogComponent, TuiPreviewDialogDirective],
})
export class TuiPreviewDialog {}
