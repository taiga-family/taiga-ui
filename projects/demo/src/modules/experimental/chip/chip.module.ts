import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiAmountPipeModule,
    TuiAvatarModule,
    TuiBadgedContentModule,
    TuiBadgeNotificationModule,
    TuiButtonModule,
    TuiCheckboxModule,
    TuiChipModule,
    TuiFadeModule,
    TuiIconModule,
} from '@taiga-ui/experimental';

import {ExampleTuiChipComponent} from './chip.component';
import {TuiChipExample1} from './examples/1';
import {TuiChipExample2} from './examples/2';
import {TuiChipExample3} from './examples/3';
import {TuiChipExample4} from './examples/4';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiChipModule,
        TuiRepeatTimesModule,
        TuiIconModule,
        TuiFadeModule,
        TuiNotificationModule,
        TuiButtonModule,
        TuiAvatarModule,
        TuiCheckboxModule,
        TuiAmountPipeModule,
        TuiBadgedContentModule,
        TuiBadgeNotificationModule,
        tuiGetDocModules(ExampleTuiChipComponent),
    ],
    declarations: [
        ExampleTuiChipComponent,
        TuiChipExample1,
        TuiChipExample2,
        TuiChipExample3,
        TuiChipExample4,
    ],
    exports: [ExampleTuiChipComponent],
})
export class ExampleTuiChipModule {}
