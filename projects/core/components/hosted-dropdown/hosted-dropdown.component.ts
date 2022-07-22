import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {
    isElementEditable,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiActiveZoneDirective,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiGetClosestFocusable,
    tuiIsNativeFocusedIn,
    tuiIsNativeKeyboardFocusable,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {
    DROPDOWN_CONTROLLER_PROVIDER,
    TUI_DROPDOWN_WATCHED_CONTROLLER,
    TuiDropdownControllerDirective,
} from '@taiga-ui/core/directives/dropdown-controller';
import {isEditingKey} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiHostedDropdownConnectorDirective} from './hosted-dropdown-connector.directive';

@Component({
    selector: `tui-hosted-dropdown`,
    templateUrl: `./hosted-dropdown.template.html`,
    styleUrls: [`./hosted-dropdown.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiHostedDropdownComponent),
        },
        DROPDOWN_CONTROLLER_PROVIDER,
    ],
})
export class TuiHostedDropdownComponent implements TuiFocusableElementAccessor {
    @ContentChild(TuiHostedDropdownConnectorDirective, {read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    @ViewChild(`wrapper`, {read: ElementRef})
    private readonly wrapper?: ElementRef<HTMLDivElement>;

    @ViewChild(TuiDropdownDirective)
    private readonly dropdownDirective?: TuiDropdownDirective;

    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent<TuiContextWithImplicit<TuiActiveZoneDirective>> = ``;

    @Input()
    @tuiDefaultProp()
    canOpen = true;

    @Input()
    @tuiDefaultProp()
    open = false;

    @Output()
    readonly openChange = new EventEmitter<boolean>();

    @Output()
    readonly focusedChange = new EventEmitter<boolean>();

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef,
        @Inject(TUI_DROPDOWN_WATCHED_CONTROLLER)
        readonly controller: TuiDropdownControllerDirective,
    ) {}

    get host(): HTMLElement {
        return this.dropdownHost
            ? this.dropdownHost.nativeElement
            : this.elementRef.nativeElement;
    }

    get dropdown(): HTMLElement | null {
        return !this.dropdownDirective || this.dropdownDirective.dropdownBoxRef === null
            ? null
            : this.dropdownDirective.dropdownBoxRef.location.nativeElement;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return tuiIsNativeKeyboardFocusable(this.host)
            ? this.host
            : tuiGetClosestFocusable(this.host, false, this.elementRef.nativeElement);
    }

    @HostBinding(`class._hosted_dropdown_focused`)
    get focused(): boolean {
        return (
            tuiIsNativeFocusedIn(this.host) ||
            (this.open &&
                !!this.wrapper &&
                tuiIsNativeFocusedIn(this.wrapper.nativeElement))
        );
    }

    @HostListener(`focusin`, [`$event.target`])
    onFocusIn(target: HTMLElement): void {
        const host = this.dropdownHost
            ? this.dropdownHost.nativeElement
            : this.nativeFocusableElement || this.elementRef.nativeElement;

        if (!host.contains(target)) {
            this.updateOpen(false);
        }
    }

    @HostListener(`click`, [`$event.target`])
    onClick(target: HTMLElement): void {
        const host = this.nativeFocusableElement || this.host;
        const dropdownHost = this.dropdownHost ? this.dropdownHost.nativeElement : host;

        if (!this.hostEditable && dropdownHost.contains(target)) {
            this.updateOpen(!this.open);
        }
    }

    @HostListener(`keydown.esc`, [`$event`])
    onKeyDownEsc(event: Event): void {
        if (!this.canOpen || !this.open) {
            return;
        }

        event.stopPropagation();
        this.closeDropdown();
    }

    @HostListener(`keydown.arrowDown`, [`$event`, `true`])
    @HostListener(`keydown.arrowUp`, [`$event`, `false`])
    onArrow(event: KeyboardEvent, down: boolean): void {
        this.focusDropdown(event, down);
    }

    onKeydown({key, target, defaultPrevented}: KeyboardEvent): void {
        if (
            !defaultPrevented &&
            isEditingKey(key) &&
            this.hostEditable &&
            // TODO: iframe warning
            target instanceof HTMLElement &&
            !isElementEditable(target)
        ) {
            this.focusHost();
        }
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);

        if (!active) {
            this.updateOpen(false);
        }
    }

    onHostObscured(obscured: boolean): void {
        if (obscured) {
            this.closeDropdown();
        }
    }

    updateOpen(open: boolean): void {
        if (open && !this.canOpen) {
            return;
        }

        this.open = open;
        this.openChange.emit(open);
    }

    private get hostEditable(): boolean {
        const host = this.nativeFocusableElement || this.host;

        // TODO: iframe warning
        return host instanceof HTMLElement && isElementEditable(host);
    }

    private focusDropdown(event: KeyboardEvent, first: boolean): void {
        const host = this.nativeFocusableElement;

        // TODO: iframe warning
        if (
            !host ||
            !(host instanceof HTMLElement) ||
            !(event.target instanceof Node) ||
            !host.contains(event.target)
        ) {
            return;
        }

        if (
            !this.wrapper ||
            !this.open ||
            this.dropdown === null ||
            // TODO: iframe warning
            !(this.wrapper.nativeElement.nextElementSibling instanceof HTMLElement)
        ) {
            this.updateOpen(true);

            if (!isElementEditable(host)) {
                event.preventDefault();
            }

            return;
        }

        const initial = first
            ? this.wrapper.nativeElement
            : this.wrapper.nativeElement.nextElementSibling;
        const focusable = tuiGetClosestFocusable(
            initial,
            !first,
            this.wrapper.nativeElement,
        );

        if (focusable === null) {
            return;
        }

        setNativeFocused(focusable);
        event.preventDefault();
    }

    private closeDropdown(): void {
        if (this.focused) {
            this.focusHost();
        }

        this.updateOpen(false);
    }

    private focusHost(): void {
        const host = this.nativeFocusableElement;

        if (host !== null) {
            setNativeFocused(host, true, true);
        }
    }

    private updateFocused(focused: boolean): void {
        this.focusedChange.emit(focused);
    }
}
