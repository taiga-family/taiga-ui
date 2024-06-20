import {TuiItem} from '@taiga-ui/cdk';

import {TuiCarouselComponent} from './carousel.component';
import {TuiCarouselDirective} from './carousel.directive';
import {TuiCarouselAutoscroll} from './carousel-autoscroll.directive';
import {TuiCarouselButtons} from './carousel-buttons.directive';
import {TuiCarouselScroll} from './carousel-scroll.directive';

export const TuiCarousel = [
    TuiItem,
    TuiCarouselComponent,
    TuiCarouselDirective,
    TuiCarouselAutoscroll,
    TuiCarouselButtons,
    TuiCarouselScroll,
] as const;
