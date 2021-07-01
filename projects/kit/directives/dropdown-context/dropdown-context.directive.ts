import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    HostListener,
    Input,
    ViewContainerRef,
} from '@angular/core';
import {
    getClosestFocusable,
    setNativeFocused,
    TuiContextWithImplicit,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiDropdownContextHostComponent} from './dropdown-context-host.component';

@Directive({
    selector: '[tuiDropdownContext]',
})
export class TuiDropdownContextDirective<C extends object> {
    @Input('tuiDropdownContext')
    @tuiDefaultProp()
    content: PolymorpheusContent = '';

    @Input('context')
    @tuiDefaultProp()
    context: C | null = null;

    private hostRef: ComponentRef<TuiDropdownContextHostComponent> | null = null;

    private get dropdownContent(): HTMLElement | null {
        return this.hostRef?.instance.contentRef?.nativeElement || null;
    }

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        private readonly elementRef: ElementRef,
    ) {}

    @HostListener('contextmenu', ['$event'])
    onContextMenu(event: MouseEvent) {
        const {clientX: x, clientY: y} = event;

        event.preventDefault();
        this.closeDropdown();
        this.hostRef = this.openDropdown(x, y);
    }

    @HostListener('document:click', ['$event.target'])
    onLeftClickOutside(target: HTMLElement) {
        const clickedInside = this.dropdownContent?.contains(target);

        if (!clickedInside) {
            this.closeDropdown();
        }
    }

    @HostListener('document:contextmenu', ['$event.target'])
    onAnotherContextOpen(target: HTMLElement) {
        const isAnotherContextOpened = !this.elementRef.nativeElement.contains(target);

        if (isAnotherContextOpened) {
            this.closeDropdown();
        }
    }

    @HostListener('document:keydown.arrowDown', ['$event', 'true'])
    @HostListener('document:keydown.arrowUp', ['$event', 'false'])
    onArrow(event: KeyboardEvent, down: boolean) {
        if (
            !this.dropdownContent ||
            !(this.dropdownContent.nextElementSibling instanceof HTMLElement)
        ) {
            return;
        }

        event.preventDefault();

        const focusable = getClosestFocusable(
            down ? this.dropdownContent : this.dropdownContent.nextElementSibling,
            !down,
            this.dropdownContent,
        );

        if (focusable === null) {
            return;
        }

        setNativeFocused(focusable);
    }

    @HostListener('document:keydown.esc', ['$event'])
    onKeyDownEsc(event: KeyboardEvent) {
        if (!this.dropdownContent) {
            return;
        }

        event.stopPropagation();
        this.closeDropdown();
    }

    private closeDropdown(): void {
        this.viewContainerRef.clear();
        this.hostRef = null;
    }

    private buildContext(data: C): TuiContextWithImplicit<C> & {close: () => void} {
        const close = this.closeDropdown.bind(this);

        return {
            close,
            $implicit: data,
        };
    }

    private openDropdown(
        x: number,
        y: number,
    ): ComponentRef<TuiDropdownContextHostComponent> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            TuiDropdownContextHostComponent,
        );
        const componentRef = this.viewContainerRef.createComponent(componentFactory);

        componentRef.instance.content = this.content;
        componentRef.instance.context = this.buildContext(this.context || ({} as C));
        componentRef.instance.x = x;
        componentRef.instance.y = y;

        return componentRef;
    }
}
