import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiExamplePipe} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiGroupDirective,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {
    TuiBadgeDirective,
    TuiBlockDirective,
    TuiItemsWithMoreModule,
    TuiTagModule,
} from '@taiga-ui/kit';

import {TuiItemsWithMoreExample1} from './examples/1';
import {TuiItemsWithMoreExample2} from './examples/2';
import {ExampleTuiItemsWithMoreComponent} from './items-with-more.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiGroupDirective,
        TuiTagModule,
        TuiNotificationModule,
        TuiItemsWithMoreModule,
        TuiBadgeDirective,
        TuiDropdownModule,
        TuiButtonModule,
        TuiDataListModule,
        TuiSvgModule,
        TuiBlockDirective,
        tuiGetDocModules(ExampleTuiItemsWithMoreComponent),
        TuiExamplePipe,
    ],
    declarations: [
        ExampleTuiItemsWithMoreComponent,
        TuiItemsWithMoreExample1,
        TuiItemsWithMoreExample2,
    ],
    exports: [ExampleTuiItemsWithMoreComponent],
})
export class ExampleTuiItemsWithMoreModule {}
