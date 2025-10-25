import {
    computed,
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    type OnChanges,
    Output,
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
    tuiIsFocusedIn,
    tuiIsKeyboardFocusable,
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
        // ?. for auto fill events
        event.key?.toLowerCase() === 'escape' &&
        this.tuiDropdownEnabled &&
        !!this.tuiDropdownOpen &&
        !this['dropdown']()?.nextElementSibling
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
export class TuiDropdownOpen implements OnChanges {
    @ContentChild('tuiDropdownHost', {descendants: true, read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    private readonly directive = inject(TuiDropdownDirective);
    private readonly el = tuiInjectElement();
    private readonly obscured = inject(TuiObscured);
    private readonly activeZone = inject(TuiActiveZone);

    private readonly dropdown = computed(
        () => this.directive.ref()?.location.nativeElement,
    );

    @Input()
    public tuiDropdownEnabled = true;

    @Input()
    public tuiDropdownOpen: boolean | '' = false;

    @Output()
    public readonly tuiDropdownOpenChange = new EventEmitter<boolean>();

    // TODO: make it private when all legacy controls will be deleted from @taiga-ui/legacy (5.0)
    public readonly driver = inject(TuiDropdownDriver);
    public readonly sub = this.driver
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

    public readonly sync = this.driver.pipe(takeUntilDestroyed()).subscribe((open) => {
        if (open !== this.tuiDropdownOpen) {
            this.update(open);
        }
    });

    public ngOnChanges(): void {
        this.drive(!!this.tuiDropdownOpen);
        this.tuiDropdownOpenChange.emit(!!this.tuiDropdownOpen);
    }

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
            this.update(!this.tuiDropdownOpen);
        }
    }

    protected onArrow(event: KeyboardEvent, up: boolean): void {
        if (
            !tuiIsElement(event.target) ||
            !this.host.contains(event.target) ||
            !this.tuiDropdownEnabled ||
            !this.directive._content()
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
        const initial = this.dropdownHost?.nativeElement || this.el;
        const focusable = tuiIsKeyboardFocusable(initial)
            ? initial
            : tuiGetClosestFocusable({initial, root: this.el});

        return this.dropdownHost?.nativeElement || focusable || this.el;
    }

    private get editable(): boolean {
        return tuiIsElementEditable(this.host);
    }

    private get focused(): boolean {
        return tuiIsFocusedIn(this.host) || tuiIsFocusedIn(this.dropdown());
    }

    private update(open: boolean): void {
        if (open && !this.tuiDropdownEnabled) {
            return this.drive();
        }

        this.tuiDropdownOpen = open;
        this.tuiDropdownOpenChange.emit(open);
        this.drive();
    }

    private drive(open = !!this.tuiDropdownOpen && this.tuiDropdownEnabled): void {
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
