import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiLoaderModule} from '@taiga-ui/core';
import {TuiRadioListModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLoaderExample1} from './examples/1';
import {TuiLoaderExample2} from './examples/2';
import {TuiLoaderExample3} from './examples/3';
import {TuiLoaderExample4} from './examples/4';
import {ExampleTuiLoaderComponent} from './loader.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiLoaderModule,
        TuiRadioListModule,
        TuiButtonModule,
        TuiLinkModule,
        RouterModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLoaderComponent)),
    ],
    declarations: [
        ExampleTuiLoaderComponent,
        TuiLoaderExample1,
        TuiLoaderExample2,
        TuiLoaderExample3,
        TuiLoaderExample4,
    ],
    exports: [ExampleTuiLoaderComponent],
})
export class ExampleTuiLoaderModule {}
