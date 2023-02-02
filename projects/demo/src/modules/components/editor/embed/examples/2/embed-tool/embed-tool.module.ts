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

import {ExampleTuiEmbedToolComponent} from './embed-tool.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
        TuiInputInlineModule,
        FormsModule,
    ],
    declarations: [ExampleTuiEmbedToolComponent],
    exports: [ExampleTuiEmbedToolComponent],
})
export class ExampleTuiEmbedToolModule {}
