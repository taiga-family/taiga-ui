import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiDataList, TuiLinkDirective, TuiNotificationComponent} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule,
} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

import {TuiStringifyContentExample1} from './examples/1';
import {ExampleTuiStringifyContentComponent} from './stringify-content.component';

@NgModule({
    imports: [
        FormsModule,
        TuiFilterByInputPipeModule,
        TuiStringifyContentPipeModule,
        TuiNotificationComponent,
        TuiLinkDirective,
        TuiComboBoxModule,
        TuiDataList,
        TuiDataListWrapperModule,
        CommonModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiStringifyContentComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiStringifyContentComponent, TuiStringifyContentExample1],
    exports: [ExampleTuiStringifyContentComponent],
})
export class ExampleTuiStringifyContentModule {}
