import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {TuiInputInlineModule} from '@taiga-ui/kit';

import {ExampleTuiPasteImageToolComponent} from './image-tool.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        TuiButtonModule,
        TuiInputInlineModule,
        TuiHostedDropdownModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
    ],
    declarations: [ExampleTuiPasteImageToolComponent],
    exports: [ExampleTuiPasteImageToolComponent],
})
export class ExampleTuiPasteImageToolModule {}
