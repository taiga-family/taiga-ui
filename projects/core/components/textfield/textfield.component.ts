import {AsyncPipe} from '@angular/common';
import {
    type AfterContentChecked,
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChild,
    ContentChildren,
    Directive,
    ElementRef,
    forwardRef,
    inject,
    input,
    type QueryList,
    signal,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {tuiQueryListChanges} from '@taiga-ui/cdk/observables';
import {tuiInjectId} from '@taiga-ui/cdk/services';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement, tuiValue} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {
    tuiAsDataListHost,
    type TuiDataListHost,
    TuiWithOptionContent,
} from '@taiga-ui/core/components/data-list';
import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiDropdownDirective,
    TuiDropdownFixed,
    TuiDropdownOpen,
    tuiDropdownOpen,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {TuiWithItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_AUXILIARY, TUI_CLEAR_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {ReplaySubject, startWith, switchMap, take} from 'rxjs';

import {TuiTextfieldBase} from './textfield.directive';
import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';
import {TUI_TEXTFIELD_ACCESSOR, type TuiTextfieldAccessor} from './textfield-accessor';

// TODO: Remove base class in v5
@Directive()
export class TuiTextfieldBaseComponent<T>
    implements TuiDataListHost<T>, AfterContentChecked
{
    private readonly autoId = tuiInjectId();
    private readonly focusedIn = tuiFocusedIn(tuiInjectElement());
    private readonly contentReady$ = new ReplaySubject<boolean>(1);
    private readonly inputQuery = signal<ElementRef<HTMLInputElement> | undefined>(
        undefined,
    );

    @ViewChild('ghost')
    protected readonly ghost?: ElementRef<HTMLElement>;

    @ContentChild(forwardRef(() => TuiLabel), {read: ElementRef})
    protected readonly label?: ElementRef<HTMLElement>;

    @ContentChildren(TUI_AUXILIARY, {descendants: true})
    protected readonly auxiliaryQuery: QueryList<object> = EMPTY_QUERY;

    // TODO: Added just to avoid breaking anything until we refactor to signal queries
    @ContentChild(forwardRef(() => TuiTextfieldBase), {read: ElementRef})
    // eslint-disable-next-line @typescript-eslint/naming-convention
    protected readonly _input?: ElementRef<HTMLInputElement>;

    protected readonly open = tuiDropdownOpen();
    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly dropdownOpen = inject(TuiDropdownOpen);

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly clear = inject(TUI_CLEAR_WORD);

    protected readonly computedFiller = computed((value = this.value()) => {
        const filler = value + this.filler().slice(value.length);

        return filler.length > value.length ? filler : '';
    });

    protected readonly showFiller = computed<boolean>(
        () =>
            this.focused() &&
            !!this.computedFiller() &&
            (!!this.value() || !this.input?.nativeElement.placeholder),
    );

    @ViewChild('vcr', {read: ViewContainerRef, static: true})
    public readonly vcr?: ViewContainerRef;

    @ContentChild(TUI_TEXTFIELD_ACCESSOR, {descendants: true})
    public readonly accessor?: TuiTextfieldAccessor<T>;

    @ContentChild(NgControl)
    public readonly control?: NgControl;

    @ContentChild(TuiControl)
    public readonly cva?: TuiControl<unknown>;

    // TODO: Replace with signal query when Angular is updated v5
    @ContentChild(forwardRef(() => TuiTextfieldBase), {
        read: ElementRef,
        static: true,
    })
    public readonly input?: ElementRef<HTMLInputElement>;

    public readonly content = input<PolymorpheusContent<TuiContext<T>>>();

    public readonly focused = computed(() => this.open() || this.focusedIn());
    public readonly options = inject(TUI_TEXTFIELD_OPTIONS);
    public readonly el = tuiInjectElement();
    public readonly value = tuiValue(this.inputQuery);

    // TODO: Refactor to signal queries when Angular is updated
    public readonly auxiliaries = toSignal<readonly object[]>(
        this.contentReady$.pipe(
            take(1),
            switchMap(() => tuiQueryListChanges(this.auxiliaryQuery)),
            startWith([]),
        ),
        {requireSync: true},
    );

    public readonly filler = input('');

    public get id(): string {
        return this.input?.nativeElement.id || this.autoId;
    }

    public get size(): TuiSizeL | TuiSizeS {
        return this.options.size();
    }

    public ngAfterContentChecked(): void {
        this.contentReady$.next(true);
        this.inputQuery.set(this._input);
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

    // Click on ::before,::after pseudo-elements ([iconStart] / [iconEnd])
    protected onIconClick(): void {
        this.input?.nativeElement.focus();

        if (
            !this.dropdownOpen.tuiDropdownEnabled() ||
            this.input?.nativeElement.matches('input:read-only,textarea:read-only')
        ) {
            return;
        }

        this.open.update((open) => !open);

        try {
            this.input?.nativeElement.showPicker?.();
        } catch {
            // Empty catch block - silently ignore showPicker errors
        }
    }

    protected onScroll(element: HTMLElement): void {
        if (this.input?.nativeElement === element) {
            this.ghost?.nativeElement.scrollTo({
                left: this.input.nativeElement.scrollLeft,
            });
        }
    }
}

@Component({
    selector: 'tui-textfield:not([multi])',
    imports: [AsyncPipe, PolymorpheusOutlet, TuiButton, WaResizeObserver],
    templateUrl: './textfield.template.html',
    styles: '@import "@taiga-ui/core/styles/components/textfield.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({size: 'xs', appearance: 'icon'}),
        tuiAsDataListHost(TuiTextfieldComponent),
    ],
    hostDirectives: [
        TuiDropdownDirective,
        TuiDropdownFixed,
        TuiTransitioned,
        TuiWithDropdownOpen,
        TuiWithIcons,
        TuiWithItemsHandlers,
        TuiWithOptionContent,
    ],
    host: {
        '[attr.data-size]': 'options.size()',
        '[class._with-label]': 'hasLabel',
        '[class._with-template]': 'content() && control?.value != null',
        '[class._disabled]': 'input?.nativeElement?.disabled',
        '(click.self.prevent)': '0',
        '(pointerdown.self.prevent)': 'onIconClick()',
        '(scroll.capture.zoneless)': 'onScroll($event.target)',
        '(tuiActiveZoneChange)': '!$event && cva?.onTouched()',
    },
})
export class TuiTextfieldComponent<T> extends TuiTextfieldBaseComponent<T> {}
