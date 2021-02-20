import {ChangeDetectorRef, Provider, SkipSelf} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {watchedControllerFactory} from '@taiga-ui/core';
import {TuiTableDirective} from '../directives/table.directive';

export const TUI_TABLE_PROVIDER: Provider[] = [
    TuiDestroyService,
    {
        provide: TuiTableDirective,
        deps: [[new SkipSelf(), TuiTableDirective], ChangeDetectorRef, TuiDestroyService],
        useFactory: watchedControllerFactory,
    },
];
