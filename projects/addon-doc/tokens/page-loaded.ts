import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import {defer, of, switchMap, timer} from 'rxjs';
/**
 * Stream that emits if loading of page is over (for example, to begin scrollIntoView)
 */
export const TUI_DOC_PAGE_LOADED = tuiCreateToken(
    defer(() => timer(200).pipe(switchMap(() => of(true)))),
);
