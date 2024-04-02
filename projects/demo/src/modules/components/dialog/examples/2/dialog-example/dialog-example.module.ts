import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAutoFocusDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiSelectModule,
    TuiSliderModule,
} from '@taiga-ui/kit';

import {DialogExampleComponent} from './dialog-example.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiButtonDirective,
        TuiSelectModule,
        TuiInputModule,
        TuiAmountPipe,
        TuiTextfieldControllerModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiSliderModule,
        TuiAutoFocusDirective,
    ],
    declarations: [DialogExampleComponent],
    exports: [DialogExampleComponent],
})
export class DialogExampleModule {}
