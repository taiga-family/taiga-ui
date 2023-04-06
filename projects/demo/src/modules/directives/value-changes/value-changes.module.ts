import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiValueChangesModule} from '@taiga-ui/cdk';
import {TuiInputCountModule, TuiInputModule} from '@taiga-ui/kit';

import {TuiValueChangesExample1} from './examples/1';
import {TuiValueChangesExample2} from './examples/2';
import {ExampleTuiValueChangesComponent} from './value-changes.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        TuiInputModule,
        TuiInputCountModule,
        TuiValueChangesModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiValueChangesComponent)),
    ],
    declarations: [
        ExampleTuiValueChangesComponent,
        TuiValueChangesExample1,
        TuiValueChangesExample2,
    ],
    exports: [ExampleTuiValueChangesComponent],
})
export class ExampleTuiValueChangesModule {}
