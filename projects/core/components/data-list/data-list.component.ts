import {
    type AfterContentChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    contentChildren,
    DestroyRef,
    forwardRef,
    inject,
    input,
    NgZone,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiTakeUntilDestroyed, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocusedIn, tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCell, tuiCellOptionsProvider} from '@taiga-ui/core/components/cell';
import {TUI_NOTHING_FOUND_MESSAGE, tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {timer} from 'rxjs';

import {TUI_DATA_LIST_HOST, type TuiDataListAccessor} from './data-list.tokens';
import {TUI_OPTION_CONTENT, TuiWithOptionContent} from './option-content.directive';
import {TuiOptionWithValue} from './option-with-value.directive';

export function tuiInjectDataListSize(): TuiSizeL | TuiSizeS {
    const sizes = ['s', 'm', 'l'] as const;
    const size = inject(TUI_DATA_LIST_HOST, {optional: true})?.size;

    return size && sizes.includes(size) ? size : 'l';
}

// TODO: Consider aria-activedescendant for proper accessibility implementation
@Component({
    selector: 'tui-data-list',
    imports: [PolymorpheusOutlet, TuiCell],
    templateUrl: './data-list.template.html',
    styleUrl: './data-list.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiCellOptionsProvider(() => ({size: inject(TuiDataListComponent).size()})),
        tuiAsAuxiliary(TuiDataListComponent),
        {
            provide: TUI_OPTION_CONTENT,
            useFactory: () =>
                inject(TuiWithOptionContent, {optional: true})?.content ??
                inject(TUI_OPTION_CONTENT, {skipSelf: true, optional: true}),
        },
    ],
    host: {
        role: 'listbox',
        '[attr.role]': 'role',
        '[attr.data-size]': 'size()',
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
    implements TuiDataListAccessor<T>, AfterContentChecked
{
    private origin?: HTMLElement;
    private readonly ngZone = inject(NgZone);
    private readonly destroyRef = inject(DestroyRef);
    private readonly el = tuiInjectElement();
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly optionsQuery = contentChildren<TuiOptionWithValue<T>>(
        forwardRef(() => TuiOptionWithValue),
        {descendants: true},
    );

    protected readonly fallback = inject(TUI_NOTHING_FOUND_MESSAGE);
    protected readonly empty = signal(false);

    public readonly emptyContent = input<PolymorpheusContent>();
    public readonly size = input(tuiInjectDataListSize());

    public readonly options = computed(() =>
        this.optionsQuery()
            .map(({value}) => value())
            .filter(tuiIsPresent),
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

    public ngAfterContentChecked(): void {
        // TODO: Refactor to :has after Safari support bumped to 15
        timer(0)
            .pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.empty.set(!this.elements.length);
                this.cdr.detectChanges();
            });
    }

    protected get role(): string | null {
        return this.el.parentElement?.closest('[role="menu"],[role="listbox"]')
            ? null
            : this.el.role;
    }

    protected onFocusIn(relatedTarget: HTMLElement, currentTarget: HTMLElement): void {
        if (!currentTarget.contains(relatedTarget) && !this.origin) {
            this.origin = relatedTarget;
        }
    }

    private get elements(): readonly HTMLElement[] {
        return Array.from(this.el.querySelectorAll('[tuiOption]:not(.t-empty)'));
    }
}
