import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiDropdownModule,
    TuiGroupDirective,
    TuiIconComponent,
} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental';
import {
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiTabsModule,
    TuiToggleModule,
} from '@taiga-ui/kit';

import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ExampleTuiDropdownHoverComponent} from './dropdown-hover.component';
import {TuiDropdownHoverExample1} from './examples/1';
import {TuiDropdownHoverExample2} from './examples/2';
import {TuiDropdownHoverExample3} from './examples/3';
import {TuiDropdownHoverExample4} from './examples/4';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiDropdownModule,
        TuiTabsModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiActiveZoneDirective,
        TuiToggleModule,
        TuiDataListModule,
        TuiGroupDirective,
        TuiIconComponent,
        DropdownDocumentationModule,
        tuiGetDocModules(ExampleTuiDropdownHoverComponent),
    ],
    declarations: [
        ExampleTuiDropdownHoverComponent,
        TuiDropdownHoverExample1,
        TuiDropdownHoverExample2,
        TuiDropdownHoverExample3,
        TuiDropdownHoverExample4,
    ],
    exports: [ExampleTuiDropdownHoverComponent],
})
export class ExampleTuiDropdownHoverModule {}
