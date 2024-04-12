import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiValueChangesModule} from '@taiga-ui/cdk';
import {TuiInputModule, TuiInputNumberModule} from '@taiga-ui/kit';

import {TuiValueChangesExample1} from './examples/1';
import {TuiValueChangesExample2} from './examples/2';
import {ExampleTuiValueChangesComponent} from './value-changes.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        TuiInputModule,
        TuiInputNumberModule,
        TuiValueChangesModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiValueChangesComponent)),
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiValueChangesComponent,
        TuiValueChangesExample1,
        TuiValueChangesExample2,
    ],
    exports: [ExampleTuiValueChangesComponent],
})
export class ExampleTuiValueChangesModule {}
