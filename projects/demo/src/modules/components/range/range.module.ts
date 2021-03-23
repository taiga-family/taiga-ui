import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiRadioListModule, TuiRangeModule} from '@taiga-ui/kit';
import {TuiRangeExample1} from './examples/1';
import {ExampleTuiRangeComponent} from './range.component';

@NgModule({
    imports: [
        TuiRadioListModule,
        TuiRangeModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiRangeComponent)),
    ],
    declarations: [ExampleTuiRangeComponent, TuiRangeExample1],
    exports: [ExampleTuiRangeComponent],
})
export class ExampleTuiRangeModule {}
