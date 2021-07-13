import {InjectionToken} from '@angular/core';
import {Observable, of} from 'rxjs';

export const TUI_CARD_CVC_TEXTS = new InjectionToken<Observable<[string, string]>>(
    'Card CVC number text',
    {
        factory: () => of(['CVC', 'CVC/CVV']),
    },
);
