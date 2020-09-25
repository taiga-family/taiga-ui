import {InjectionToken} from '@angular/core';
import {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_DIALOG = new InjectionToken<PolymorpheusContent<TuiAriaDialogContext>>(
    'A component for dialog',
);
