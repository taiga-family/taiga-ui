import {DOCUMENT} from '@angular/common';
import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_DARK_MODE} from '@taiga-ui/core';

import {SEARCH_CONFIG} from './env';

const docsearch = require('@docsearch/js').default;

@Component({
    standalone: true,
    selector: 'tui-algolia-search',
    template: '',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.id]': "'docsearch'",
    },
})
export class TuiAlgoliaSearch {
    private readonly config = inject(SEARCH_CONFIG);

    constructor() {
        this.setSearchDocDarkMode();

        afterNextRender(() => {
            this.enableDocSearch();
        });
    }

    private enableDocSearch(): void {
        docsearch({
            ...this.config,
            transformItems: (items: Array<{url: string}>) =>
                items.map((item) => ({
                    ...item,
                    url: item.url.replace('https://taiga-ui.dev/', ''),
                })),
        });
    }

    private setSearchDocDarkMode(): void {
        const documentElement = inject(DOCUMENT).documentElement;
        const darkMode = inject(TUI_DARK_MODE);

        effect(() => {
            documentElement?.setAttribute('data-theme', darkMode() ? 'dark' : 'light');
        });
    }
}
