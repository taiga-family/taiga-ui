import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDataListModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';

import {TuiLanguageSwitcherComponent} from './language-switcher.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiLanguageSwitcherComponent],
    exports: [TuiLanguageSwitcherComponent],
})
export class TuiLanguageSwitcherModule {}
