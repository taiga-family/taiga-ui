import {TuiCardCollapsed} from './collapsed.directive';
import {TuiCardLarge} from './large.directive';
import {TuiCardMedium} from './medium.directive';
import {TuiCardRow} from './row.directive';

export const TuiCard = [
    TuiCardLarge,
    TuiCardMedium,
    TuiCardCollapsed,
    TuiCardRow,
] as const;
