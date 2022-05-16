import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiPrimitiveTextfieldModule} from '@taiga-ui/core';

import {SearchDialogExampleComponent} from './search-dialog-example.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPrimitiveTextfieldModule,
        TuiAutoFocusModule,
        TuiButtonModule,
    ],
    declarations: [SearchDialogExampleComponent],
    exports: [SearchDialogExampleComponent],
    entryComponents: [SearchDialogExampleComponent],
})
export class SearchDialogExampleModule {}
