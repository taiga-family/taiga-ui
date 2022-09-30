import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiLabelModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';

import {ExampleAnimationsComponent} from './animations.component';
import {TuiFadeInExample} from './examples/fade-in';
import {TuiHeightCollapseExample} from './examples/height-collapse';
import {TuiScaleInExample} from './examples/scale-in';
import {TuiWidthCollapseExample} from './examples/width-collapse';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAddonDocModule,
        TuiSliderModule,
        TuiButtonModule,
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
    ],
})
export class ExampleAnimationsModule {}
