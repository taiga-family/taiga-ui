import {DOCUMENT} from '@angular/common';
import {
    effect,
    type EnvironmentProviders,
    inject,
    InjectionToken,
    provideAppInitializer,
    type Provider,
} from '@angular/core';
import {Meta, REMOVE_STYLES_ON_COMPONENT_DESTROY} from '@angular/platform-browser';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_DARK_MODE,
    TUI_REDUCED_MOTION,
} from '@taiga-ui/core/tokens';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

import {tuiEnableFontScaling} from './font-scaling';
import {tuiGetDuration} from './get-duration';

interface ExperimentalAPIs {
    readonly all: boolean;
    readonly liquidGlass: boolean;
}

export interface TuiOptions {
    readonly mode?: 'dark' | 'light';
    readonly themeColors?: [light: string, dark: string];
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

/**
 * Provides Taiga UI configuration
 *
 * @param config - options object
 * @param config.mode - mode that the app uses, defaults to system configuration
 * @param config.themeColors - theme colors in 6-digit hex code for light and dark mode for mobile devices UI color
 * @param config.fontScaling - enable font scaling based on OS configuration, defaults to true
 * @param config.scrollbars - scrollbars mode for document.scrollingElement, defaults to 'custom'
 * @param config.apis - experimental APIs, defaults to 'stable'
 * @param config.apis.all - enable all experimental APIs, defaults to false
 * @param config.apis.liquidGlass - enable liquid glass effect, defaults to false
 */
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
            const meta = inject(Meta);
            const mode = inject(TUI_DARK_MODE);
            const duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
            const reducedMotion = inject(TUI_REDUCED_MOTION);

            doc.documentElement.style.setProperty('--tui-duration', `${duration}ms`);
            doc.documentElement.style.setProperty(
                '--tui-scroll-behavior',
                reducedMotion ? 'auto' : 'smooth',
            );

            if (options.scrollbars === 'custom') {
                doc.documentElement.classList.add('tui-scrollbar-hidden');
            }

            if (tuiIsPresent(options.mode)) {
                mode.set(options.mode === 'dark');
            }

            if (options.fontScaling && !meta.getTag('name="text-scale"')) {
                meta.addTag({name: 'text-scale', content: 'scale'});
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
