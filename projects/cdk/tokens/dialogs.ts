import {InjectionToken} from '@angular/core';
import {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import {NEVER, Observable} from 'rxjs';

export const TUI_DIALOGS = new InjectionToken<
    Observable<ReadonlyArray<TuiAriaDialogContext>>
>('A stream of dialogs', {
    factory: () => NEVER,
});
