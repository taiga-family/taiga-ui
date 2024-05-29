import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiDropdownModule,
    TuiGroupDirective,
    TuiNotificationComponent,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {
    TuiBadgeDirective,
    TuiBlockDirective,
    TuiChipDirective,
    TuiItemsWithMore,
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
        TuiNotificationComponent,
        TuiItemsWithMore,
        TuiBadgeDirective,
        TuiDropdownModule,
        TuiButtonDirective,
        TuiDataList,
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
