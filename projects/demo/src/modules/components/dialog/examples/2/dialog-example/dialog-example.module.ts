import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
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
        TuiButtonModule,
        TuiSelectModule,
        TuiInputModule,
        TuiMoneyModule,
        TuiTextfieldControllerModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiSliderModule,
        TuiAutoFocusModule,
    ],
    declarations: [DialogExampleComponent],
    exports: [DialogExampleComponent],
    entryComponents: [DialogExampleComponent], // for stackblitz
})
export class DialogExampleModule {}
