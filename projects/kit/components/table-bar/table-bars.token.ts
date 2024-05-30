import {tuiCreateToken, type TuiPopover} from '@taiga-ui/cdk';
import {BehaviorSubject} from 'rxjs';

export const TUI_TABLE_BARS = tuiCreateToken(
    new BehaviorSubject<ReadonlyArray<TuiPopover<void, void>>>([]),
);
