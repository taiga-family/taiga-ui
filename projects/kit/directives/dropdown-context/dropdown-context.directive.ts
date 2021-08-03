import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    forwardRef,
    HostListener,
    Inject,
    Injector,
    Input,
    Optional,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    getClosestFocusable,
    setNativeFocused,
    TuiActiveZoneDirective,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiDestroyService,
    TuiParentsScrollService,
    TuiPortalService,
} from '@taiga-ui/cdk';
import {
    AbstractTuiDropdown,
    TUI_DROPDOWN_DIRECTIVE,
    TuiDropdown,
    TuiDropdownBoxComponent,
} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {fromEvent, merge} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

// @dynamic
@Directive({
    selector: '[tuiDropdownContext]',
    providers: [
        TuiParentsScrollService,
        TuiDestroyService,
        {
            provide: TUI_DROPDOWN_DIRECTIVE,
            useExisting: forwardRef(() => TuiDropdownContextDirective),
        },
    ],
})
export class TuiDropdownContextDirective<C extends object>
    extends AbstractTuiDropdown
    implements TuiDropdown {
    @Input('tuiDropdownContext')
    @tuiDefaultProp()
    content: PolymorpheusContent = '';

    @Input('tuiDropdownContextData')
    @tuiDefaultProp()
    contextData: C | null = null;

    private lastClickedClientRect: ClientRect = this.getClientRectFromDot(0, 0);
    private hostRef: ComponentRef<TuiDropdownBoxComponent> | null = null;

    constructor(
        protected readonly elementRef: ElementRef,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TuiDestroyService) readonly destroy$: TuiDestroyService,
        @Inject(TuiParentsScrollService) readonly refresh$: TuiParentsScrollService,
        @Inject(ComponentFactoryResolver)
        componentFactoryResolver: ComponentFactoryResolver,
        @Inject(Injector) injector: Injector,
        @Inject(TuiPortalService) portalService: TuiPortalService,
        @Optional() activeZone: TuiActiveZoneDirective | null,
    ) {
        super(componentFactoryResolver, injector, portalService, elementRef, activeZone);

        merge(refresh$, fromEvent(this.windowRef, 'resize'))
            .pipe(
                filter(() => !!this.dropdownContent),
                takeUntil(destroy$),
            )
            .subscribe(() => this.closeDropdownBox());
    }

    get clientRect(): ClientRect {
        return this.lastClickedClientRect;
    }

    get context(): (TuiContextWithImplicit<C> & {close: () => void}) | null {
        return this.buildContext(this.contextData || ({} as C));
    }

    private get dropdownContent(): HTMLElement | null {
        return this.hostRef?.instance.contentElementRef?.nativeElement || null;
    }

    @HostListener('contextmenu.prevent', ['$event'])
    onContextMenu(event: MouseEvent) {
        const {clientX: x, clientY: y} = event;

        this.closeDropdownBox();
        this.hostRef = this.openDropdown(x, y);
    }

    /**
     * TODO: Optimize this
     * (.silent event modifier is not suitable for optimization because it breaks disappearing animation)
     */
    @HostListener('document:click', ['$event.target'])
    onLeftClickOutside(target: HTMLElement) {
        const clickedInside = this.dropdownContent?.contains(target);

        if (!clickedInside) {
            this.closeDropdownBox();
        }
    }

    @HostListener('document:contextmenu', ['$event.target'])
    onAnotherContextOpen(target: HTMLElement) {
        const isAnotherContextOpened = !this.elementRef.nativeElement.contains(target);

        if (isAnotherContextOpened) {
            this.closeDropdownBox();
        }
    }

    @HostListener('document:keydown.arrowDown', ['$event', 'true'])
    @HostListener('document:keydown.arrowUp', ['$event', 'false'])
    onArrow(event: KeyboardEvent, down: boolean) {
        if (!this.dropdownContent) {
            return;
        }

        event.preventDefault();

        const nextEl = this.dropdownContent.nextElementSibling;
        const initial =
            down || !this.checkIsFocusableElement(nextEl) ? this.dropdownContent : nextEl;
        const focusable = getClosestFocusable(initial, !down, this.dropdownContent);

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
        this.closeDropdownBox();
    }

    private buildContext(data: C): TuiContextWithImplicit<C> & {close: () => void} {
        const close = this.closeDropdownBox.bind(this);

        return {
            close,
            $implicit: data,
        };
    }

    private openDropdown(
        x: number,
        y: number,
    ): ComponentRef<TuiDropdownBoxComponent> | null {
        this.lastClickedClientRect = this.getClientRectFromDot(x, y);
        this.openDropdownBox();

        return this.dropdownBoxRef;
    }

    private getClientRectFromDot(x: number, y: number): ClientRect {
        return {
            top: y,
            bottom: y,
            left: x,
            right: x,
            height: 0,
            width: 0,
        };
    }

    private checkIsFocusableElement(element: Element | null): element is HTMLElement {
        return !!element && 'focus' in element && 'blur' in element;
    }
}
