import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';

import {TuiListConfigsComponent} from './list-configs.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiHintModule,
        TuiLetModule,
    ],
    declarations: [TuiListConfigsComponent],
    exports: [TuiListConfigsComponent],
})
export class TuiListConfigsModule {}
