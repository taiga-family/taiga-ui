import {DOCUMENT} from '@angular/common';
import {
    ComponentFactoryResolver,
    Inject,
    Injectable,
    INJECTOR,
    Injector,
    Renderer2,
    Type,
} from '@angular/core';
import {TUI_DEFAULT_RENDERER} from '@taiga-ui/cdk/tokens';

/**
 * Service to use styles with directives
 */
@Injectable({
    providedIn: `root`,
})
export class TuiDirectiveStylesService {
    private readonly map = new Map<Type<unknown>, unknown>();

    constructor(
        @Inject(ComponentFactoryResolver)
        private readonly resolver: ComponentFactoryResolver,
        @Inject(INJECTOR) private readonly injector: Injector,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(TUI_DEFAULT_RENDERER) private readonly renderer: Renderer2,
    ) {}

    addComponent(component: Type<unknown>): void {
        if (!this.map.has(component)) {
            this.map.set(
                component,
                this.resolver.resolveComponentFactory(component).create(this.injector),
            );
        }
    }

    /** @deprecated use components approach
     * TODO: delete in v3.0
     */
    addStyle(styles: string, attribute: string): void {
        if (this.documentRef.head.querySelector(`style[${attribute}]`)) {
            return;
        }

        const style = this.renderer.createElement(`style`);

        this.renderer.setProperty(style, `textContent`, styles);
        this.renderer.setAttribute(style, attribute, ``);
        this.documentRef.head.appendChild(style);
    }
}
