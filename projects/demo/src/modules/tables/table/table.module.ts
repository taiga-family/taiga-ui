import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiValidatorModule} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiFormatNumberPipeModule,
    TuiHintControllerModule,
    TuiNotificationModule,
    TuiScrollbarModule,
} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiInputCountModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiSelectModule,
} from '@taiga-ui/kit';
import {TuiTableExample1} from './examples/1';
import {TuiTableExample2} from './examples/2';
import {ExampleTuiTableComponent} from './table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IntersectionObserverModule,
        TuiNotificationModule,
        TuiScrollbarModule,
        TuiTableModule,
        TuiInputModule,
        TuiInputNumberModule,
        TuiInputCountModule,
        TuiSelectModule,
        TuiInputDateModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiFormatNumberPipeModule,
        TuiValidatorModule,
        TuiHintControllerModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiTableComponent)),
    ],
    declarations: [ExampleTuiTableComponent, TuiTableExample1, TuiTableExample2],
    exports: [ExampleTuiTableComponent],
})
export class ExampleTuiTableModule {}
