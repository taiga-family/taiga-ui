import type {UrlTree} from '@angular/router';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiCreateToken} from '@taiga-ui/cdk';

export const TUI_DOC_URL_STATE_HANDLER =
    tuiCreateToken<TuiStringHandler<UrlTree>>(String);
