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
import {TuiPortalService} from '@taiga-ui/cdk';
import {TuiHorizontalDirection} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';

import {TUI_SIDEBAR_CONTAINER, TuiSidebar} from './sidebar.options';

@Directive({
    selector: `[tuiSidebar]`,
})
export class TuiSidebarDirective<T = Record<string, unknown>, P = Record<string, unknown>>
    extends PolymorpheusTemplate<T>
    implements OnDestroy
{
    private sidebarRef: ComponentRef<TuiSidebar> | null = null;

    @Input(`tuiSidebarDirection`)
    direction: TuiHorizontalDirection = `left`;

    @Input(`tuiSidebarAutoWidth`)
    autoWidth = false;

    @Input(`tuiSidebarOptions`)
    options: P = {} as P;

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
        @Inject(TuiPortalService)
        private readonly portalService: TuiPortalService,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_SIDEBAR_CONTAINER)
        private readonly container: PolymorpheusComponent<any, any>,
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

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            this.container.component,
        );

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
