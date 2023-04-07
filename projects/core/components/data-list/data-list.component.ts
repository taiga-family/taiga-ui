import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    QueryList,
    ViewEncapsulation,
} from '@angular/core';
import {
    EMPTY_QUERY,
    tuiDefaultProp,
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
    TuiTextfieldController,
} from '@taiga-ui/core/directives';
import {TuiDataListAccessor} from '@taiga-ui/core/interfaces';
import {TUI_NOTHING_FOUND_MESSAGE, tuiAsDataListAccessor} from '@taiga-ui/core/tokens';
import {TuiDataListRole} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiOptionComponent} from './option/option.component';

// TODO: Consider aria-activedescendant for proper accessibility implementation
@Component({
    selector: 'tui-data-list',
    templateUrl: './data-list.template.html',
    styleUrls: ['./data-list.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [
        tuiAsDataListAccessor(TuiDataListComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
})
export class TuiDataListComponent<T> implements TuiDataListAccessor<T> {
    @ContentChildren(forwardRef(() => TuiOptionComponent), {descendants: true})
    private readonly options: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    private origin?: HTMLElement;

    @Input()
    @HostBinding('attr.role')
    @tuiDefaultProp()
    role: TuiDataListRole = 'listbox';

    @Input()
    @tuiDefaultProp()
    emptyContent: PolymorpheusContent = '';

    @Input()
    @HostBinding('attr.data-list-size')
    @tuiDefaultProp()
    size = this.controller?.size || 'm';

    constructor(
        @Optional()
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        private readonly controller: TuiTextfieldController | null,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_NOTHING_FOUND_MESSAGE)
        readonly defaultEmptyContent$: Observable<string>,
    ) {}

    @tuiPure
    get empty$(): Observable<boolean> {
        return tuiQueryListChanges(this.options).pipe(map(({length}) => !length));
    }

    @HostListener('focusin', ['$event.relatedTarget', '$event.currentTarget'])
    onFocusIn(relatedTarget: HTMLElement, currentTarget: HTMLElement): void {
        if (!currentTarget.contains(relatedTarget) && !this.origin) {
            this.origin = relatedTarget;
        }
    }

    @HostListener('mousedown.prevent')
    noop(): void {}

    @HostListener('keydown.arrowDown.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowUp.prevent', ['$event.target', '-1'])
    onKeyDownArrow(current: HTMLElement, step: number): void {
        const {elements} = this;

        tuiMoveFocus(elements.indexOf(current), elements, step);
    }

    // TODO: Consider aria-activedescendant for proper accessibility implementation
    @HostListener('wheel.silent.passive')
    @HostListener('mouseleave', ['$event.target'])
    handleFocusLossIfNecessary(element: Element = this.el.nativeElement): void {
        if (this.origin && tuiIsNativeFocusedIn(element)) {
            tuiSetNativeMouseFocused(this.origin, true, true);
        }
    }

    getOptions(includeDisabled: boolean = false): readonly T[] {
        return this.options
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value)
            .filter(tuiIsPresent);
    }

    onFocus({target}: Event, top: boolean): void {
        if (!tuiIsElement(target)) {
            return;
        }

        const {elements} = this;

        tuiMoveFocus(top ? -1 : elements.length, elements, top ? 1 : -1);
        this.handleFocusLossIfNecessary(target);
    }

    private get elements(): readonly HTMLElement[] {
        return Array.from(this.el.nativeElement.querySelectorAll('[tuiOption]'));
    }
}
