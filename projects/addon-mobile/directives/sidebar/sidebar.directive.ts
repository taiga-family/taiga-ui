import {
    ChangeDetectorRef,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Inject,
    Injector,
    Input,
    OnDestroy,
    TemplateRef,
} from '@angular/core';
import {TuiDropdownPortalService} from '@taiga-ui/cdk';
import {TuiHorizontalDirection} from '@taiga-ui/core';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';

import {TuiSidebarComponent} from './sidebar.component';

@Directive({
    selector: '[tuiSidebar]',
})
export class TuiSidebarDirective<T = Record<string, unknown>>
    extends PolymorpheusTemplate<T>
    implements OnDestroy
{
    private sidebarRef: ComponentRef<TuiSidebarComponent> | null = null;

    @Input('tuiSidebarDirection')
    direction: TuiHorizontalDirection = 'left';

    @Input('tuiSidebarAutoWidth')
    autoWidth = false;

    @Input()
    set tuiSidebar(open: boolean) {
        if (open) {
            this.show();
        } else {
            this.hide();
        }
    }

    constructor(
        @Inject(TemplateRef) readonly content: TemplateRef<T>,
        @Inject(Injector) private readonly injector: Injector,
        @Inject(ComponentFactoryResolver)
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        @Inject(TuiDropdownPortalService)
        private readonly portalService: TuiDropdownPortalService,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(content, changeDetectorRef);
    }

    ngOnDestroy(): void {
        this.hide();
    }

    private show(): void {
        if (this.sidebarRef !== null) {
            return;
        }

        const componentFactory =
            this.componentFactoryResolver.resolveComponentFactory(TuiSidebarComponent);

        this.sidebarRef = this.portalService.add(componentFactory, this.injector);
        this.sidebarRef.changeDetectorRef.detectChanges();
    }

    private hide(): void {
        if (this.sidebarRef === null) {
            return;
        }

        this.portalService.remove(this.sidebarRef);
        this.sidebarRef = null;
    }
}
