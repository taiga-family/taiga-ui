import {inject, Injectable, type Type} from '@angular/core';
import {TUI_LEAVE} from '@taiga-ui/cdk/directives/animated';
import {TuiPortal} from '@taiga-ui/cdk/portals';
import {TuiPopupService} from '@taiga-ui/core/directives/popup';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiModal} from './modal.component';

@Injectable()
export abstract class TuiModalService<T, K = void> extends TuiPortal<T, K> {
    protected abstract readonly content: Type<unknown>;
    protected readonly component = TuiModal;

    constructor() {
        super(inject(TuiPopupService));
    }

    protected override add(component: PolymorpheusComponent<TuiModal<T>>): () => void {
        const ref = this.service.add(component);
        const el: HTMLElement = ref.location.nativeElement;

        ref.instance.component.set(new PolymorpheusComponent(this.content));

        return () => {
            ref.instance.component.set(null);
            ref.changeDetectorRef.detectChanges();
            el.classList.add(TUI_LEAVE);

            Promise.allSettled(getAnimations(el))
                .then(async () => Promise.allSettled(getAnimations(el.firstElementChild)))
                .then(() => ref.destroy());
        };
    }
}

function getAnimations(el: Element | null): ReadonlyArray<Promise<unknown>> {
    return el?.getAnimations().map(async ({finished}) => finished) || [];
}
