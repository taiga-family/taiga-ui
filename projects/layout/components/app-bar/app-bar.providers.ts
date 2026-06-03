import {inject, type Provider} from '@angular/core';
import {
    WA_MUTATION_OBSERVER_INIT,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TUI_OPTIONS} from '@taiga-ui/core/utils/miscellaneous';

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
    tuiButtonOptionsProvider(() => {
        const options = inject(TUI_OPTIONS);

        const liquidGlass =
            options.apis !== 'stable' &&
            (options.apis.all || options.apis.liquidGlass?.()) &&
            inject(TUI_PLATFORM) === 'ios';

        return {appearance: liquidGlass ? '' : 'action', size: liquidGlass ? 'm' : 'l'};
    }),
];
