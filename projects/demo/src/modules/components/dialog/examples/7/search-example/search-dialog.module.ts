import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAutoFocusDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiPrimitiveTextfieldModule} from '@taiga-ui/core';

import {SearchDialogExampleComponent} from './search-dialog-example.component';

@NgModule({
    imports: [
        CommonModule,
        TuiPrimitiveTextfieldModule,
        TuiAutoFocusDirective,
        TuiButtonDirective,
    ],
    declarations: [SearchDialogExampleComponent],
    exports: [SearchDialogExampleComponent],
})
export class SearchDialogExampleModule {}
