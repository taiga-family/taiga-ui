import {InjectionToken, type Provider} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiDocIcons {
    readonly code: string;
    readonly light: string;
    readonly menu: string;
    readonly dark: string;
    readonly search: string;
    readonly copy: string;
    readonly check: string;
    readonly link: string;
    readonly languages: string;
    readonly figma: string;
    /**
     * TODO: drop optional in v5
     */
    readonly externalLink?: string;
    /**
     * TODO: drop optional in v5
     */
    readonly shrink?: string;
    readonly expand?: string;
    /**
     * TODO: drop optional in v5
     */
    readonly ltr?: {
        readonly preview: string;
        readonly direction: string;
    };
}

export const TUI_DOC_DEFAULT_ICONS: TuiDocIcons = {
    search: '@tui.search',
    light: '@tui.sun',
    dark: '@tui.moon',
    code: '@tui.code',
    menu: '@tui.menu',
    copy: '@tui.copy',
    check: '@tui.check',
    link: '@tui.link',
    externalLink: '@tui.external-link',
    languages: '@tui.languages',
    shrink: '@tui.shrink',
    expand: '@tui.expand',
    figma: '@tui.figma',
    ltr: {
        preview: '@tui.a-large-small',
        direction: '@tui.arrow-right-left',
    },
};

export const TUI_DOC_ICONS = new InjectionToken(ngDevMode ? 'TUI_DOC_ICONS' : '', {
    factory: () => TUI_DOC_DEFAULT_ICONS,
});

export function tuiDocIconsProvider(icons: Partial<TuiDocIcons>): Provider {
    return tuiProvideOptions(TUI_DOC_ICONS, icons, TUI_DOC_DEFAULT_ICONS);
}

export const TUI_DOC_DIRECTION_ENABLED = new InjectionToken(
    ngDevMode ? 'TUI_DOC_DIRECTION_ENABLED' : '',
    {factory: TUI_FALSE_HANDLER},
);
