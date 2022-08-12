import {InjectionToken, Provider, Type} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk/abstract';
import {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import {Observable} from 'rxjs';

export const TUI_DIALOGS = new InjectionToken<
    ReadonlyArray<Observable<readonly TuiAriaDialogContext[]>>
>(`A stream of dialogs`, {
    factory: () => [],
});

export function tuiAsDialog(useExisting: Type<AbstractTuiDialogService<any>>): Provider {
    return {
        provide: TUI_DIALOGS,
        multi: true,
        useExisting,
    };
}
