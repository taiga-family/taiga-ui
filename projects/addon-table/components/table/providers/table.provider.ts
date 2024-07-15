import type {Provider} from '@angular/core';
import {ChangeDetectorRef, SkipSelf} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiWatch} from '@taiga-ui/cdk/observables';

import {TuiTableDirective} from '../directives/table.directive';

/**
 * @deprecated TODO: drop after Angular update and signal inputs
 */
export const TUI_TABLE_PROVIDER: Provider[] = [
    {
        provide: TuiTableDirective,
        deps: [[new SkipSelf(), TuiTableDirective], ChangeDetectorRef],
        useFactory: (
            controller: TuiTableDirective<any>,
            cdr: ChangeDetectorRef,
        ): TuiTableDirective<any> => {
            controller.change$.pipe(tuiWatch(cdr), takeUntilDestroyed()).subscribe();

            return controller;
        },
    },
];
