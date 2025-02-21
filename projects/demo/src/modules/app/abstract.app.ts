import type {OnInit} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {Router} from '@angular/router';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc';
import {tuiInjectElement, tuiPure, tuiZoneOptimized} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map, shareReplay, startWith} from 'rxjs';

export const DEMO_PAGE_LOADED_PROVIDER = {
    provide: TUI_DOC_PAGE_LOADED,
    useFactory(): Observable<boolean> {
        const host = tuiInjectElement();

        return inject(ResizeObserverService).pipe(
            map(([entry]) => entry?.contentRect.height ?? 0),
            distinctUntilChanged(),
            startWith(0),
            map((hostHeight) => {
                const exampleElements = Array.from(
                    host.querySelectorAll('tui-doc-example'),
                );
                const codeElements = Array.from(host.querySelectorAll('tui-doc-code'));

                return (
                    Boolean(hostHeight) &&
                    exampleElements.every((el) =>
                        el.querySelector('.t-demo')?.matches(':not(:empty)'),
                    ) &&
                    codeElements.every((el) => el.querySelector('.t-code'))
                );
            }),
            shareReplay(1),
            tuiZoneOptimized(),
            takeUntilDestroyed(),
        );
    },
};

@Directive({
    standalone: true,
})
export abstract class AbstractDemo implements OnInit {
    protected abstract readonly storage: Storage;
    protected abstract readonly router: Router;

    public async ngOnInit(): Promise<void> {
        await this.replaceEnvInURI();
    }

    @tuiPure
    protected get isChristmas(): boolean {
        const today = new Date();

        return (
            (!today.getMonth() && today.getDate() < 14) ||
            (today.getMonth() === 11 && today.getDate() > 24)
        );
    }

    protected get url(): string {
        return this.router.routerState.snapshot.url;
    }

    protected async replaceEnvInURI(): Promise<void> {
        const env = this.storage.getItem('env');

        if (env) {
            this.storage.removeItem('env');
            await this.router.navigateByUrl(env);
        }
    }
}
