import {inject, InjectionToken, Provider} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_NUMBER_FORMAT,
    TUI_NUMBER_FORMAT,
    TuiNumberFormatSettings,
} from '@taiga-ui/core';
import {BehaviorSubject, takeUntil} from 'rxjs';

/**
 * internal
 */
export const TUI_NUMBER_FORMAT_SUBJ = new InjectionToken<
    BehaviorSubject<TuiNumberFormatSettings>
>('');

export const TUI_NUMBER_FORMAT_PROVIDER: Provider = [
    TuiDestroyService,
    {
        provide: TUI_NUMBER_FORMAT_SUBJ,
        useFactory: () => {
            const subj = new BehaviorSubject(TUI_DEFAULT_NUMBER_FORMAT);

            inject(TUI_NUMBER_FORMAT)
                .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
                .subscribe(subj);

            return subj;
        },
    },
];
