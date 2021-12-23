import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiRadioListModule, TuiRatingModule} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiRatingExample1} from './examples/1';
import {TuiRatingExample2} from './examples/2';
import {ExampleTuiRatingComponent} from './rating.component';

@NgModule({
    imports: [
        TuiRatingModule,
        CommonModule,
        TuiAddonDocModule,
        TuiRadioListModule,
        TuiSvgModule,
        TuiButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(generateRoutes(ExampleTuiRatingComponent)),
        InheritedDocumentationModule,
    ],
    declarations: [ExampleTuiRatingComponent, TuiRatingExample1, TuiRatingExample2],
    exports: [ExampleTuiRatingComponent],
})
export class ExampleTuiRatingModule {}
