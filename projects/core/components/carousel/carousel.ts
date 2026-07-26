import {TuiItem} from '@taiga-ui/cdk/directives/item';

import {TuiCarouselComponent} from './carousel.component';
import {TuiCarouselDirective} from './carousel.directive';

export const TuiCarousel = [TuiCarouselComponent, TuiCarouselDirective, TuiItem] as const;
