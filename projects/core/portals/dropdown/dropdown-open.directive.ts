import {
    computed,
    contentChild,
    Directive,
    effect,
    ElementRef,
    inject,
    input,
    model,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiObscured} from '@taiga-ui/cdk/directives/obscured';
import {
    tuiCloseWatcher,
    tuiIfMap,
    tuiWatch,
    tuiZonefull,
} from '@taiga-ui/cdk/observables';
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
import {shouldCall} from '@taiga-ui/event-plugins';
import {filter, fromEvent, merge} from 'rxjs';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownDriver} from './dropdown.driver';

function shouldClose(this: TuiDropdownOpen, event: KeyboardEvent): boolean {
    return (
        // @ts-ignore
        typeof CloseWatcher === 'undefined' &&
        // ?. for autofill events
        event.key?.toLowerCase() === 'escape' &&
        this.enabled() &&
        this.open() &&
        !this['dropdown']()?.nextElementSibling
    );
}

@Directive({
    selector:
        '[tuiDropdown][tuiDropdownAuto],[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]',
    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
    hostDirectives: [
        TuiObscured,
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
        '(document:keydown.zoneless.capture)': 'onEsc($event)',
        '(document:keydown.zoneless)': 'onKeydown($event)',
        // TODO: Necessary because startWith(false) + distinctUntilChanged() in TuiActiveZone, think of better solution
        '(tuiActiveZoneChange)': '0',
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
    private readonly activeZone = inject(TuiActiveZone);
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

    protected readonly closeSub = this.driver
        .pipe(
            tuiIfMap(() =>
                merge(
                    tuiCloseWatcher(),
                    this.obscured.tuiObscured$.pipe(filter(Boolean)),
                    this.activeZone.tuiActiveZoneChange.pipe(filter((a) => !a)),
                    fromEvent(this.el, 'focusin').pipe(
                        filter(
                            (event) =>
                                !this.host.contains(tuiGetActualTarget(event)) ||
                                !this.directive.ref(),
                        ),
                    ),
                ),
            ),
            tuiZonefull(),
            tuiWatch(),
            takeUntilDestroyed(),
        )
        .subscribe(() => this.toggle(false));

    public toggle(open: boolean): void {
        if (this.focused && !open) {
            this.host.focus({preventScroll: true});
        }

        this.update(open);
    }

    @shouldCall(shouldClose)
    protected onEsc(event: KeyboardEvent): void {
        event.preventDefault();
        this.toggle(false);
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

    protected onKeydown(event: KeyboardEvent): void {
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

    private get host(): HTMLElement {
        const initial = this.dropdownHost()?.nativeElement || this.el;
        const focusable = tuiIsFocusable(initial)
            ? initial
            : tuiGetClosestFocusable({initial, root: this.el});

        return this.dropdownHost()?.nativeElement || focusable || this.el;
    }

    private get editable(): boolean {
        return tuiIsElementEditable(this.host);
    }

    private get focused(): boolean {
        return tuiIsFocusedIn(this.host) || tuiIsFocusedIn(this.dropdown());
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
