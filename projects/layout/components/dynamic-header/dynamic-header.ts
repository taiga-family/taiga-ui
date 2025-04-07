import {TuiDynamicHeaderComponent} from './dynamic-header.component';
import {TuiDynamicHeaderAnchorDirective} from './dynamic-header-anchor.directive';
import {TuiDynamicHeaderContainerDirective} from './dynamic-header-container.directive';

export const TuiDynamicHeader = [
    TuiDynamicHeaderComponent,
    TuiDynamicHeaderAnchorDirective,
    TuiDynamicHeaderContainerDirective,
] as const;
