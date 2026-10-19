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

    // Every doc page is a top-level route; its tabs, routable dialogs and outlets share one .md twin.
    private resolve(): string {
        const segments = this.router.routerState.snapshot.root.firstChild?.url ?? [];
        const page = segments.map(({path}) => path).join('/');

        return this.location.prepareExternalUrl(`/${page}.md`);
    }
}
