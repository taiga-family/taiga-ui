import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownControllerModule,
    TuiGroupModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {DropdownControllerDocumentationModule} from '../abstract/dropdown-controller-documentation/dropdown-controller-documentation.module';
import {TuiHostedDropdownExample1} from './examples/1';
import {TuiHostedDropdownExample2} from './examples/2';
import {TuiHostedDropdownExample3} from './examples/3';
import {ExampleTuiHostedDropdownComponent} from './hosted-dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PolymorpheusModule,
        FormsModule,
        TuiHostedDropdownModule,
        TuiInputModule,
        TuiButtonModule,
        TuiGroupModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiSelectModule,
        TuiActiveZoneModule,
        TuiDropdownControllerModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        DropdownControllerDocumentationModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiHostedDropdownComponent)),
    ],
    declarations: [
        TuiHostedDropdownExample1,
        TuiHostedDropdownExample2,
        TuiHostedDropdownExample3,
        ExampleTuiHostedDropdownComponent,
    ],
    exports: [ExampleTuiHostedDropdownComponent],
})
export class ExampleTuiHostedDropdownModule {}
