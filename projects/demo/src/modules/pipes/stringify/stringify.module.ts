import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiDataListModule,
    TuiLinkDirective,
    TuiNotificationComponent,
} from '@taiga-ui/core';
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
        TuiNotificationComponent,
        TuiLinkDirective,
        TuiComboBoxModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiStringifyComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiStringifyComponent, TuiStringifyExample1],
    exports: [ExampleTuiStringifyComponent],
})
export class ExampleTuiStringifyModule {}
