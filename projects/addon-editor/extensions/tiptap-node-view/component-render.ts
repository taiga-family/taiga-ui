import type {ComponentRef, Injector, Type} from '@angular/core';
import {ApplicationRef, ComponentFactoryResolver, ElementRef} from '@angular/core';

/**
 * Copied from
 * {@link https://github.com/sibiraj-s/ngx-tiptap/blob/master/projects/ngx-tiptap/src/lib/AngularRenderer.ts ngx-tiptap}
 */
export class TuiComponentRenderer<C, P> {
    private readonly componentRef: ComponentRef<C>;

    constructor(component: Type<C>, injector: Injector, props: Partial<P>) {
        const applicationRef = injector.get(ApplicationRef);

        const componentFactoryResolver = injector.get(ComponentFactoryResolver);
        const factory = componentFactoryResolver.resolveComponentFactory(component);

        this.componentRef = factory.create(injector, []);

        // set input props to the component
        this.updateProps(props);

        // Attach to the view so that the change detector knows to run
        applicationRef.attachView(this.componentRef.hostView);
    }

    get instance(): C {
        return this.componentRef.instance;
    }

    get elementRef(): ElementRef {
        return this.componentRef.injector.get(ElementRef);
    }

    get dom(): HTMLElement {
        return this.elementRef.nativeElement;
    }

    updateProps<T extends P>(props: Partial<T>): void {
        Object.entries(props).forEach(([key, value]) => {
            this.instance[key as keyof C] = value as C[keyof C];
        });
    }

    detectChanges(): void {
        this.componentRef.changeDetectorRef.detectChanges();
    }

    destroy(): void {
        this.componentRef.destroy();
    }
}
