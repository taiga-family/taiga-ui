import {Provider} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {TuiDestroyService, TuiResizeService} from '@taiga-ui/cdk';
import {tuiButtonOptionsProvider} from '@taiga-ui/core';

export const TUI_APP_BAR_PROVIDERS: Provider[] = [
    TuiDestroyService,
    TuiResizeService,
    MutationObserverService,
    {
        provide: MUTATION_OBSERVER_INIT,
        useValue: {
            characterData: true,
            childList: true,
            subtree: true,
        },
    },
    tuiButtonOptionsProvider({
        size: `m`,
        appearance: ``,
    }),
];
