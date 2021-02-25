import {ChangeDetectorRef, ElementRef, Optional, Provider, Self} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {modeFactory} from '@taiga-ui/core/utils/miscellaneous';

export const MODE_PROVIDER: Provider = {
    provide: TUI_MODE,
    deps: [
        [new Self(), TuiDestroyService],
        ChangeDetectorRef,
        [new Optional(), TuiModeDirective],
        ElementRef,
    ],
    useFactory: modeFactory,
};
