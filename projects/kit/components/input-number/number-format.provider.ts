import {inject, InjectionToken, Provider} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_NUMBER_FORMAT,
    TUI_NUMBER_FORMAT,
    TuiNumberFormatSettings,
} from '@taiga-ui/core';
import {BehaviorSubject, isObservable, takeUntil} from 'rxjs';

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
            const format = inject(TUI_NUMBER_FORMAT);
            const destroy$ = inject(TuiDestroyService, {self: true});

            if (isObservable(format)) {
                format.pipe(takeUntil(destroy$)).subscribe(subj);
            } else {
                subj.next(format);
            }

            return subj;
        },
    },
];
