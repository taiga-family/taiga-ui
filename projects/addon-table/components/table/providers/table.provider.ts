import type {Provider} from '@angular/core';
import {SkipSelf} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiWatch} from '@taiga-ui/cdk/observables';

import {TuiTableDirective} from '../directives/table.directive';

/**
 * @deprecated TODO: drop after Angular update and signal inputs
 */
export const TUI_TABLE_PROVIDER: Provider[] = [
    {
        provide: TuiTableDirective,
        deps: [[new SkipSelf(), TuiTableDirective]],
        useFactory: (controller: TuiTableDirective<any>): TuiTableDirective<any> => {
            controller.change$.pipe(tuiWatch(), takeUntilDestroyed()).subscribe();

            return controller;
        },
    },
];
