import type {OnInit} from '@angular/core';
import {Directive, ElementRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {Router} from '@angular/router';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc';
import {tuiInjectElement, tuiPure, tuiZonefreeScheduler} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {debounceTime, map, startWith} from 'rxjs';

export const DEMO_PAGE_LOADED_PROVIDER = {
    provide: TUI_DOC_PAGE_LOADED,
    deps: [ElementRef, ResizeObserverService],
    useFactory(
        hostElement: ElementRef<HTMLElement>,
        resize$: Observable<unknown>,
    ): Observable<boolean> {
        return resize$.pipe(
            startWith(null),
            debounceTime(0, tuiZonefreeScheduler()), // Synchronous scrollIntoView (after click) does not work https://stackoverflow.com/a/56971002
            map(() => {
                const host = hostElement.nativeElement;
                const exampleElements = Array.from(
                    host.querySelectorAll('tui-doc-example'),
                );
                const codeElements = Array.from(host.querySelectorAll('tui-doc-code'));

                return (
                    exampleElements.every((el) => el.querySelector('.t-example')) &&
                    codeElements.every((el) => el.querySelector('.t-code'))
                );
            }),
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

    private readonly element = tuiInjectElement();

    protected readonly pageLoaded = inject(TUI_DOC_PAGE_LOADED)
        .pipe(takeUntilDestroyed())
        .subscribe(() => this.element.classList.add('_loaded'));

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
