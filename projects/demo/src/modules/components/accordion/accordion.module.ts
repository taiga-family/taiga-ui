import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiModeModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAccordionModule,
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiSelectModule,
} from '@taiga-ui/kit';
import {ExampleTuiAccordionComponent} from './accordion.component';
import {TuiAccordionExample1} from './examples/1';
import {TuiAccordionExample2} from './examples/2';
import {TuiAccordionExample3} from './examples/3';

@NgModule({
    imports: [
        TuiButtonModule,
        TuiInputModule,
        TuiSelectModule,
        TuiMoneyModule,
        TuiSvgModule,
        TuiAccordionModule,
        TuiModeModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiAccordionComponent)),
    ],
    declarations: [
        ExampleTuiAccordionComponent,
        TuiAccordionExample1,
        TuiAccordionExample2,
        TuiAccordionExample3,
    ],
    exports: [ExampleTuiAccordionComponent],
})
export class ExampleTuiAccordionModule {}
