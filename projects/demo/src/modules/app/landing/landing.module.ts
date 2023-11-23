import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiAutoFocusModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';

import {LandingComponent} from './landing.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiRepeatTimesModule,
        TuiAutoFocusModule,
        IntersectionObserverModule,
        RouterModule.forChild([{path: ``, component: LandingComponent}]),
    ],
    declarations: [LandingComponent],
    exports: [LandingComponent],
})
export class LandingModule {}
