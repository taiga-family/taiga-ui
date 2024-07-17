import type {OnChanges} from '@angular/core';
import {
    ChangeDetectorRef,
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiObscured} from '@taiga-ui/cdk/directives/obscured';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {
    tuiGetActualTarget,
    tuiInjectElement,
    tuiIsElement,
    tuiIsElementEditable,
    tuiIsHTMLElement,
} from '@taiga-ui/cdk/utils/dom';
import {
    tuiGetClosestFocusable,
    tuiIsNativeFocusedIn,
    tuiIsNativeKeyboardFocusable,
} from '@taiga-ui/cdk/utils/focus';
import {tuiAsDriver} from '@taiga-ui/core/classes';
import {tuiIsEditingKey} from '@taiga-ui/core/utils/miscellaneous';
import {shouldCall} from '@taiga-ui/event-plugins';
import {filter, fromEvent, map, merge} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownDriver} from './dropdown.driver';

function shouldClose(this: TuiDropdownOpen, event: Event | KeyboardEvent): boolean {
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
    selector: '[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]',
    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
    hostDirectives: [
        TuiObscured,
        {
            directive: TuiActiveZone,
            inputs: ['tuiActiveZoneParent'],
            outputs: ['tuiActiveZoneChange'],
        },
    ],
})
export class TuiDropdownOpen implements OnChanges {
    @ContentChild('tuiDropdownHost', {descendants: true, read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    private readonly directive = inject(TuiDropdownDirective);
    private readonly el = tuiInjectElement();
    private readonly obscured = inject(TuiObscured);

    protected readonly sub = merge(
        this.obscured.tuiObscured.pipe(filter(Boolean)),
        inject(TuiActiveZone).tuiActiveZoneChange.pipe(filter((a) => !a)),
        fromEvent(this.el, 'focusin').pipe(
            map(tuiGetActualTarget),
            filter(
                (target) => !this.host.contains(target) || !this.directive.dropdownBoxRef,
            ),
        ),
    )
        .pipe(tuiWatch(inject(ChangeDetectorRef)), takeUntilDestroyed())
        .subscribe(() => this.toggle(false));

    @Input()
    public tuiDropdownEnabled = true;

    @Input()
    public tuiDropdownOpen: boolean | '' = false;

    @Output()
    public readonly tuiDropdownOpenChange = new EventEmitter<boolean>();

    // TODO: make it private when all legacy controls will be deleted from @taiga-ui/legacy (5.0)
    public readonly driver = inject(TuiDropdownDriver);

    public get dropdown(): HTMLElement | undefined {
        return this.directive.dropdownBoxRef?.location.nativeElement;
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

    @HostListener('click', ['$event.target'])
    protected onClick(target: HTMLElement): void {
        if (!this.editable && this.host.contains(target)) {
            this.update(!this.tuiDropdownOpen);
        }
    }

    @HostListener('keydown.arrowDown', ['$event', 'false'])
    @HostListener('keydown.arrowUp', ['$event', 'true'])
    protected onArrow(event: KeyboardEvent, up: boolean): void {
        if (
            !tuiIsElement(event.target) ||
            !this.host.contains(event.target) ||
            !this.tuiDropdownEnabled
        ) {
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

    private get host(): HTMLElement {
        const initial = this.dropdownHost?.nativeElement || this.el;
        const focusable = tuiIsNativeKeyboardFocusable(initial)
            ? initial
            : tuiGetClosestFocusable({initial, root: this.el});

        return this.dropdownHost?.nativeElement || focusable || this.el;
    }

    private get editable(): boolean {
        return tuiIsElementEditable(this.host);
    }

    private get focused(): boolean {
        return tuiIsNativeFocusedIn(this.host) || tuiIsNativeFocusedIn(this.dropdown);
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
