import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiDataListModule, TuiFlagPipeModule} from '@taiga-ui/core';
import {TuiSelectModule} from '@taiga-ui/kit';

import {TuiLanguageSwitcherComponent} from './language-switcher.component';

@NgModule({
    imports: [
        CommonModule,
        TuiFlagPipeModule,
        TuiSelectModule,
        TuiDataListModule,
        ReactiveFormsModule,
    ],
    declarations: [TuiLanguageSwitcherComponent],
    exports: [TuiLanguageSwitcherComponent],
})
export class TuiLanguageSwitcherModule {}
