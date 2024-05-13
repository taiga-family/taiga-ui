import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiItemDirective, TuiPanDirective, TuiSwipeDirective} from '@taiga-ui/cdk';

import {TuiCarouselComponent} from './carousel.component';
import {TuiCarouselDirective} from './carousel.directive';
import {TuiCarouselAutoscrollDirective} from './carousel-autoscroll.directive';
import {TuiCarouselButtonsDirective} from './carousel-buttons.directive';
import {TuiCarouselScrollDirective} from './carousel-scroll.directive';

@NgModule({
    imports: [
        CommonModule,
        IntersectionObserverModule,
        TuiPanDirective,
        TuiSwipeDirective,
        TuiItemDirective,
    ],
    declarations: [
        TuiCarouselComponent,
        TuiCarouselDirective,
        TuiCarouselButtonsDirective,
        TuiCarouselAutoscrollDirective,
        TuiCarouselScrollDirective,
    ],
    exports: [
        TuiCarouselComponent,
        TuiCarouselDirective,
        TuiCarouselButtonsDirective,
        TuiItemDirective,
    ],
})
export class TuiCarouselModule {}
