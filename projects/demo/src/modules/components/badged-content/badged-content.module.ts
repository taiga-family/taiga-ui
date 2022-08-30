import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiAvatarModule, TuiBadgedContentModule, TuiInputModule} from '@taiga-ui/kit';

import {ExampleTuiBadgedContentComponent} from './badged-content.component';
import {TuiBadgedContentExample1} from './examples/1';
import {TuiBadgedContentExample2} from './examples/2';
import {TuiBadgedContentExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAvatarModule,
        TuiBadgedContentModule,
        TuiInputModule,
        TuiButtonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBadgedContentComponent)),
    ],
    declarations: [
        ExampleTuiBadgedContentComponent,
        TuiBadgedContentExample1,
        TuiBadgedContentExample2,
        TuiBadgedContentExample3,
    ],
    exports: [ExampleTuiBadgedContentComponent],
})
export class ExampleTuiBadgedContentModule {}
