import"./chunk-HU6DUUP4.js";var r=`import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {default as docsearch} from '@docsearch/js';
import {TUI_ICON_START, TuiIcons} from '@taiga-ui/core';

import {SEARCH_CONFIG} from './env';

@Component({
    selector: 'tui-algolia-search',
    template: '',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_ICON_START, useValue: '@tui.search'}],
    hostDirectives: [TuiIcons],
    host: {'[attr.id]': "'docsearch'"},
})
export class TuiAlgoliaSearch {
    private readonly config = inject(SEARCH_CONFIG);

    protected readonly afterNextRender = afterNextRender(() =>
        docsearch({
            ...this.config,
            maxResultsPerGroup: 7,
            transformSearchClient: (searchClient) => {
                const search = searchClient.search.bind(searchClient);

                type Req = Parameters<typeof search>[0];

                type Rest = Parameters<typeof search>[1];

                const request = async (
                    req: Req,
                    ...rest: Rest[]
                ): ReturnType<typeof search> => {
                    if (Array.isArray(req)) {
                        return search(req, ...rest);
                    }

                    return search(
                        req.requests.map((req) => ({
                            ...req,
                            query: transformQuery((req as {query: string}).query),
                        })),
                        ...rest,
                    );
                };

                return {
                    ...searchClient,
                    search: debounce(request, 400) as typeof search,
                };
            },
            transformItems: (items) =>
                items.map((item) => ({
                    ...item,
                    url: item.url.replace('https://taiga-ui.dev/', ''),
                })),
        }),
    );
}

/**
 * Normalizes a search query by conditionally removing the \`tui\` prefix.
 *
 * Rules:
 * - If the query starts with \`tui\` (any case) *and* the next character is an uppercase A\u2013Z,
 *   the prefix is removed. This matches Taiga UI component names (e.g., \`tuiButton\`, \`TuiPagination\`).
 *     - "tuiButton"      \u2192 "button"
 *     - "TuiPagination"  \u2192 "pagination"
 *
 * - If \`tui\` appears later in the string, it is not removed.
 *     - "hello tui"      \u2192 "hello tui"
 *
 * - If the string starts with \`TUI\` followed by a space, the prefix is not removed.
 *     - "TUI something"  \u2192 "TUI something"
 *
 * - If the string is exactly "tui", it is left unchanged.
 *     - "tui"            \u2192 "tui"
 *
 * After processing, the result is always returned in lowercase.
 */
function transformQuery(query?: string): string {
    const q = query?.trim() ?? '';

    return /^tui(?=[A-Z])/i.test(q) ? q.slice(3).toLowerCase() : q.toLowerCase();
}

// https://docsearch.algolia.com/docs/api/#transformsearchclient
function debounce<T extends (...args: any[]) => Promise<unknown>>(fn: T, wait = 100) {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return async function (
        this: ThisParameterType<T>,
        ...args: Parameters<T>
    ): Promise<Awaited<ReturnType<T>>> {
        if (timer) {
            clearTimeout(timer);
        }

        return new Promise<Awaited<ReturnType<T>>>((resolve, reject) => {
            timer = setTimeout(async () => {
                timer = null;

                try {
                    const result = await fn.apply(this, args);

                    resolve(result as Awaited<ReturnType<T>>);
                } catch (e) {
                    return reject(new Error(String(e)));
                }
            }, wait);
        });
    };
}
`;export{r as default};
