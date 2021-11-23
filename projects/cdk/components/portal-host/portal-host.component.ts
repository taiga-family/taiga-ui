import {
    ChangeDetectionStrategy,
    Component,
    ComponentFactory,
    ComponentRef,
    ElementRef,
    EmbeddedViewRef,
    Inject,
    Injector,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

import {TuiPortalService} from './portal.service';

const BLANK_CLIENT_RECT: ClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};

/**
 * Host element for dynamically created portals, for example using {@link TuiDropdownDirective}.
 */
@Component({
    selector: 'tui-portal-host',
    templateUrl: './portal-host.template.html',
    styleUrls: ['./portal-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPortalHostComponent {
    @ViewChild('positionFixedOffset')
    private readonly positionFixedOffsetRef?: ElementRef<HTMLDivElement>;

    constructor(
        @Inject(ViewContainerRef)
        private readonly viewContainerRef: ViewContainerRef,
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiPortalService) portalService: TuiPortalService,
    ) {
        portalService.attach(this);
    }

    get clientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }

    addComponentChild<C>(
        componentFactory: ComponentFactory<C>,
        injector: Injector,
    ): ComponentRef<C> {
        return this.viewContainerRef.createComponent<C>(
            componentFactory,
            undefined,
            Injector.create({
                parent: injector,
                providers: [
                    {
                        provide: TuiPortalHostComponent,
                        useValue: this,
                    },
                ],
            }),
        );
    }

    addTemplateChild<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.viewContainerRef.createEmbeddedView(templateRef, context);
    }

    fixedPositionOffset(): ClientRect {
        return this.positionFixedOffsetRef
            ? this.positionFixedOffsetRef.nativeElement.getBoundingClientRect()
            : BLANK_CLIENT_RECT;
    }
}
