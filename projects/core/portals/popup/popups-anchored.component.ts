import {
    ChangeDetectionStrategy,
    type ComponentRef,
    Component,
    inject,
    INJECTOR,
    type OnDestroy,
    viewChild,
} from '@angular/core';
import {TuiVCR} from '@taiga-ui/cdk/directives/vcr';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {
    tuiAttachAnchoredPopup,
    tuiDetachAnchoredPopup,
    TuiPopupService,
} from './popup.service';

@Component({
    selector: 'tui-popups-anchored',
    imports: [TuiVCR],
    template: '<ng-container tuiVCR />',
    styles: ':host { display: contents; }',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPopupsAnchored implements OnDestroy {
    private readonly service = inject(TuiPopupService);
    private readonly injector = inject(INJECTOR);
    private readonly anchor = viewChild.required(TuiVCR);

    constructor() {
        tuiAttachAnchoredPopup(this.service, this);
    }

    public ngOnDestroy(): void {
        tuiDetachAnchoredPopup(this.service, this);
    }

    public addComponent<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        const injector = component.createInjector(this.injector);
        const ref = this.anchor().vcr.createComponent(component.component, {injector});

        ref.changeDetectorRef.detectChanges();

        return ref;
    }
}
