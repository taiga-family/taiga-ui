import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    ViewChild,
} from '@angular/core';
import type {
    TuiActiveZoneDirective,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    tuiAsFocusableItemAccessor,
    TuiContextWithImplicit,
    tuiDefaultProp,
    tuiGetClosestFocusable,
    tuiIsElement,
    tuiIsElementEditable,
    tuiIsHTMLElement,
    tuiIsNativeFocusedIn,
    tuiIsNativeKeyboardFocusable,
} from '@taiga-ui/cdk';
import {
    TuiDropdownDirective,
    TuiDropdownHoverDirective,
} from '@taiga-ui/core/directives/dropdown';
import {tuiIsEditingKey} from '@taiga-ui/core/utils/miscellaneous';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, combineLatest, EMPTY} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {TuiHostedDropdownConnectorDirective} from './hosted-dropdown-connector.directive';

@Component({
    selector: `tui-hosted-dropdown`,
    templateUrl: `./hosted-dropdown.template.html`,
    styleUrls: [`./hosted-dropdown.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsFocusableItemAccessor(TuiHostedDropdownComponent)],
})
export class TuiHostedDropdownComponent implements TuiFocusableElementAccessor {
    @ContentChild(TuiHostedDropdownConnectorDirective, {read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    @ViewChild(`wrapper`, {read: ElementRef})
    private readonly wrapper?: ElementRef<HTMLDivElement>;

    @ViewChild(TuiDropdownDirective)
    private readonly dropdownDirective?: TuiDropdownDirective;

    private readonly manual$ = new BehaviorSubject(false);

    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent<TuiContextWithImplicit<TuiActiveZoneDirective>> = ``;

    @Input()
    @tuiDefaultProp()
    canOpen = true;

    @Input()
    @tuiDefaultProp()
    set open(open: boolean) {
        this.manual$.next(open);
    }

    @Output()
    readonly openChange = new EventEmitter<boolean>();

    @Output()
    readonly focusedChange = new EventEmitter<boolean>();

    readonly context!: TuiContextWithImplicit<TuiActiveZoneDirective>;

    readonly open$ = combineLatest([
        this.manual$,
        (this.hover$ || EMPTY).pipe(startWith(false)),
    ]).pipe(map(([manual, hover]) => manual || hover));

    constructor(
        @Optional()
        @Inject(TuiDropdownHoverDirective)
        private readonly hover$: TuiDropdownHoverDirective,
        @Inject(ElementRef) private readonly elementRef: ElementRef,
    ) {}

    get open(): boolean {
        return this.manual$.value;
    }

    get host(): HTMLElement {
        return this.dropdownHost?.nativeElement || this.elementRef.nativeElement;
    }

    get computedHost(): HTMLElement {
        return (
            this.dropdownHost?.nativeElement ||
            this.nativeFocusableElement ||
            this.elementRef.nativeElement
        );
    }

    get dropdown(): HTMLElement | undefined {
        return this.dropdownDirective?.dropdownBoxRef?.location.nativeElement;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return tuiIsNativeKeyboardFocusable(this.host)
            ? this.host
            : tuiGetClosestFocusable({
                  initial: this.host,
                  root: this.elementRef.nativeElement,
              });
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
        if (!this.computedHost.contains(target)) {
            this.updateOpen(false);
        }
    }

    @HostListener(`click`, [`$event.target`])
    onClick(target: HTMLElement): void {
        if (!this.hostEditable && this.computedHost.contains(target)) {
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
            tuiIsEditingKey(key) &&
            this.hostEditable &&
            tuiIsHTMLElement(target) &&
            !tuiIsElementEditable(target)
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
        return tuiIsElementEditable(this.computedHost);
    }

    private focusDropdown(event: KeyboardEvent, first: boolean): void {
        const host = this.nativeFocusableElement;

        if (
            !host ||
            !tuiIsHTMLElement(host) ||
            !tuiIsElement(event.target) ||
            !host.contains(event.target)
        ) {
            return;
        }

        if (
            !this.wrapper ||
            !this.open ||
            !this.dropdown ||
            !tuiIsHTMLElement(this.wrapper.nativeElement.nextElementSibling)
        ) {
            this.updateOpen(true);

            if (!tuiIsElementEditable(host)) {
                event.preventDefault();
            }

            return;
        }

        const initial = first
            ? this.wrapper.nativeElement
            : this.wrapper.nativeElement.nextElementSibling;
        const focusable = tuiGetClosestFocusable({
            initial,
            root: this.wrapper.nativeElement,
            previous: !first,
        });

        if (!focusable) {
            return;
        }

        focusable.focus();
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

        if (host) {
            host.focus({preventScroll: true});
        }
    }

    private updateFocused(focused: boolean): void {
        this.focusedChange.emit(focused);
    }
}
