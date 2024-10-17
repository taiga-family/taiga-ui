import type {Provider} from '@angular/core';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';

export const TUI_APP_BAR_PROVIDERS: Provider[] = [
    ResizeObserverService,
    MutationObserverService,
    {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
            characterData: true,
            childList: true,
            subtree: true,
        },
    },
    tuiButtonOptionsProvider({
        appearance: 'link',
    }),
];
