import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental';
import {TuiInputModule} from '@taiga-ui/kit';

import {TuiKeyboardExample} from './examples/1';
import {ExampleTuiKeyboardComponent} from './keyboard.component';

@NgModule({
    imports: [
        CommonModule,
        TuiNotificationModule,
        tuiGetDocModules(ExampleTuiKeyboardComponent),
        TuiInputModule,
        FormsModule,
        TuiButtonModule,
    ],
    declarations: [ExampleTuiKeyboardComponent, TuiKeyboardExample],
    exports: [ExampleTuiKeyboardComponent],
})
export class ExampleTuiKeyboardModule {}
