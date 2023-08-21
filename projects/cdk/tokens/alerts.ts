import {Provider, Type} from '@angular/core';
import {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import {tuiCreateToken} from '@taiga-ui/cdk/utils';
import {Observable} from 'rxjs';

/**
 * A stream of alerts
 */
export const TUI_ALERTS = tuiCreateToken<
    ReadonlyArray<Observable<readonly TuiAriaDialogContext[]>>
>([]);

export function tuiAsAlerts(
    useExisting: Type<Observable<readonly TuiAriaDialogContext[]>>,
): Provider {
    return {
        provide: TUI_ALERTS,
        multi: true,
        useExisting,
    };
}
