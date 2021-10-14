import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import {VersionManagerComponent} from './version-manager.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
        TuiDropdownControllerModule,
    ],
    declarations: [VersionManagerComponent],
    exports: [VersionManagerComponent],
})
export class VersionManagerModule {}
