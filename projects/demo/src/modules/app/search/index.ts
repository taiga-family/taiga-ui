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
            maxResultsPerGroup: 7,
            transformSearchClient: (searchClient: {search: () => Promise<unknown>}) => ({
                ...searchClient,
                search: debounce(searchClient.search, 400),
            }),
            transformItems: (items: Array<{url: string}>) =>
                items.map((item) => ({
                    ...item,
                    url: item.url.replace('https://taiga-ui.dev/', ''),
                })),
        });
    }

    private setSearchDocDarkMode(): void {
        const {documentElement} = inject(DOCUMENT);
        const darkMode = inject(TUI_DARK_MODE);

        effect(() => {
            documentElement?.setAttribute('data-theme', darkMode() ? 'dark' : 'light');
        });
    }
}

// https://docsearch.algolia.com/docs/api/#transformsearchclient
function debounce<T extends (...args: unknown[]) => ReturnType<T>>(
    func: T,
    wait = 100,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
    let lastTimeout: ReturnType<typeof setTimeout> | null = null;

    return async function (
        this: unknown,
        ...args: Parameters<T>
    ): Promise<ReturnType<T>> {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this;

        return new Promise<ReturnType<T>>((resolve, reject) => {
            if (lastTimeout) {
                clearTimeout(lastTimeout);
            }

            lastTimeout = setTimeout(() => {
                lastTimeout = null;
                Promise.resolve(func.apply(that, args)).then(resolve).catch(reject);
            }, wait);
        });
    };
}
