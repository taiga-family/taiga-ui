import {DOCUMENT, Location} from '@angular/common';
import {DestroyRef, effect, inject, Injectable, type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router} from '@angular/router';
import {TUI_DOC_MARKDOWN_ROUTE_HANDLER} from '@taiga-ui/addon-doc/tokens';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs';

/**
 * URL of the Markdown twin of the page currently open, kept in sync with navigation, and the
 * `<link rel="alternate">` that advertises it.
 *
 * Provided by the component that renders the action rather than in root: the twin is only
 * advertised while a documentation page that has one is on screen.
 */
@Injectable()
export class TuiDocPageMarkdown {
    private readonly router = inject(Router);
    private readonly location = inject(Location);
    private readonly handler = inject(TUI_DOC_MARKDOWN_ROUTE_HANDLER);

    public readonly url: Signal<string> = toSignal(
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.resolve()),
            startWith(this.resolve()),
            distinctUntilChanged(),
        ),
        {requireSync: true},
    );

    constructor() {
        const doc = inject(DOCUMENT);
        // Claim the server-rendered element: creating a second one orphans it in the head.
        const link =
            doc.head.querySelector<HTMLLinkElement>(
                'link[rel="alternate"][type="text/markdown"]',
            ) ?? doc.head.appendChild(doc.createElement('link'));

        link.rel = 'alternate';
        link.type = 'text/markdown';

        effect(() => {
            link.href = this.url();
        });

        inject(DestroyRef).onDestroy(() => link.remove());
    }

    private resolve(): string {
        const [url = ''] = this.router.url.split(/[?#]/);
        // Only the root route ends in a slash, and it reaches the handler as an empty string.
        const page = url.replace(/\/$/, '');
        let route = this.router.routerState.snapshot.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        // Tabbed pages live under a ':tab' child but share one base .md.
        const base =
            route.routeConfig?.path === ':tab'
                ? page.slice(0, page.lastIndexOf('/'))
                : page;

        return this.location.prepareExternalUrl(`${this.handler(base)}.md`);
    }
}
