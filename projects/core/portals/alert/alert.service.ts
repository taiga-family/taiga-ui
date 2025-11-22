import {type ComponentRef, inject, Injectable} from '@angular/core';
import {TuiPortal} from '@taiga-ui/cdk/portals';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Injectable()
export abstract class TuiAlertService<T, K = void> extends TuiPortal<T, K> {
    private readonly concurrency: number;
    private readonly current = new Map<unknown, ComponentRef<unknown>>();
    private readonly queue = new Set<PolymorpheusComponent<unknown>>();

    constructor(concurrency: number) {
        super(inject(TuiPopupService));
        this.concurrency = Math.min(concurrency, 5);
    }

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
