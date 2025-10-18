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
    isSignal,
    NgZone,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiTakeUntilDestroyed, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocusedIn, tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_NOTHING_FOUND_MESSAGE} from '@taiga-ui/core/tokens';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {timer} from 'rxjs';

import {
    TUI_DATA_LIST_HOST,
    tuiAsDataListAccessor,
    type TuiDataListAccessor,
} from './data-list.tokens';
import {TuiOptionWithValue} from './option/option.directive';
import {TUI_OPTION_CONTENT, TuiWithOptionContent} from './option/option-content';
import {TuiOption} from './option/option-legacy.component';

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
                // TODO(v5): remove when all legacy controls are deleted
                inject(TUI_OPTION_CONTENT, {
                    host: true,
                    skipSelf: true,
                    optional: true,
                }) ??
                inject(TUI_OPTION_CONTENT, {skipSelf: true, optional: true}),
        },
    ],
    host: {
        role: 'listbox',
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
    // TODO(v5): delete
    private readonly legacyOptionsQuery = contentChildren<TuiOption<T>>(
        forwardRef(() => TuiOption),
        {descendants: true},
    );

    private readonly optionsQuery = contentChildren<TuiOptionWithValue<T>>(
        forwardRef(() => TuiOptionWithValue),
        {descendants: true},
    );

    private origin?: HTMLElement;
    private readonly ngZone = inject(NgZone);
    private readonly destroyRef = inject(DestroyRef);
    private readonly el = tuiInjectElement();
    private readonly cdr = inject(ChangeDetectorRef);

    protected readonly fallback = inject(TUI_NOTHING_FOUND_MESSAGE);
    protected readonly empty = signal(false);

    public readonly emptyContent = input<PolymorpheusContent>();

    public readonly size = input(tuiInjectDataListSize());

    public readonly options = computed(() => {
        return [
            ...this.legacyOptionsQuery().map(({value}) => value),
            ...this.optionsQuery().map(({value}) => value()),
        ].filter(tuiIsPresent);
    });

    public onKeyDownArrow(current: HTMLElement, step: number): void {
        const {elements} = this;

        tuiMoveFocus(elements.indexOf(current), elements, step);
    }

    public handleFocusLossIfNecessary(element: Element = this.el): void {
        if (tuiIsFocusedIn(element)) {
            this.origin?.focus({preventScroll: true});
        }
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

    // TODO(v5): delete
    public getOptions(includeDisabled = false): readonly T[] {
        return [
            ...this.legacyOptionsQuery(), // TODO(v5): delete
            ...this.optionsQuery(),
        ]
            .filter(
                ({disabled}) =>
                    includeDisabled || !(isSignal(disabled) ? disabled() : disabled),
            )
            .map(({value}) => (isSignal(value) ? value() : value))
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
