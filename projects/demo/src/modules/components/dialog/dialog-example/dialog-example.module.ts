import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule} from '@taiga-ui/kit';
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
    ],
    declarations: [DialogExampleComponent],
    exports: [DialogExampleComponent],
})
export class DialogExampleModule {}
