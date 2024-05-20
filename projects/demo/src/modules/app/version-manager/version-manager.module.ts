import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDataList, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TuiSelectModule,
    TuiStringifyContentPipeModule,
    TuiStringifyPipe,
} from '@taiga-ui/kit';

import {VersionManagerComponent} from './version-manager.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiSelectModule,
        TuiDataList,
        TuiTextfieldControllerModule,
        TuiStringifyPipe,
        TuiStringifyContentPipeModule,
    ],
    declarations: [VersionManagerComponent],
    exports: [VersionManagerComponent],
})
export class VersionManagerModule {}
