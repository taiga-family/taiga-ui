import {ChangeDetectorRef, Provider, SkipSelf} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {tuiWatchedControllerFactory} from '@taiga-ui/core';

import {TuiTableDirective} from '../directives/table.directive';
import {TuiTableSortPipe} from '../pipes/table-sort.pipe';

export const TUI_TABLE_PROVIDER: Provider[] = [
    TuiDestroyService,
    TuiTableSortPipe,
    {
        provide: TuiTableDirective,
        deps: [[new SkipSelf(), TuiTableDirective], ChangeDetectorRef, TuiDestroyService],
        useFactory: tuiWatchedControllerFactory,
    },
];
