import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiRadioListModule, TuiSliderModule} from '@taiga-ui/kit';
import {TuiSliderExample1} from './examples/1';
import {TuiSliderExample2} from './examples/2';
import {ExampleTuiSliderComponent} from './slider.component';

@NgModule({
    imports: [
        TuiRadioListModule,
        TuiSliderModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiSliderComponent)),
    ],
    declarations: [ExampleTuiSliderComponent, TuiSliderExample1, TuiSliderExample2],
    exports: [ExampleTuiSliderComponent],
})
export class ExampleTuiSliderModule {}
