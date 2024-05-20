import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import type {
    TuiContext,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    TuiActiveZoneDirective,
    tuiAsFocusableItemAccessor,
    tuiGetActualTarget,
    tuiGetClosestFocusable,
    tuiInjectElement,
    tuiIsElement,
    tuiIsElementEditable,
    tuiIsHTMLElement,
    tuiIsNativeFocusedIn,
    tuiIsNativeKeyboardFocusable,
    tuiIsPresent,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {TuiPositionAccessor} from '@taiga-ui/core/classes';
import {
    TuiDropdownDirective,
    TuiDropdownHoverDirective,
} from '@taiga-ui/core/directives/dropdown';
import {tuiIsEditingKey} from '@taiga-ui/core/utils/miscellaneous';
import {shouldCall} from '@tinkoff/ng-event-plugins';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';
import {
    BehaviorSubject,
    combineLatestWith,
    delay,
    distinctUntilChanged,
    EMPTY,
    filter,
    map,
    merge,
    of,
    share,
    skip,
    switchMap,
} from 'rxjs';

import {TuiAccessorProxyDirective} from './accessor-proxy.directive';
import {TUI_HOSTED_DROPDOWN_COMPONENT} from './hosted-dropdown.token';
import {TuiHostedDropdownConnectorDirective} from './hosted-dropdown-connector.directive';

function shouldClose(
    this: TuiHostedDropdownComponent,
    event: Event | KeyboardEvent,
): boolean {
    return (
        'key' in event &&
        event.key.toLowerCase() === 'escape' &&
        this.canOpen &&
        this.open &&
        !this.dropdown?.nextElementSibling
    );
}

export interface TuiHostedDropdownContext extends TuiContext<TuiActiveZoneDirective> {
    close(): void;
}

/**
 * @deprecated use {@link TuiDropdownOpenDirective} instead
 */
@Component({
    selector: 'tui-hosted-dropdown',
    templateUrl: './hosted-dropdown.template.html',
    styleUrls: ['./hosted-dropdown.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiHostedDropdownComponent),
        {
            provide: TuiAccessorProxyDirective,
            deps: [[new Optional(), new Self(), TuiPositionAccessor]],
            useFactory: (position: TuiPositionAccessor[] | null) => position?.[0],
        },
        {
            provide: TUI_HOSTED_DROPDOWN_COMPONENT,
            useExisting: TuiHostedDropdownComponent,
        },
    ],
    host: {
        '[$.class._hosted_dropdown_focused]': 'focus$',
        '($.class._hosted_dropdown_focused)': 'focus$',
    },
})
export class TuiHostedDropdownComponent implements TuiFocusableElementAccessor {
    @ContentChild(TuiHostedDropdownConnectorDirective, {read: ElementRef})
    private readonly dropdownHost?: ElementRef<HTMLElement>;

    @ViewChild('wrapper', {read: ElementRef})
    private readonly wrapper?: ElementRef<HTMLDivElement>;

    @ViewChild(TuiDropdownDirective)
    private readonly dropdownDirective?: TuiDropdownDirective;

    private readonly hover$ = inject(TuiDropdownHoverDirective, {
        self: true,
        optional: true,
    });

    private readonly el = tuiInjectElement();
    private readonly openChange$ = new BehaviorSubject(false);
    private readonly hostHover$ = tuiTypedFromEvent(this.el, 'mouseover')
        .pipe(
            map(e => this.computedHost.contains(tuiGetActualTarget(e))),
            switchMap(visible =>
                of(visible).pipe(
                    delay(
                        (visible ? this.hover$?.showDelay : this.hover$?.hideDelay) || 0,
                    ),
                ),
            ),
            combineLatestWith((this.hover$ || EMPTY) as Observable<boolean | never>),
        )
        .pipe(map(([visible, hovered]) => visible && hovered));

    @Input()
    public content: PolymorpheusContent<TuiHostedDropdownContext>;

    @Input()
    public sided = false;

    @Input()
    public canOpen = true;

    @Output('openChange')
    public readonly open$ = merge(this.openChange$, this.hostHover$).pipe(
        filter(tuiIsPresent),
        skip(1),
        distinctUntilChanged(),
        share(),
    );

    @Output()
    public readonly focusedChange = new EventEmitter<boolean>();

    /** TODO: rename in 4.0 */
    public readonly openChange = this.openChange$;

    @ViewChild(TuiActiveZoneDirective)
    protected readonly activeZone!: TuiActiveZoneDirective;

    protected readonly focus$ = new BehaviorSubject(false);
    protected readonly context!: TuiContext<TuiActiveZoneDirective>;

    @Input()
    public set open(open: boolean) {
        this.openChange.next(open);
    }

    public get open(): boolean {
        return this.openChange.value;
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return tuiIsNativeKeyboardFocusable(this.host)
            ? this.host
            : tuiGetClosestFocusable({
                  initial: this.host,
                  root: this.el,
              });
    }

    public get focused(): boolean {
        return (
            tuiIsNativeFocusedIn(this.host) ||
            (this.open &&
                !!this.wrapper &&
                tuiIsNativeFocusedIn(this.wrapper.nativeElement))
        );
    }

    public updateOpen(open: boolean): void {
        if (!open || this.canOpen) {
            this.open = open;
        }
    }

    public readonly close = (): void => this.updateOpen(false);

    protected get host(): HTMLElement {
        return this.dropdownHost?.nativeElement || this.el;
    }

    protected get computedHost(): HTMLElement {
        return (
            this.dropdownHost?.nativeElement ||
            (this.nativeFocusableElement as HTMLElement) ||
            this.el
        );
    }

    protected get dropdown(): HTMLElement | undefined {
        return this.dropdownDirective?.dropdownBoxRef?.location.nativeElement;
    }

    @HostListener('focusin.capture.silent')
    @HostListener('focusout.capture.silent')
    protected onFocusInOut(): void {
        this.focus$.next(this.focused);
    }

    @HostListener('focusin', ['$event.target'])
    protected onFocusIn(target: HTMLElement): void {
        if (!this.computedHost.contains(target)) {
            this.updateOpen(false);
        }
    }

    @HostListener('click', ['$event.target'])
    protected onClick(target: HTMLElement): void {
        if (
            !this.hostEditable &&
            this.computedHost.contains(target) &&
            !this.hover$?.hovered
        ) {
            this.updateOpen(!this.open);
        }
    }

    @shouldCall(shouldClose)
    @HostListener('document:keydown.silent.capture', ['$event'])
    protected onKeyDownEsc(event: Event): void {
        event.preventDefault();
        this.closeDropdown();
    }

    @HostListener('keydown.arrowDown', ['$event', 'true'])
    @HostListener('keydown.arrowUp', ['$event', 'false'])
    protected onArrow(event: KeyboardEvent, down: boolean): void {
        this.focusDropdown(event, down);
    }

    protected onKeydown({key, target, defaultPrevented}: KeyboardEvent): void {
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

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);

        if (!active) {
            this.updateOpen(false);
        }
    }

    protected onHostObscured(obscured: boolean): void {
        if (obscured) {
            this.closeDropdown();
        }
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
