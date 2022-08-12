import {InjectionToken, Provider, Type} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk/abstract';
import {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import {Observable} from 'rxjs';

export const TUI_ALERTS = new InjectionToken<
    ReadonlyArray<Observable<readonly TuiAriaDialogContext[]>>
>(`A stream of alerts`, {
    factory: () => [],
});

export function tuiAsAlerts(useExisting: Type<AbstractTuiDialogService<any>>): Provider {
    return {
        provide: TUI_ALERTS,
        multi: true,
        useExisting,
    };
}
