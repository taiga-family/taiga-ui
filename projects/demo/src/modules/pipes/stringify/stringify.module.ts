import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiDataListModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule,
    TuiStringifyPipeModule,
} from '@taiga-ui/kit';

import {TuiStringifyExample1} from './examples/1';
import {ExampleTuiStringifyComponent} from './stringify.component';

@NgModule({
    imports: [
        FormsModule,
        TuiFilterByInputPipeModule,
        TuiStringifyPipeModule,
        TuiStringifyContentPipeModule,
        TuiNotificationModule,
        TuiLinkModule,
        TuiComboBoxModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiStringifyComponent)),
    ],
    declarations: [ExampleTuiStringifyComponent, TuiStringifyExample1],
    exports: [ExampleTuiStringifyComponent],
})
export class ExampleTuiStringifyModule {}
