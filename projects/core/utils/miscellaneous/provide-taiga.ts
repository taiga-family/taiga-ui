import {DOCUMENT} from '@angular/common';
import {
    effect,
    type EnvironmentProviders,
    inject,
    InjectionToken,
    provideAppInitializer,
    type Provider,
} from '@angular/core';
import {REMOVE_STYLES_ON_COMPONENT_DESTROY} from '@angular/platform-browser';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DARK_MODE} from '@taiga-ui/core/tokens';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

import {tuiEnableFontScaling} from './font-scaling';

interface ExperimentalAPIs {
    readonly all: boolean;
}

export interface TuiOptions {
    readonly mode?: 'dark' | 'light';
    readonly apis: Partial<ExperimentalAPIs> | 'stable';
    readonly fontScaling: boolean;
    readonly scrollbars: 'custom' | 'native';
}

const DEFAULT: TuiOptions = {
    apis: 'stable',
    fontScaling: true,
    scrollbars: 'custom',
};

export const TUI_OPTIONS = new InjectionToken<TuiOptions>(ngDevMode ? 'TUI_OPTIONS' : '');

export function provideTaiga(
    config: Partial<TuiOptions> = {},
): Array<EnvironmentProviders | Provider> {
    const options = {...DEFAULT, ...config};
    const providers: Array<EnvironmentProviders | Provider> = [
        {
            provide: REMOVE_STYLES_ON_COMPONENT_DESTROY,
            useValue: false,
        },
        {
            provide: TUI_OPTIONS,
            useValue: options,
        },
        provideEventPlugins(),
        provideAppInitializer(() => {
            const doc = inject(DOCUMENT);
            const mode = inject(TUI_DARK_MODE);

            if (options.scrollbars === 'custom') {
                doc.documentElement.classList.add('tui-zero-scrollbar');
            }

            if (tuiIsPresent(options.mode)) {
                mode.set(options.mode === 'dark');
            }

            effect(() => {
                if (mode()) {
                    doc.body.setAttribute('tuiTheme', 'dark');
                } else {
                    doc.body.removeAttribute('tuiTheme');
                }
            });
        }),
    ];

    if (options.fontScaling) {
        providers.push(tuiEnableFontScaling());
    }

    return providers;
}
