import type {Provider} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiButtonOptionsProvider} from '@taiga-ui/core';

export const TUI_APP_BAR_PROVIDERS: Provider[] = [
    ResizeObserverService,
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
        size: 'm',
        appearance: '',
    }),
];
