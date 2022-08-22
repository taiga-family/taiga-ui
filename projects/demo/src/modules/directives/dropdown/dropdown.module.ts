import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule, TuiObscuredModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiDropdownModule, TuiLinkModule} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiInputModule,
    TuiSelectModule,
    TuiToggleModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ExampleTuiDropdownComponent} from './dropdown.component';
import {TuiDropdownExample1} from './examples/1';
import {TuiDropdownExample2} from './examples/2';
import {TuiDropdownExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiLinkModule,
        TuiAvatarModule,
        TuiButtonModule,
        TuiDropdownModule,
        TuiSelectModule,
        TuiObscuredModule,
        TuiActiveZoneModule,
        TuiToggleModule,
        TuiInputModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDropdownComponent)),
        DropdownDocumentationModule,
    ],
    declarations: [
        ExampleTuiDropdownComponent,
        TuiDropdownExample1,
        TuiDropdownExample2,
        TuiDropdownExample3,
    ],
    exports: [ExampleTuiDropdownComponent],
})
export class ExampleTuiDropdownModule {}
