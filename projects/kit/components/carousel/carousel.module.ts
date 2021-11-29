import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiItemDirective, TuiItemModule} from '@taiga-ui/cdk';

import {TuiCarouselComponent} from './carousel.component';
import {TuiCarouselDirective} from './carousel.directive';
import {TuiCarouselButtonsDirective} from './carousel-buttons.directive';
import {TuiCarouselScrollerDirective} from './carousel-scroller.directive';

@NgModule({
    imports: [CommonModule, IntersectionObserverModule, TuiItemModule],
    declarations: [
        TuiCarouselComponent,
        TuiCarouselDirective,
        TuiCarouselScrollerDirective,
        TuiCarouselButtonsDirective,
    ],
    exports: [
        TuiCarouselComponent,
        TuiCarouselDirective,
        TuiCarouselButtonsDirective,
        TuiItemDirective,
    ],
})
export class TuiCarouselModule {}
