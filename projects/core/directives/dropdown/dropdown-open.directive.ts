import {
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Input,
    OnChanges,
    Output,
} from '@angular/core';
import {
    TuiActiveZoneDirective,
    TuiDestroyService,
    tuiGetActualTarget,
    tuiGetClosestFocusable,
    tuiIsElement,
    tuiIsElementEditable,
    tuiIsHTMLElement,
    tuiIsNativeFocusedIn,
    tuiIsNativeKeyboardFocusable,
    TuiObscuredDirective,
} from '@taiga-ui/cdk';
import {tuiAsDriver} from '@taiga-ui/core/abstract';
import {tuiIsEditingKey} from '@taiga-ui/core/utils/miscellaneous';
import {shouldCall} from '@tinkoff/ng-event-plugins';
import {filter, fromEvent, map, merge, takeUntil} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownDriver} from './dropdown.driver';
import {TUI_DROPDOWN_CONTEXT} from './dropdown.providers';

function shouldClose(
    this: TuiDropdownOpenDirective,
    event: Event | KeyboardEvent,
): boolean {
    return (
        'key' in event &&
        event.key.toLowerCase() === 'escape' &&
        this.tuiDropdownEnabled &&
        !!this.tuiDropdownOpen &&
        !this.dropdown?.nextElementSibling
    );
}

@Directive({
    standalone: true,
    selector: '[tuiDropdownOpen],[tuiDropdownOpenChange]',
    hostDirectives: [TuiObscuredDirective, TuiActiveZoneDirective],
    providers: [
        TuiDestroyService,
        TuiDropdownDriver,
        tuiAsDriver(TuiDropdownDriver),
        {
            provide: TUI_DROPDOWN_CONTEXT,
            deps: [TuiActiveZoneDirective, TuiDropdownOpenDirective],
            useFactory: (
                $implicit: TuiActiveZoneDirective,
                self: TuiDropdownOpenDirective,
            ) => ({
                $implicit,
                close: () => self.toggle.call(self, false),
            }),
        },
    ],
})
export class TuiDropdownOpenDirective implements OnChanges {
    @ContentChild('tuiDropdownHost', {descendants: true, read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    // TODO: Remove optional after refactor is complete
    private readonly directive = inject(TuiDropdownDirective, {optional: true});
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly driver = inject(TuiDropdownDriver);
    private readonly obscured = inject(TuiObscuredDirective);

    @Input()
    public tuiDropdownEnabled = true;

    @Input()
    public tuiDropdownOpen: boolean | '' = false;

    @Output()
    public readonly tuiDropdownOpenChange = new EventEmitter<boolean>();

    protected readonly sub = merge(
        this.obscured.tuiObscured.pipe(filter(Boolean)),
        inject(TuiActiveZoneDirective).tuiActiveZoneChange.pipe(filter(a => !a)),
        fromEvent(this.el, 'focusin').pipe(
            map(tuiGetActualTarget),
            filter(target => !this.host.contains(target)),
        ),
    )
        .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
        .subscribe(() => this.toggle(false));

    public get dropdown(): HTMLElement | undefined {
        return this.directive?.dropdownBoxRef?.location.nativeElement;
    }

    @HostListener('click', ['$event.target', '$event.defaultPrevented'])
    protected onClick(target: HTMLElement, prevented: boolean): void {
        if (!this.editable && !prevented && this.host.contains(target)) {
            this.update(!this.tuiDropdownOpen);
        }
    }

    @HostListener('keydown.arrowDown', ['$event', 'false'])
    @HostListener('keydown.arrowUp', ['$event', 'true'])
    protected onArrow(event: KeyboardEvent, up: boolean): void {
        if (!tuiIsElement(event.target) || !this.host.contains(event.target)) {
            return;
        }

        event.preventDefault();
        this.focusDropdown(up);
    }

    @shouldCall(shouldClose)
    @HostListener('document:keydown.silent.capture', ['$event'])
    protected onEsc(event: Event): void {
        event.preventDefault();
        this.toggle(false);
    }

    @HostListener('document:keydown.silent', ['$event'])
    protected onKeydown({key, target, defaultPrevented}: KeyboardEvent): void {
        if (
            defaultPrevented ||
            !tuiIsEditingKey(key) ||
            !this.editable ||
            !this.focused ||
            !tuiIsHTMLElement(target) ||
            (tuiIsElementEditable(target) && target !== this.host)
        ) {
            return;
        }

        this.update(true);
        this.host.focus({preventScroll: true});
    }

    public ngOnChanges(): void {
        this.drive();
    }

    public toggle(open: boolean): void {
        if (this.focused && !open) {
            this.host.focus({preventScroll: true});
        }

        this.update(open);
    }

    private get host(): HTMLElement {
        const initial = this.dropdownHost?.nativeElement || this.el;
        const focusable = tuiIsNativeKeyboardFocusable(initial)
            ? initial
            : tuiGetClosestFocusable({initial, root: this.el});

        return this.dropdownHost?.nativeElement || focusable || this.el;
    }

    private get focused(): boolean {
        return tuiIsNativeFocusedIn(this.host) || tuiIsNativeFocusedIn(this.dropdown);
    }

    private get editable(): boolean {
        return tuiIsElementEditable(this.host);
    }

    private update(open: boolean): void {
        if (open && !this.tuiDropdownEnabled) {
            return;
        }

        this.tuiDropdownOpen = open;
        this.tuiDropdownOpenChange.emit(open);
        this.drive();
    }

    private drive(open = this.tuiDropdownOpen && this.tuiDropdownEnabled): void {
        this.obscured.tuiObscuredEnabled = !!open;
        this.driver.next(!!open);
    }

    private focusDropdown(previous: boolean): void {
        if (!this.dropdown) {
            this.update(true);

            return;
        }

        const doc = this.el.ownerDocument;
        const child = this.dropdown.appendChild(doc.createElement('div'));
        const initial = previous ? child : this.dropdown;
        const focusable = tuiGetClosestFocusable({
            initial,
            previous,
            root: this.dropdown,
        });

        child.remove();
        focusable?.focus();
    }
}
