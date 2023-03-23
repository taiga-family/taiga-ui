import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import type {Observable} from 'rxjs';

/**
 * A stream of dialogs
 */
export const TUI_DIALOGS = new InjectionToken<
    ReadonlyArray<Observable<readonly TuiAriaDialogContext[]>>
>(`[TUI_DIALOGS]`, {
    factory: () => [],
});

export function tuiAsDialog(
    useExisting: Type<Observable<readonly TuiAriaDialogContext[]>>,
): Provider {
    return {
        provide: TUI_DIALOGS,
        multi: true,
        useExisting,
    };
}
