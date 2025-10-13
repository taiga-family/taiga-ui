import {type ComponentRef, Directive, inject, Injectable, input} from '@angular/core';
import {tuiAsPortal, TuiPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiPopupService} from '@taiga-ui/core/directives/popup';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiToastComponent} from './toast.component';
import {TUI_TOAST_OPTIONS, type TuiToastOptions} from './toast.options';

export const TUI_TOASTS_CONCURRENCY = tuiCreateTokenFromFactory<number>(() =>
    inject(TUI_IS_MOBILE) ? 1 : 2,
);

@Injectable({
    providedIn: 'root',
    deps: [TuiPopupService],
    useClass: TuiToastService,
})
export class TuiToastService extends TuiPortal<TuiToastOptions<any>> {
    private readonly concurrency = Math.min(inject(TUI_TOASTS_CONCURRENCY), 5);
    private readonly current = new Map<unknown, ComponentRef<unknown>>();
    private readonly queue = new Set<PolymorpheusComponent<unknown>>();

    protected override readonly options = inject(TUI_TOAST_OPTIONS);
    protected override readonly component = TuiToastComponent;

    protected override add(component: PolymorpheusComponent<unknown>): () => void {
        if (this.current.size < this.concurrency) {
            this.current.set(component, this.service.add(component));
        } else {
            this.queue.add(component);
        }

        return () => {
            this.current.get(component)?.destroy();
            this.current.delete(component);
            this.queue.delete(component);

            const [next] = this.queue;

            if (this.current.size < this.concurrency && next) {
                this.current.set(next, this.service.add(next));
                this.queue.delete(next);
            }
        };
    }
}

@Directive({
    selector: 'ng-template[tuiToast]',
    providers: [tuiAsPortal(TuiToastService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['options: tuiToastOptions', 'open: tuiToast'],
            outputs: ['openChange: tuiToastChange'],
        },
    ],
})
export class TuiToastTemplate<T> {
    public readonly tuiToastOptions = input<Partial<TuiToastOptions<T>>>({});
}
