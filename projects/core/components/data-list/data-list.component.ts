import {NgIf} from '@angular/common';
import type {AfterContentChecked, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    DestroyRef,
    forwardRef,
    inject,
    Input,
    NgZone,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiTakeUntilDestroyed, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsNativeFocusedIn, tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_NOTHING_FOUND_MESSAGE} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {timer} from 'rxjs';

import type {TuiDataListAccessor} from './data-list.tokens';
import {TUI_DATA_LIST_HOST, tuiAsDataListAccessor} from './data-list.tokens';
import {TuiOption} from './option.component';

export function tuiInjectDataListSize(): TuiSizeL | TuiSizeS {
    const sizes = ['s', 'm', 'l'] as const;
    const size = inject(TUI_DATA_LIST_HOST, {optional: true})?.size;

    return size && sizes.includes(size) ? size : 'l';
}

// TODO: Consider aria-activedescendant for proper accessibility implementation
@Component({
    standalone: true,
    selector: 'tui-data-list',
    imports: [NgIf, PolymorpheusOutlet],
    templateUrl: './data-list.template.html',
    styleUrls: ['./data-list.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListComponent)],
    host: {
        role: 'listbox',
        '[attr.data-size]': 'size',
        '(focusin)': 'onFocusIn($event.relatedTarget, $event.currentTarget)',
        '(mousedown.prevent)': '(0)',
        '(wheel.silent.passive)': 'handleFocusLossIfNecessary()',
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
    @ContentChildren(forwardRef(() => TuiOption), {descendants: true})
    private readonly options: QueryList<TuiOption<T>> = EMPTY_QUERY;

    private origin?: HTMLElement;
    private readonly ngZone = inject(NgZone);
    private readonly destroyRef = inject(DestroyRef);
    private readonly el = tuiInjectElement();
    private readonly cdr = inject(ChangeDetectorRef);
    protected readonly fallback = toSignal(inject(TUI_NOTHING_FOUND_MESSAGE));
    protected readonly empty = signal(false);

    @Input()
    public emptyContent: PolymorpheusContent;

    @Input()
    public size = tuiInjectDataListSize();

    public onKeyDownArrow(current: HTMLElement, step: number): void {
        const {elements} = this;

        tuiMoveFocus(elements.indexOf(current), elements, step);
    }

    public handleFocusLossIfNecessary(element: Element = this.el): void {
        if (tuiIsNativeFocusedIn(element)) {
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

    public getOptions(includeDisabled = false): readonly T[] {
        return this.options
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value)
            .filter(tuiIsPresent);
    }

    protected onFocusIn(relatedTarget: HTMLElement, currentTarget: HTMLElement): void {
        if (!currentTarget.contains(relatedTarget) && !this.origin) {
            this.origin = relatedTarget;
        }
    }

    private get elements(): readonly HTMLElement[] {
        return Array.from(this.el.querySelectorAll('a,button,input'));
    }
}
