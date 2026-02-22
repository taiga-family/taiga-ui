import {DOCUMENT} from '@angular/common';
import {
    computed,
    contentChild,
    Directive,
    effect,
    ElementRef,
    forwardRef,
    inject,
    input,
    model,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiObscured} from '@taiga-ui/cdk/directives/obscured';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {
    tuiGetActualTarget,
    tuiInjectElement,
    tuiIsElement,
    tuiIsElementEditable,
    tuiIsHTMLElement,
} from '@taiga-ui/cdk/utils/dom';
import {
    tuiGetClosestFocusable,
    tuiIsFocusable,
    tuiIsFocusedIn,
} from '@taiga-ui/cdk/utils/focus';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsDriver} from '@taiga-ui/core/classes';
import {tuiIsEditingKey} from '@taiga-ui/core/utils/miscellaneous';
import {filter} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownDriver} from './dropdown.driver';
import {TuiDropdownA11y} from './dropdown-a11y.directive';
import {TuiDropdownClose} from './dropdown-close.directive';

@Directive({
    selector:
        '[tuiDropdown][tuiDropdownAuto],[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]',
    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
    hostDirectives: [
        TuiObscured,
        {directive: forwardRef(() => TuiDropdownA11y), inputs: ['tuiDropdownRole']},
        {directive: TuiDropdownClose, outputs: ['tuiDropdownClose']},
        {
            directive: TuiActiveZone,
            inputs: ['tuiActiveZoneParent'],
            outputs: ['tuiActiveZoneChange'],
        },
    ],
    host: {
        '(click)': 'onClick($event.target)',
        '(keydown.arrowDown)': 'onArrow($event, false)',
        '(keydown.arrowUp)': 'onArrow($event, true)',
        // TODO: Necessary because startWith(false) + distinctUntilChanged() in TuiActiveZone, think of better solution
        '(tuiActiveZoneChange)': '0',
        '(tuiDropdownClose)': 'toggle(false)',
    },
})
export class TuiDropdownOpen {
    private readonly dropdownHost = contentChild('tuiDropdownHost', {
        descendants: true,
        read: ElementRef,
    });

    private readonly directive = inject(TuiDropdownDirective);
    private readonly el = tuiInjectElement();
    private readonly obscured = inject(TuiObscured);
    private readonly driver = inject(TuiDropdownDriver);
    private readonly dropdown = computed(
        () => this.directive.ref()?.location.nativeElement,
    );

    public readonly enabled = input(true, {alias: 'tuiDropdownEnabled'});
    public readonly open = model(false, {alias: 'tuiDropdownOpen'});

    protected readonly driveEffect = effect(() => this.drive(this.open()));
    protected readonly syncSub = this.driver
        .pipe(
            filter((open) => open !== this.open()),
            takeUntilDestroyed(),
        )
        .subscribe((open) => this.update(open));

    protected readonly keydownSub = tuiTypedFromEvent(inject(DOCUMENT), 'keydown')
        .pipe(takeUntilDestroyed())
        .subscribe((event) => this.onKeydown(event));

    public get host(): HTMLElement {
        const initial = this.dropdownHost()?.nativeElement || this.el;
        const focusable = tuiIsFocusable(initial)
            ? initial
            : tuiGetClosestFocusable({initial, root: this.el});

        return this.dropdownHost()?.nativeElement || focusable || this.el;
    }

    public toggle(open: boolean): void {
        if (this.focused && !open) {
            this.host.focus({preventScroll: true});
        }

        this.update(open);
    }

    protected onClick(target: HTMLElement): void {
        if (!this.editable && this.host.contains(target)) {
            this.update(!this.open());
        }
    }

    protected onArrow(event: KeyboardEvent, up: boolean): void {
        if (
            !tuiIsElement(event.target) ||
            !this.host.contains(event.target) ||
            !this.enabled() ||
            !this.directive.content()
        ) {
            return;
        }

        event.preventDefault();
        this.focusDropdown(up);
    }

    private get editable(): boolean {
        return tuiIsElementEditable(this.host);
    }

    private get focused(): boolean {
        return tuiIsFocusedIn(this.host) || tuiIsFocusedIn(this.dropdown());
    }

    private onKeydown(event: KeyboardEvent): void {
        const target = tuiGetActualTarget(event);

        if (
            !event.defaultPrevented &&
            tuiIsEditingKey(event.key) &&
            this.editable &&
            this.focused &&
            tuiIsHTMLElement(target) &&
            !tuiIsElementEditable(target)
        ) {
            this.host.focus({preventScroll: true});
        }
    }

    private update(open: boolean): void {
        if (open && !this.enabled()) {
            return this.drive();
        }

        this.open.set(open);
        this.drive();
    }

    private drive(open = this.open() && this.enabled()): void {
        tuiSetSignal(this.obscured.tuiObscuredEnabled, open);
        this.driver.next(open);
    }

    private focusDropdown(previous: boolean): void {
        const root = this.dropdown();

        if (!root) {
            this.update(true);

            return;
        }

        const doc = this.el.ownerDocument;
        const child = root.appendChild(doc.createElement('div'));
        const initial = previous ? child : root;
        const focusable = tuiGetClosestFocusable({initial, previous, root});

        child.remove();
        focusable?.focus();
    }
}
