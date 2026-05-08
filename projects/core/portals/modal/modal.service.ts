import {inject, Injectable, type Type} from '@angular/core';
import {TUI_LEAVE} from '@taiga-ui/cdk/directives/animated';
import {TuiPortal} from '@taiga-ui/cdk/portals';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiModalComponent} from './modal.component';

@Injectable()
export abstract class TuiModalService<T, K = void> extends TuiPortal<T, K> {
    protected abstract readonly content: Type<unknown>;
    protected readonly component = TuiModalComponent;

    constructor() {
        super(inject(TuiPopupService));
    }

    protected override add(
        component: PolymorpheusComponent<TuiModalComponent<T>>,
    ): () => void {
        const ref = this.service.add(component);
        const el: HTMLElement = ref.location.nativeElement;

        ref.instance.component.set(new PolymorpheusComponent(this.content));

        return () => {
            ref.instance.component.set(null);
            ref.changeDetectorRef.detectChanges();
            el.classList.add(TUI_LEAVE);

            Promise.allSettled(getAnimations(el))
                .then(async () => Promise.allSettled(getAnimations(el.firstElementChild)))
                .then(() => {
                    // Under zoneless + provideAnimations Angular's animation engine queues
                    // the modal removal but engine.flush never runs from a microtask, so
                    // the element stays in DOM with `tui-leave` class. Detach it manually.
                    ref.destroy();
                    el.remove();
                });
        };
    }
}

function getAnimations(el: Element | null): ReadonlyArray<Promise<unknown>> {
    return el?.getAnimations?.().map(async ({finished}) => finished) || [];
}
