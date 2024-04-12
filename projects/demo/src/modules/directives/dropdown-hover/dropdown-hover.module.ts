import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiSetupComponent} from '@demo/utils';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiGroupDirective,
} from '@taiga-ui/core';
import {
    TuiChevronDirective,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiSwitchComponent,
    TuiTabsModule,
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
        TuiButtonDirective,
        TuiDropdownModule,
        TuiTabsModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiActiveZoneDirective,
        TuiSwitchComponent,
        TuiDataListModule,
        TuiGroupDirective,
        TuiChevronDirective,
        DropdownDocumentationModule,
        tuiGetDocModules(ExampleTuiDropdownHoverComponent),
        TuiSetupComponent,
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
