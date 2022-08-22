import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiDataListModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiTabsModule, TuiToggleModule} from '@taiga-ui/kit';

import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ExampleTuiDropdownHoverComponent} from './dropdown-hover.component';
import {TuiDropdownHoverExample1} from './examples/1';
import {TuiDropdownHoverExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiDropdownModule,
        TuiAddonDocModule,
        TuiTabsModule,
        TuiSvgModule,
        TuiToggleModule,
        TuiHostedDropdownModule,
        TuiDataListModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiDropdownHoverComponent)),
        DropdownDocumentationModule,
    ],
    declarations: [
        ExampleTuiDropdownHoverComponent,
        TuiDropdownHoverExample1,
        TuiDropdownHoverExample2,
    ],
    exports: [ExampleTuiDropdownHoverComponent],
})
export class ExampleTuiDropdownHoverModule {}
