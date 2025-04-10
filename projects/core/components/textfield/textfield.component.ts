import {NgIf} from '@angular/common';
import type {AfterContentInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChild,
    ContentChildren,
    ElementRef,
    forwardRef,
    inject,
    Input,
    signal,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiControlValue, tuiQueryListChanges} from '@taiga-ui/cdk/observables';
import {tuiInjectId} from '@taiga-ui/cdk/services';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {
    tuiAsDataListHost,
    TuiWithOptionContent,
} from '@taiga-ui/core/components/data-list';
import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiDropdownDirective,
    TuiDropdownFixed,
    tuiDropdownOpen,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TuiWithItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_CLEAR_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {fromEvent, map, merge, ReplaySubject, startWith, switchMap} from 'rxjs';

import {TuiTextfieldDirective} from './textfield.directive';
import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';
import type {TuiTextfieldAccessor} from './textfield-accessor';
import {TUI_TEXTFIELD_ACCESSOR} from './textfield-accessor';
import {TUI_AUXILIARY} from './textfield-auxiliary';
import {TuiWithTextfieldDropdown} from './textfield-dropdown.directive';

@Component({
    standalone: true,
    selector: 'tui-textfield',
    imports: [NgIf, PolymorpheusOutlet, TuiButton, WaResizeObserver],
    templateUrl: './textfield.template.html',
    styles: ['@import "@taiga-ui/core/styles/components/textfield.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({size: 'xs', appearance: 'icon'}),
        tuiAsDataListHost(TuiTextfieldComponent),
    ],
    hostDirectives: [
        TuiDropdownDirective,
        TuiDropdownFixed,
        TuiWithDropdownOpen,
        TuiWithIcons,
        TuiWithItemsHandlers,
        TuiWithOptionContent,
        TuiWithTextfieldDropdown,
    ],
    host: {
        '[attr.data-size]': 'options.size()',
        '[class._with-label]': 'hasLabel',
        '[class._with-template]': 'content',
        '[class._disabled]': 'input?.nativeElement.disabled',
    },
})
export class TuiTextfieldComponent<T> implements TuiDataListHost<T>, AfterContentInit {
    // TODO: refactor to signal inputs after Angular update
    private readonly filler = signal('');
    private readonly autoId = tuiInjectId();
    private readonly open = tuiDropdownOpen();
    private readonly focusedIn = tuiFocusedIn(tuiInjectElement());
    private readonly contentReady$ = new ReplaySubject<boolean>(1);

    @ContentChild(forwardRef(() => TuiLabel), {read: ElementRef})
    protected readonly label?: ElementRef<HTMLElement>;

    @ContentChild(NgControl)
    protected readonly control?: NgControl;

    @ContentChildren(TUI_AUXILIARY, {descendants: true})
    protected readonly auxiliaryQuery: QueryList<object> = EMPTY_QUERY;

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly clear = toSignal(inject(TUI_CLEAR_WORD));

    protected computedFiller = computed((value = this.value()) => {
        const filledValue = value + this.filler().slice(value.length);

        return filledValue.length > value.length ? filledValue : '';
    });

    protected showFiller = computed<boolean>(
        () =>
            this.focused() &&
            !!this.computedFiller() &&
            (!!this.value() || !this.input?.nativeElement.placeholder),
    );

    @ViewChild('vcr', {read: ViewContainerRef, static: true})
    public readonly vcr?: ViewContainerRef;

    @ContentChild(TUI_TEXTFIELD_ACCESSOR, {descendants: true})
    public readonly accessor?: TuiTextfieldAccessor<T>;

    @ContentChild(forwardRef(() => TuiTextfieldDirective), {
        read: ElementRef,
        static: true,
    })
    public readonly input?: ElementRef<HTMLInputElement>;

    @Input()
    public content: PolymorpheusContent<TuiContext<T>>;

    public readonly focused = computed(() => this.open() || this.focusedIn());
    public readonly options = inject(TUI_TEXTFIELD_OPTIONS);
    public readonly el = tuiInjectElement();
    public readonly value = toSignal(
        merge(
            fromEvent(tuiInjectElement(), 'input'),
            this.contentReady$.pipe(
                switchMap(() => tuiControlValue(this.control ?? null)),
            ),
        ).pipe(map(() => this.input?.nativeElement.value ?? '')),
        {initialValue: ''},
    );

    // TODO: Refactor to signal queries when Angular is updated
    public readonly auxiliaries = toSignal<readonly object[]>(
        this.contentReady$.pipe(
            switchMap(() => tuiQueryListChanges(this.auxiliaryQuery)),
            startWith([]),
        ),
        {requireSync: true},
    );

    @Input('filler')
    public set fillerSetter(filler: string) {
        this.filler.set(filler);
    }

    public get id(): string {
        return this.input?.nativeElement.id || this.autoId;
    }

    public get size(): TuiSizeL | TuiSizeS {
        return this.options.size();
    }

    public ngAfterContentInit(): void {
        this.contentReady$.next(true);
    }

    public handleOption(option: T): void {
        this.accessor?.setValue(option);
        this.open.set(false);
    }

    protected get hasLabel(): boolean {
        return Boolean(this.label?.nativeElement?.childNodes.length);
    }

    protected onResize({contentRect}: ResizeObserverEntry): void {
        this.el.style.setProperty('--t-side', tuiPx(contentRect.width));
    }
}
