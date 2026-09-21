import {Location} from '@angular/common';
import {inject, Injectable, type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs';

@Injectable({providedIn: 'root'})
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
