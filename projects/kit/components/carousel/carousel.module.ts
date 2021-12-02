import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiItemDirective, TuiItemModule} from '@taiga-ui/cdk';
import {TuiPresentModule} from '@taiga-ui/kit/directives';

import {TuiCarouselComponent} from './carousel.component';
import {TuiCarouselDirective} from './carousel.directive';
import {TuiCarouselButtonsDirective} from './carousel-buttons.directive';
import {TuiCarouselDraggableDirective} from './carousel-draggable.directive';
import {TuiCarouselScrollerDirective} from './carousel-scroller.directive';

@NgModule({
    imports: [CommonModule, IntersectionObserverModule, TuiItemModule, TuiPresentModule],
    declarations: [
        TuiCarouselComponent,
        TuiCarouselDirective,
        TuiCarouselScrollerDirective,
        TuiCarouselDraggableDirective,
        TuiCarouselButtonsDirective,
    ],
    exports: [
        TuiCarouselComponent,
        TuiCarouselDirective,
        TuiCarouselButtonsDirective,
        TuiCarouselDraggableDirective,
        TuiItemDirective,
    ],
})
export class TuiCarouselModule {}
