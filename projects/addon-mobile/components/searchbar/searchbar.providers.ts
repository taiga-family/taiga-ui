import {inject, type Provider} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';

export const TUI_SEARCHBAR_PROVIDERS: Provider[] = [
    tuiButtonOptionsProvider((platform = inject(TUI_PLATFORM)) => ({
        appearance: platform === 'android' ? 'action' : '',
        size: platform === 'android' ? 's' : 'm',
    })),
];
