import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiModeModule} from '@taiga-ui/core';
import {TuiInputModule, TuiRadioListComponent} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTableBarExampleComponent1} from './examples/1';
import {ExampleTuiTableBarComponent} from './table-bar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        PolymorpheusModule,
        TuiRadioListComponent,
        TuiInputModule,
        TuiLinkModule,
        FormsModule,
        TuiModeModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTableBarComponent)),
    ],
    declarations: [ExampleTuiTableBarComponent, TuiTableBarExampleComponent1],
    exports: [ExampleTuiTableBarComponent],
})
export class ExampleTuiTableBarModule {}
