import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLoaderModule} from '@taiga-ui/core';
import {TuiRadioListModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiLoaderExample1} from './examples/1';
import {TuiLoaderExample2} from './examples/2';
import {TuiLoaderExample3} from './examples/3';
import {ExampleTuiLoaderComponent} from './loader.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiLoaderModule,
        TuiRadioListModule,
        TuiButtonModule,
        RouterModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiLoaderComponent)),
    ],
    declarations: [
        ExampleTuiLoaderComponent,
        TuiLoaderExample1,
        TuiLoaderExample2,
        TuiLoaderExample3,
    ],
    exports: [ExampleTuiLoaderComponent],
})
export class ExampleTuiLoaderModule {}
