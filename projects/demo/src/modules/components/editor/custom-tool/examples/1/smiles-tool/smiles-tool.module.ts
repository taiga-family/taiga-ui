import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {ExampleTuiSmilesToolComponent} from './smiles-tool.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
    ],
    declarations: [ExampleTuiSmilesToolComponent],
    exports: [ExampleTuiSmilesToolComponent],
})
export class ExampleTuiSmilesToolModule {}
