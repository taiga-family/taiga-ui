import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiPreventDefaultModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiCalendarModule,
    TuiHintModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiCheckboxLabeledModule,
    TuiInputDateModule,
    TuiInputTagModule,
    TuiSliderModule,
    TuiToggleModule,
} from '@taiga-ui/kit';

import {LandingComponent} from './landing.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        IntersectionObserverModule,
        TuiButtonModule,
        TuiRepeatTimesModule,
        TuiInputTagModule,
        TuiInputDateModule,
        TuiCalendarModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiPreventDefaultModule,
        TuiCheckboxLabeledModule,
        TuiToggleModule,
        TuiSliderModule,
    ],
    declarations: [LandingComponent],
    exports: [LandingComponent],
})
export class LandingModule {}
