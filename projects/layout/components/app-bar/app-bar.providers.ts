import {inject, type Provider} from '@angular/core';
import {
    WA_MUTATION_OBSERVER_INIT,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_LIQUID_GLASS} from '@taiga-ui/core/utils/miscellaneous';

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
    tuiButtonOptionsProvider(
        (liquidGlass = inject(TUI_LIQUID_GLASS), platform = inject(TUI_PLATFORM)) => ({
            appearance: liquidGlass && platform === 'ios' ? '' : 'action',
            size: liquidGlass && platform === 'ios' ? 'm' : 'l',
        }),
    ),
];
