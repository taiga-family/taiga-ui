import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiButtonModule, TuiChipModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgedContentComponent,
    TuiBadgeNotificationComponent,
    TuiCheckboxComponent,
    TuiFadeDirective,
} from '@taiga-ui/kit';

import {ExampleTuiChipComponent} from './chip.component';
import {TuiChipExample1} from './examples/1';
import {TuiChipExample2} from './examples/2';
import {TuiChipExample3} from './examples/3';
import {TuiChipExample4} from './examples/4';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAmountPipe,
        TuiChipModule,
        TuiRepeatTimesModule,
        TuiFadeDirective,
        TuiNotificationModule,
        TuiButtonModule,
        TuiAvatarComponent,
        TuiCheckboxComponent,
        TuiBadgedContentComponent,
        TuiBadgeNotificationComponent,
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
