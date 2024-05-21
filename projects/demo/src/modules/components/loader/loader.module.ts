import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonDirective, TuiLinkDirective, TuiLoaderComponent} from '@taiga-ui/core';
import {TuiRadioListComponent} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLoaderExample1} from './examples/1';
import {TuiLoaderExample2} from './examples/2';
import {TuiLoaderExample3} from './examples/3';
import {TuiLoaderExample4} from './examples/4';
import {TuiLoaderExample5} from './examples/5';
import {ExampleTuiLoaderComponent} from './loader.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiLoaderComponent,
        TuiRadioListComponent,
        TuiButtonDirective,
        TuiLinkDirective,
        RouterModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLoaderComponent)),
    ],
    declarations: [
        ExampleTuiLoaderComponent,
        TuiLoaderExample1,
        TuiLoaderExample2,
        TuiLoaderExample3,
        TuiLoaderExample4,
        TuiLoaderExample5,
    ],
    exports: [ExampleTuiLoaderComponent],
})
export class ExampleTuiLoaderModule {}
