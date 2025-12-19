import {type Provider} from '@angular/core';
import {
    WA_MUTATION_OBSERVER_INIT,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';

export const TUI_APP_BAR_PROVIDERS: Provider[] = [
    WaResizeObserverService,
    WaMutationObserverService,
    {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
            characterData: true,
            childList: true,
            subtree: true,
        },
    },
    tuiButtonOptionsProvider({
        appearance: 'action',
    }),
];
