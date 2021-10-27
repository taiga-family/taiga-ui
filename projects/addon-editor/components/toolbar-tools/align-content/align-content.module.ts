import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDescribedByModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {TuiJustifyContentComponent} from './align-content.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiLetModule,
    ],
    declarations: [TuiJustifyContentComponent],
    exports: [TuiJustifyContentComponent],
})
export class TuiJustifyContentModule {}
