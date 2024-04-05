import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';
import {TuiInputModule, TuiRadioListComponent} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTableBarExampleComponent1} from './examples/1';
import {ExampleTuiTableBarComponent} from './table-bar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonDirective,
        PolymorpheusModule,
        TuiRadioListComponent,
        TuiInputModule,
        TuiLinkDirective,
        FormsModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTableBarComponent)),
    ],
    declarations: [ExampleTuiTableBarComponent, TuiTableBarExampleComponent1],
    exports: [ExampleTuiTableBarComponent],
})
export class ExampleTuiTableBarModule {}
