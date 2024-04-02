import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLabelModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';

import {ExampleAnimationsComponent} from './animations.component';
import {TuiDropdownExample} from './examples/dropdown';
import {TuiFadeInExample} from './examples/fade-in';
import {TuiHeightCollapseExample} from './examples/height-collapse';
import {TuiScaleInExample} from './examples/scale-in';
import {TuiSlideInExample} from './examples/slide-in';
import {TuiWidthCollapseExample} from './examples/width-collapse';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAddonDocModule,
        TuiSliderModule,
        TuiButtonDirective,
        TuiLetModule,
        TuiLabelModule,
        TuiSvgModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleAnimationsComponent)),
    ],
    declarations: [
        ExampleAnimationsComponent,
        TuiHeightCollapseExample,
        TuiWidthCollapseExample,
        TuiFadeInExample,
        TuiScaleInExample,
        TuiSlideInExample,
        TuiDropdownExample,
    ],
})
export class ExampleAnimationsModule {}
