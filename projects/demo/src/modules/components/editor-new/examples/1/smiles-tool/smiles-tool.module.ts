import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownControllerModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {ExampleSmilesToolComponent} from './smiles-tool.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiActiveZoneModule,
        TuiDropdownControllerModule,
    ],
    declarations: [ExampleSmilesToolComponent],
    exports: [ExampleSmilesToolComponent],
})
export class ExampleSmilesToolModule {}
