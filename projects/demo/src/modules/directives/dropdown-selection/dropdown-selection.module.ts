import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiDataListModule} from '@taiga-ui/core';
import {
    TuiAvatarModule,
    TuiDropdownSelectionModule,
    TuiTextAreaModule,
} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {ExampleTuiDropdownSelectionComponent} from './dropdown-selection.component';
import {TuiDropdownSelectionExample1} from './examples/1';
import {TuiDropdownSelectionExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiDropdownSelectionModule,
        TuiButtonModule,
        TuiTextAreaModule,
        TuiAvatarModule,
        TuiDataListModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDropdownSelectionComponent)),
    ],
    declarations: [
        ExampleTuiDropdownSelectionComponent,
        TuiDropdownSelectionExample1,
        TuiDropdownSelectionExample2,
    ],
    exports: [ExampleTuiDropdownSelectionComponent],
})
export class ExampleTuiDropdownSelectionModule {}
