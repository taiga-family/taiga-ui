import {
    type AfterContentChecked,
    type AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    DestroyRef,
    forwardRef,
    inject,
    Input,
    NgZone,
    type QueryList,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {
    tuiQueryListChanges,
    tuiTakeUntilDestroyed,
    tuiZonefree,
} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocusedIn, tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_NOTHING_FOUND_MESSAGE} from '@taiga-ui/core/tokens';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {map, ReplaySubject, startWith, switchMap, timer} from 'rxjs';

import {
    TUI_DATA_LIST_HOST,
    tuiAsDataListAccessor,
    type TuiDataListAccessor,
} from './data-list.tokens';
import {TuiOptionWithValue} from './option/option.directive';
import {TUI_OPTION_CONTENT, TuiWithOptionContent} from './option/option-content';

export function tuiInjectDataListSize(): TuiSizeL | TuiSizeS {
    const sizes = ['s', 'm', 'l'] as const;
    const size = inject(TUI_DATA_LIST_HOST, {optional: true})?.size;

    return size && sizes.includes(size) ? size : 'l';
}

// TODO: Consider aria-activedescendant for proper accessibility implementation
@Component({
    selector: 'tui-data-list',
    imports: [PolymorpheusOutlet],
    templateUrl: './data-list.template.html',
    styleUrl: './data-list.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataListAccessor(TuiDataListComponent),
        {
            provide: TUI_OPTION_CONTENT,
            useFactory: () =>
                inject(TuiWithOptionContent, {optional: true})?.content ??
                inject(TUI_OPTION_CONTENT, {skipSelf: true, optional: true}),
        },
    ],
    host: {
        role: 'listbox',
        '[attr.data-size]': 'size',
        '(focusin)': 'onFocusIn($event.relatedTarget, $event.currentTarget)',
        '(mousedown.prevent)': '(0)',
        '(wheel.zoneless.passive)': 'handleFocusLossIfNecessary()',
        '(mouseleave)': 'handleFocusLossIfNecessary($event.target)',
        '(keydown.tab)': 'handleFocusLossIfNecessary()',
        '(keydown.shift.tab)': 'handleFocusLossIfNecessary()',
        '(keydown.arrowDown.prevent)': 'onKeyDownArrow($event.target, 1)',
        '(keydown.arrowUp.prevent)': 'onKeyDownArrow($event.target, -1)',
    },
})
export class TuiDataListComponent<T>
    implements TuiDataListAccessor<T>, AfterContentChecked, AfterContentInit
{
    @ContentChildren(forwardRef(() => TuiOptionWithValue), {descendants: true})
    private readonly optionsQuery: QueryList<TuiOptionWithValue<T>> = EMPTY_QUERY;

    private origin?: HTMLElement;
    private readonly ngZone = inject(NgZone);
    private readonly destroyRef = inject(DestroyRef);
    private readonly el = tuiInjectElement();
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly contentReady$ = new ReplaySubject<boolean>(1);

    protected readonly fallback = toSignal(inject(TUI_NOTHING_FOUND_MESSAGE));
    protected readonly empty = signal(false);

    @Input()
    public emptyContent: PolymorpheusContent;

    @Input()
    public size = tuiInjectDataListSize();

    // TODO(v5): use signal `contentChildren`
    public readonly options = toSignal<readonly T[]>(
        this.contentReady$.pipe(
            switchMap(() => tuiQueryListChanges(this.optionsQuery)),
            map((options) => options.map(({value}) => value()).filter(tuiIsPresent)),
            startWith([]),
        ),
        {requireSync: true},
    );

    public onKeyDownArrow(current: HTMLElement, step: number): void {
        const {elements} = this;

        tuiMoveFocus(elements.indexOf(current), elements, step);
    }

    public handleFocusLossIfNecessary(element: Element = this.el): void {
        if (tuiIsFocusedIn(element)) {
            this.origin?.focus({preventScroll: true});
        }
    }

    public ngAfterContentInit(): void {
        this.contentReady$.next(true);
    }

    // TODO: Refactor to :has after Safari support bumped to 15
    public ngAfterContentChecked(): void {
        timer(0)
            .pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.empty.set(!this.elements.length);
                this.cdr.detectChanges();
            });
    }

    public getOptions(includeDisabled = false): readonly T[] {
        return [...this.optionsQuery]
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value())
            .filter(tuiIsPresent);
    }

    protected onFocusIn(relatedTarget: HTMLElement, currentTarget: HTMLElement): void {
        if (!currentTarget.contains(relatedTarget) && !this.origin) {
            this.origin = relatedTarget;
        }
    }

    private get elements(): readonly HTMLElement[] {
        return Array.from(this.el.querySelectorAll('[tuiOption]'));
    }
}
