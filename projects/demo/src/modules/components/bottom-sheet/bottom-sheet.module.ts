import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiBottomSheetModule} from '@taiga-ui/addon-mobile';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiScrollbarModule} from '@taiga-ui/core';
import {
    TuiAppearanceModule,
    TuiButtonModule,
    TuiCardModule,
    TuiHeaderModule,
    TuiTitleModule,
} from '@taiga-ui/experimental';
import {TuiTextareaModule} from '@taiga-ui/kit';

import {ExampleTuiBottomSheetComponent} from './bottom-sheet.component';
import {TuiBottomSheetExample1} from './examples/1';
import {TuiBottomSheetExample2} from './examples/2';
import {TuiBottomSheetExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAppearanceModule,
        TuiBottomSheetModule,
        TuiButtonModule,
        TuiCardModule,
        TuiScrollbarModule,
        TuiTextareaModule,
        TuiHeaderModule,
        TuiTitleModule,
        TuiRepeatTimesModule,
        tuiGetDocModules(ExampleTuiBottomSheetComponent),
    ],
    declarations: [
        ExampleTuiBottomSheetComponent,
        TuiBottomSheetExample1,
        TuiBottomSheetExample2,
        TuiBottomSheetExample3,
    ],
    exports: [ExampleTuiBottomSheetComponent],
})
export class ExampleTuiBottomSheetModule {}
