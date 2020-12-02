import {ChangeDetectorRef, Optional, Provider} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiModeDirective, TuiTableDirective} from '@taiga-ui/core/directives/mode';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {modeFactory} from '@taiga-ui/core/utils/miscellaneous';

export const TUI_WRAPPER_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: TUI_MODE,
        deps: [
            TuiDestroyService,
            ChangeDetectorRef,
            [new Optional(), TuiModeDirective],
            [new Optional(), TuiTableDirective],
        ],
        useFactory: modeFactory,
    },
];
