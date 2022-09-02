import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import type {Observable} from 'rxjs';

export const TUI_ALERTS = new InjectionToken<
    ReadonlyArray<Observable<readonly TuiAriaDialogContext[]>>
>(`A stream of alerts`, {
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
