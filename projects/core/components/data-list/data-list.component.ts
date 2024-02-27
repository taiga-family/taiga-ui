import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    QueryList,
    ViewEncapsulation,
} from '@angular/core';
import {
    EMPTY_QUERY,
    tuiIsElement,
    tuiIsNativeFocusedIn,
    tuiIsPresent,
    tuiMoveFocus,
    tuiPure,
    tuiQueryListChanges,
    tuiSetNativeMouseFocused,
} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
} from '@taiga-ui/core/directives';
import {TuiDataListAccessor} from '@taiga-ui/core/interfaces';
import {TUI_NOTHING_FOUND_MESSAGE, tuiAsDataListAccessor} from '@taiga-ui/core/tokens';
import {TuiDataListRole} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {map, Observable} from 'rxjs';

import {TuiOptionComponent} from './option/option.component';

// TODO: Consider aria-activedescendant for proper accessibility implementation
@Component({
    selector: 'tui-data-list',
    templateUrl: './data-list.template.html',
    styleUrls: ['./data-list.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataListAccessor(TuiDataListComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
})
export class TuiDataListComponent<T> implements TuiDataListAccessor<T> {
    @ContentChildren(forwardRef(() => TuiOptionComponent), {descendants: true})
    private readonly options: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    private origin?: HTMLElement;
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER, {
        optional: true,
    });

    @Input()
    @HostBinding('attr.role')
    public role: TuiDataListRole = 'listbox';

    @Input()
    public emptyContent: PolymorpheusContent;

    @Input()
    @HostBinding('attr.data-list-size')
    public size = this.controller?.size || 'm';

    protected readonly defaultEmptyContent$ = inject(TUI_NOTHING_FOUND_MESSAGE);

    @tuiPure
    protected get empty$(): Observable<boolean> {
        return tuiQueryListChanges(this.options).pipe(map(({length}) => !length));
    }

    @HostListener('focusin', ['$event.relatedTarget', '$event.currentTarget'])
    protected onFocusIn(relatedTarget: HTMLElement, currentTarget: HTMLElement): void {
        if (!currentTarget.contains(relatedTarget) && !this.origin) {
            this.origin = relatedTarget;
        }
    }

    @HostListener('mousedown.prevent')
    protected noop(): void {}

    @HostListener('keydown.arrowDown.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowUp.prevent', ['$event.target', '-1'])
    public onKeyDownArrow(current: HTMLElement, step: number): void {
        const {elements} = this;

        tuiMoveFocus(elements.indexOf(current), elements, step);
    }

    // TODO: Consider aria-activedescendant for proper accessibility implementation
    @HostListener('wheel.silent.passive')
    @HostListener('mouseleave', ['$event.target'])
    public handleFocusLossIfNecessary(element: Element = this.el): void {
        if (this.origin && tuiIsNativeFocusedIn(element)) {
            tuiSetNativeMouseFocused(this.origin, true, true);
        }
    }

    public getOptions(includeDisabled = false): readonly T[] {
        return this.options
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value)
            .filter(tuiIsPresent);
    }

    public onFocus({target}: Event, top: boolean): void {
        if (!tuiIsElement(target)) {
            return;
        }

        const {elements} = this;

        tuiMoveFocus(top ? -1 : elements.length, elements, top ? 1 : -1);
        this.handleFocusLossIfNecessary(target);
    }

    private get elements(): readonly HTMLElement[] {
        return Array.from(this.el.querySelectorAll('[tuiOption]'));
    }
}
