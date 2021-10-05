import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiFieldErrorModule,
    TuiInputCountModule,
    TuiInputModule,
    TuiInputPhoneModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiFieldErrorExample1} from './examples/1';
import {TuiFieldErrorExample2} from './examples/2';
import {TuiFieldErrorExample3} from './examples/3';
import {TuiFieldErrorExample4} from './examples/4';
import {TuiFieldErrorExample5} from './examples/5';
import {ExampleTuiFieldErrorComponent} from './field-error.component';

@NgModule({
    imports: [
        TuiInputModule,
        ReactiveFormsModule,
        CommonModule,
        TuiFieldErrorModule,
        TuiLabelModule,
        TuiInputPhoneModule,
        TuiInputCountModule,
        TuiLinkModule,
        TuiAddonDocModule,
        PolymorpheusModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        RouterModule.forChild(generateRoutes(ExampleTuiFieldErrorComponent)),
    ],
    declarations: [
        ExampleTuiFieldErrorComponent,
        TuiFieldErrorExample1,
        TuiFieldErrorExample2,
        TuiFieldErrorExample3,
        TuiFieldErrorExample4,
        TuiFieldErrorExample5,
    ],
    exports: [ExampleTuiFieldErrorComponent],
})
export class ExampleTuiFieldErrorModule {}
