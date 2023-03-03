import {InjectionToken, Provider, Type} from '@angular/core';
import {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import {Observable} from 'rxjs';

/**
 * A stream of alerts
 */
export const TUI_ALERTS = new InjectionToken<
    ReadonlyArray<Observable<readonly TuiAriaDialogContext[]>>
>(`[TUI_ALERTS]`, {
    factory: () => [],
});

export function tuiAsAlerts(
    useExisting: Type<Observable<readonly TuiAriaDialogContext[]>>,
): Provider {
    return {
        provide: TUI_ALERTS,
        multi: true,
        useExisting,
    };
}
