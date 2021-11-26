import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDataListModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TuiSelectModule,
    TuiStringifyContentPipeModule,
    TuiStringifyPipeModule,
} from '@taiga-ui/kit';

import {VersionManagerComponent} from './version-manager.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
        TuiStringifyPipeModule,
        TuiStringifyContentPipeModule,
    ],
    declarations: [VersionManagerComponent],
    exports: [VersionManagerComponent],
})
export class VersionManagerModule {}
