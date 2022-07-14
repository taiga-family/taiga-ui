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
} from '@taiga-ui/kit';

import {TuiStringifyContentExample1} from './examples/1';
import {ExampleTuiStringifyContentComponent} from './stringify-content.component';

@NgModule({
    imports: [
        FormsModule,
        TuiFilterByInputPipeModule,
        TuiStringifyContentPipeModule,
        TuiNotificationModule,
        TuiLinkModule,
        TuiComboBoxModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiStringifyContentComponent)),
    ],
    declarations: [ExampleTuiStringifyContentComponent, TuiStringifyContentExample1],
    exports: [ExampleTuiStringifyContentComponent],
})
export class ExampleTuiStringifyContentModule {}
