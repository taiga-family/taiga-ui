import {DOCUMENT, Location} from '@angular/common';
import {DestroyRef, effect, inject, Injectable, type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs';

@Injectable()
export class PageMarkdown {
    private readonly router = inject(Router);
    private readonly location = inject(Location);

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
        const [page = ''] = this.router.url.split(/[?#]/);
        let route = this.router.routerState.snapshot.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        // Tabbed pages live under a ':tab' child but share one base .md.
        const base =
            route.routeConfig?.path === ':tab'
                ? page.slice(0, page.lastIndexOf('/'))
                : page;

        return this.location.prepareExternalUrl(`${base}.md`);
    }
}
