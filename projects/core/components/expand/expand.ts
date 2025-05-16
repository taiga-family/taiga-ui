import {TuiExpandComponent} from './expand.component';
import {TuiExpandContent} from './expand-content.directive';

/**
 * @deprecated use {@link TuiExpand} from @taiga-ui/experimental
 */
export const TuiExpand = [TuiExpandComponent, TuiExpandContent] as const;
