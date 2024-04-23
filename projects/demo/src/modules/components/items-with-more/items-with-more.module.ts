import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiGroupDirective,
    TuiNotificationModule,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {
    TuiBadgeDirective,
    TuiBlockDirective,
    TuiChipDirective,
    TuiItemsWithMoreModule,
} from '@taiga-ui/kit';

import {TuiItemsWithMoreExample1} from './examples/1';
import {TuiItemsWithMoreExample2} from './examples/2';
import {ExampleTuiItemsWithMoreComponent} from './items-with-more.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiGroupDirective,
        TuiChipDirective,
        TuiNotificationModule,
        TuiItemsWithMoreModule,
        TuiBadgeDirective,
        TuiDropdownModule,
        TuiButtonDirective,
        TuiDataListModule,
        TuiSvgComponent,
        TuiBlockDirective,
        tuiGetDocModules(ExampleTuiItemsWithMoreComponent),
        TuiExamplePipe,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiItemsWithMoreComponent,
        TuiItemsWithMoreExample1,
        TuiItemsWithMoreExample2,
    ],
    exports: [ExampleTuiItemsWithMoreComponent],
})
export class ExampleTuiItemsWithMoreModule {}
