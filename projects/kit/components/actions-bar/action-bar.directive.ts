import {
    ChangeDetectorRef,
    type ComponentRef,
    Directive,
    effect,
    inject,
    INJECTOR,
    Input,
    type OnDestroy,
    signal,
    TemplateRef,
} from '@angular/core';
import {TuiDropdownService} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';

import {TuiActionsBarsComponent} from './actions-bars.component';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiActionBar]',
})
export class TuiActionBarDirective extends PolymorpheusTemplate implements OnDestroy {
    private readonly injector = inject(INJECTOR);
    private readonly portalService = inject(TuiDropdownService);
    private readonly component = new PolymorpheusComponent(
        TuiActionsBarsComponent,
        this.injector,
    );

    private actionsBarRef: ComponentRef<TuiActionsBarsComponent> | null = null;
    private readonly opened = signal(false);
    public readonly content = inject(TemplateRef);

    constructor() {
        super(inject(TemplateRef), inject(ChangeDetectorRef));
        effect(() => {
            this.opened() ? this.show() : this.hide();
        });
    }

    @Input()
    public set tuiActionsBar(open: boolean) {
        this.opened.set(open);
    }

    public ngOnDestroy(): void {
        this.hide();
    }

    private show(): void {
        if (this.actionsBarRef !== null) {
            return;
        }

        this.actionsBarRef = this.portalService.add(this.component);
        this.actionsBarRef.changeDetectorRef.detectChanges();
    }

    private hide(): void {
        if (this.actionsBarRef === null) {
            return;
        }

        this.portalService.remove(this.actionsBarRef);
        this.actionsBarRef = null;
    }
}
