import type {Provider} from '@angular/core';
import {tuiScrollbarOptionsProvider} from '@taiga-ui/core/components/scrollbar';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

import {tuiEnableFontScaling} from './font-scaling';

/**
 * Configuration options for Taiga UI setup
 */
export interface TuiProviderOptions {
    /**
     * Enable automatic dark mode detection and management.
     * When enabled, the app will automatically switch between light and dark themes
     * based on user's system preferences and will persist manual theme changes.
     * @default false
     */
    automaticDarkMode?: boolean;

    /**
     * Enable font scaling functionality.
     * When enabled, allows users to scale fonts throughout the application.
     * @default false
     */
    fontScaling?: boolean;

    /**
     * Enable custom global scrollbar styling.
     * When enabled, uses Taiga UI's custom scrollbar styling globally.
     * @default false
     */
    customGlobalScrollbar?: boolean;
}

/**
 * Universal helper that accepts options and sets up global Taiga UI providers
 * Always includes provideEventPlugins() and conditionally adds other providers based on options
 *
 * @param options Configuration options for Taiga UI setup
 * @returns Array of providers to be used in the application config
 *
 * @example
 * ```ts
 * export const config: ApplicationConfig = {
 *   providers: [
 *     provideTaiga({
 *       automaticDarkMode: true,
 *       fontScaling: true,
 *       customGlobalScrollbar: false,
 *     }),
 *     // other providers...
 *   ],
 * };
 * ```
 */
export function provideTaiga(options: TuiProviderOptions = {}): Provider[] {
    const providers: Provider[] = [
        // Always include event plugins as specified in the requirements
        NG_EVENT_PLUGINS,
    ];

    // Add font scaling if enabled
    if (options.fontScaling) {
        providers.push(tuiEnableFontScaling());
    }

    // Add custom global scrollbar if enabled
    if (options.customGlobalScrollbar) {
        providers.push(
            tuiScrollbarOptionsProvider({
                mode: 'always',
            }),
        );
    }

    // Note: automaticDarkMode is handled by TUI_DARK_MODE token which is already
    // automatically provided by default in Taiga UI. The dark mode functionality
    // includes automatic detection of system theme preferences and persistence
    // of manual theme changes. If automaticDarkMode is enabled, we don't need
    // to provide additional configuration as the default behavior already handles this.
    
    return providers;
}