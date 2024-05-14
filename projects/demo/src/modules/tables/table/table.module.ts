import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiReorderComponent,
    TuiTableModule,
    TuiTablePaginationComponent,
} from '@taiga-ui/addon-table';
import {TuiLetDirective, TuiValidatorDirective} from '@taiga-ui/cdk';
import {
    TuiAutoColorPipe,
    TuiButtonDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiFormatNumberPipeModule,
    TuiLinkDirective,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiScrollableDirective,
    TuiScrollbarComponent,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAccordionModule,
    TuiChevronDirective,
    TuiChipDirective,
    TuiDataListWrapperModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiSelectModule,
    TuiTextareaModule,
} from '@taiga-ui/kit';

import {TuiTableExample1} from './examples/1';
import {TuiTableExample2} from './examples/2';
import {TuiTableExample3} from './examples/3';
import {TuiTableExample4} from './examples/4';
import {TuiTableExample5} from './examples/5';
import {TuiTableExample6} from './examples/6';
import {ExampleTuiTableComponent} from './table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        IntersectionObserverModule,
        TuiNotificationModule,
        TuiScrollbarComponent,
        TuiTableModule,
        TuiInputModule,
        TuiTextareaModule,
        TuiInputNumberModule,
        TuiSelectModule,
        TuiInputDateModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiFormatNumberPipeModule,
        TuiValidatorDirective,
        TuiSvgComponent,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiChipDirective,
        TuiAccordionModule,
        TuiLoaderModule,
        TuiLetDirective,
        TuiTablePaginationComponent,
        TuiTextfieldControllerModule,
        TuiDropdownModule,
        TuiReorderComponent,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTableComponent)),
        TuiScrollableDirective,
        TuiChevronDirective,
        TuiAutoColorPipe,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiTableComponent,
        TuiTableExample1,
        TuiTableExample2,
        TuiTableExample3,
        TuiTableExample4,
        TuiTableExample5,
        TuiTableExample6,
    ],
    exports: [ExampleTuiTableComponent],
})
export class ExampleTuiTableModule {}
