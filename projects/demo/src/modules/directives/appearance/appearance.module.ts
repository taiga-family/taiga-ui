import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiAppearanceDirective,
    TuiButtonDirective,
    TuiDropdownModule,
    TuiNotificationModule,
} from '@taiga-ui/core';

import {ExampleTuiAppearanceComponent} from './appearance.component';
import {TuiAppearanceExample1} from './examples/1';
import {TuiAppearanceExample2} from './examples/2';
import {TuiAppearanceExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAppearanceDirective,
        TuiNotificationModule,
        TuiButtonDirective,
        TuiDropdownModule,
        tuiGetDocModules(ExampleTuiAppearanceComponent),
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiAppearanceComponent,
        TuiAppearanceExample1,
        TuiAppearanceExample2,
        TuiAppearanceExample3,
    ],
    exports: [ExampleTuiAppearanceComponent],
})
export class ExampleTuiAppearanceModule {}
