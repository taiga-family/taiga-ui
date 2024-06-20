import type {Provider} from '@angular/core';
import {ChangeDetectorRef, SkipSelf} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {AbstractTuiController} from '@taiga-ui/cdk/classes';
import {tuiWatch} from '@taiga-ui/cdk/observables';

import {TuiTableDirective} from '../directives/table.directive';
import {TuiTableSortPipe} from '../pipes/table-sort.pipe';

export const TUI_TABLE_PROVIDER: Provider[] = [
    TuiTableSortPipe,
    {
        provide: TuiTableDirective,
        deps: [[new SkipSelf(), TuiTableDirective], ChangeDetectorRef],
        useFactory: (
            controller: AbstractTuiController,
            cdr: ChangeDetectorRef,
        ): AbstractTuiController => {
            controller.change$.pipe(tuiWatch(cdr), takeUntilDestroyed()).subscribe();

            return controller;
        },
    },
];
