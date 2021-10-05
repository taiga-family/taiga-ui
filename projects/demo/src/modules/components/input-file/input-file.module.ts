import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiInputFileModule, TuiInputModule} from '@taiga-ui/kit';
import {TuiInputFileExample1} from './examples/1';
import {TuiInputFileExample2} from './examples/2';
import {TuiInputFileExample3} from './examples/3';
import {TuiInputFileExample4} from './examples/4';
import {ExampleTuiInputFileComponent} from './input-file.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputFileModule,
        TuiInputModule,
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputFileComponent)),
    ],
    declarations: [
        ExampleTuiInputFileComponent,
        TuiInputFileExample1,
        TuiInputFileExample2,
        TuiInputFileExample3,
        TuiInputFileExample4,
    ],
    exports: [ExampleTuiInputFileComponent],
})
export class ExampleTuiInputFileModule {}
