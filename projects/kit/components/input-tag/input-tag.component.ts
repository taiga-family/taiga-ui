import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Output,
    QueryList,
    Self,
    TemplateRef,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiMultipleControl,
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    EMPTY_QUERY,
    getActualTarget,
    isNativeFocusedIn,
    preventDefault,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiActiveZoneDirective,
    TuiBooleanHandler,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiScrollService,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {
    HINT_CONTROLLER_PROVIDER,
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_DATA_LIST_HOST,
    TUI_HINT_WATCHED_CONTROLLER,
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTIFELD_WATCHED_CONTROLLER,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHintControllerDirective,
    TuiHorizontalDirection,
    TuiHostedDropdownComponent,
    TuiModeDirective,
    TuiScrollbarComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldController,
} from '@taiga-ui/core';
import {ALLOWED_SPACE_REGEXP} from '@taiga-ui/kit/components/tag';
import {TuiStatus} from '@taiga-ui/kit/enums';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_TAG_STATUS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {merge, Subject} from 'rxjs';
import {filter, map, mapTo, switchMap, takeUntil} from 'rxjs/operators';

const EVENT_Y_TO_X_COEFFICENT = 3;

@Component({
    selector: 'tui-input-tag',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './input-tag.template.html',
    styleUrls: ['./input-tag.style.less'],
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputTagComponent),
        },
        {
            provide: TUI_DATA_LIST_HOST,
            useExisting: forwardRef(() => TuiInputTagComponent),
        },
        FIXED_DROPDOWN_CONTROLLER_PROVIDER,
        TEXTFIELD_CONTROLLER_PROVIDER,
        HINT_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputTagComponent
    extends AbstractTuiMultipleControl<string>
    implements TuiFocusableElementAccessor, TuiDataListHost<string> {
    @Input()
    @tuiDefaultProp()
    allowSpaces = true;

    @Input()
    @tuiDefaultProp()
    icon = '';

    @Input()
    @tuiDefaultProp()
    iconAlign: TuiHorizontalDirection = 'right';

    @Input()
    @tuiDefaultProp()
    search = '';

    @Input()
    @tuiDefaultProp()
    editable = true;

    @Input()
    @tuiDefaultProp()
    tagValidator: TuiBooleanHandler<string> = ALWAYS_TRUE_HANDLER;

    @Input()
    @HostBinding('class._expandable')
    @tuiDefaultProp()
    expandable = true;

    @Input()
    @tuiDefaultProp()
    inputHidden = false;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<string> = ALWAYS_FALSE_HANDLER;

    @Input('pseudoFocused')
    set pseudoFocusedSetter(value: boolean | null) {
        if (!value && !this.focused) {
            this.scrollToStart$.next();
        }

        this.pseudoFocused = value;
    }

    @Output()
    readonly searchChange = new EventEmitter<string>();

    open = false;

    @ViewChild(TuiScrollbarComponent)
    set scrollerSetter(scroller: TuiScrollbarComponent | null) {
        this.initScrollerSubscrition(scroller);
    }

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist?: TemplateRef<TuiContextWithImplicit<TuiActiveZoneDirective>>;

    @ViewChild('errorIcon')
    readonly errorIconTemplate?: TemplateRef<{}>;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly dropdown?: TuiHostedDropdownComponent;

    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLInputElement>;

    @ViewChild('tagsContainer')
    private readonly tagsContainer?: ElementRef<HTMLElement>;

    @ViewChildren('tag', {read: ElementRef})
    private readonly tags: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly scrollToStart$ = new Subject<void>();
    private readonly scrollToEnd$ = new Subject<void>();

    @ViewChild('cleaner', {read: ElementRef})
    private readonly cleanerSvg?: ElementRef<HTMLElement>;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiScrollService) private tuiScrollService: TuiScrollService,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_TEXTFIELD_APPEARANCE) readonly appearance: string,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly modeDirective: TuiModeDirective | null,
        @Inject(TUI_TAG_STATUS) private readonly tagStatus: TuiStatus,
        @Inject(TUI_HINT_WATCHED_CONTROLLER)
        readonly hintController: TuiHintControllerDirective,
        @Inject(TUI_TEXTIFELD_WATCHED_CONTROLLER)
        readonly controller: TuiTextfieldController,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return !this.focusableElement || this.computedDisabled
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return (
            isNativeFocusedIn(this.elementRef.nativeElement) ||
            (!!this.dropdown && this.dropdown.focused)
        );
    }

    @HostBinding('attr.data-tui-host-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    @HostBinding('class._label-outside')
    get labelOutside(): boolean {
        return this.controller.labelOutside;
    }

    get hasCleaner(): boolean {
        return (
            this.controller.cleaner && this.hasValue && !this.disabled && !this.readOnly
        );
    }

    get hasNativeValue(): boolean {
        return !!this.search;
    }

    get hasValue(): boolean {
        return !!this.value.length || this.hasNativeValue;
    }

    get hasPlaceholder(): boolean {
        return !this.labelOutside || (!this.hasValue && !this.hasExampleText);
    }

    get placeholderRaised(): boolean {
        return (
            !this.labelOutside &&
            ((this.computedFocused && !this.readOnly) || this.hasValue)
        );
    }

    get hasExampleText(): boolean {
        return (
            !!this.controller.exampleText &&
            this.computedFocused &&
            !this.hasValue &&
            !this.readOnly
        );
    }

    get hasTooltip(): boolean {
        return !!this.hintController.content && !this.disabled;
    }

    get iconAlignLeft(): boolean {
        return !!this.icon && this.iconAlign === 'left';
    }

    get iconAlignRight(): boolean {
        return !!this.icon && this.iconAlign === 'right';
    }

    get hasRightIcons(): boolean {
        return this.hasCleaner || this.hasTooltip || this.iconAlignRight;
    }

    get status(): TuiStatus {
        return this.modeDirective && this.modeDirective.mode
            ? TuiStatus.Default
            : this.tagStatus;
    }

    getLeftContent(tag: string): PolymorpheusContent | null {
        return !this.tagValidator(tag) && this.errorIconTemplate
            ? this.errorIconTemplate
            : null;
    }

    onCleanerClick() {
        this.updateSearch('');
        this.clear();
        this.focusInput();
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);

        if (active) {
            return;
        }

        this.open = false;
        this.addTag();

        if (!this.pseudoFocused) {
            this.scrollToStart$.next();
        }
    }

    onMouseDown(event: MouseEvent) {
        const actualTarget = getActualTarget(event);

        if (
            !this.focusableElement ||
            actualTarget === this.focusableElement.nativeElement ||
            !(event.target instanceof Element) ||
            (this.cleanerSvg && this.cleanerSvg.nativeElement.contains(event.target)) ||
            (this.tagsContainer &&
                actualTarget !== this.tagsContainer.nativeElement &&
                this.tagsContainer.nativeElement.contains(actualTarget))
        ) {
            return;
        }

        event.preventDefault();
        this.focusInput();
    }

    onFieldKeyDownBackspace(event: KeyboardEvent) {
        if (!this.labelOutside && !this.hasNativeValue && this.value.length) {
            this.deleteLastEnabledItem();
        } else {
            this.onFieldKeyDownArrowLeft(event);
        }
    }

    onFieldKeyDownArrowLeft(event: KeyboardEvent) {
        if (!this.labelOutside || this.hasNativeValue || !this.value.length) {
            return;
        }

        event.preventDefault();
        setNativeFocused(this.tags.last.nativeElement);
    }

    onFieldKeyDownEnter() {
        this.addTag();
        this.scrollToEnd$.next();
    }

    onTagKeyDownArrowLeft(currentIndex: number) {
        if (currentIndex <= 0) {
            return;
        }

        const tag = this.tags.find((_item, index) => index === currentIndex - 1);

        if (tag) {
            setNativeFocused(tag.nativeElement);
        }
    }

    onTagKeyDownArrowRight(currentIndex: number) {
        if (currentIndex === this.value.length - 1) {
            this.focusInput();

            return;
        }

        const tag = this.tags.find((_item, index) => index === currentIndex + 1);

        if (tag) {
            setNativeFocused(tag.nativeElement);
        }
    }

    onTagEdited(value: string, editedTag: string) {
        this.focusInput();
        this.updateValue(
            this.value
                .map(tag =>
                    tag !== editedTag
                        ? tag
                        : value
                              .split(',')
                              .map(tag => tag.trim())
                              .filter(Boolean),
                )
                .reduce<string[]>(
                    (result, item: string | string[]) => result.concat(item),
                    [],
                ),
        );
    }

    handleOption(item: string) {
        this.focusInput();
        this.updateSearch('');
        this.updateValue(this.value.concat(item));
        this.open = false;
        this.scrollToEnd$.next();
    }

    onInput(value: string) {
        const array = this.allowSpaces
            ? value.split(',')
            : value.split(ALLOWED_SPACE_REGEXP);
        const tags = array
            .map(item => item.trim())
            .filter((item, index, {length}) => item.length > 0 && index !== length - 1);
        const validated = tags.filter(tag => !this.disabledItemHandler(tag));

        if (array.length > 1) {
            this.updateSearch(array[array.length - 1].trim());
            this.updateValue([...this.value, ...validated]);
        } else {
            this.updateSearch(value);
        }

        this.open = this.hasNativeValue;
    }

    onHoveredChange(hovered: boolean) {
        this.updateHovered(hovered);
    }

    setDisabledState() {
        super.setDisabledState();
        this.open = false;
    }

    private initScrollerSubscrition(scroller: TuiScrollbarComponent | null) {
        if (!scroller || !scroller.browserScrollRef) {
            return;
        }

        const {nativeElement} = scroller.browserScrollRef;

        const wheel$ = typedFromEvent(nativeElement, 'wheel', {passive: false}).pipe(
            filter(event => event.deltaX === 0 && this.shouldScroll(nativeElement)),
            preventDefault(),
            map(({deltaY}) =>
                Math.max(nativeElement.scrollLeft + deltaY * EVENT_Y_TO_X_COEFFICENT, 0),
            ),
        );
        const start$ = this.scrollToStart$.pipe(mapTo(0));
        const end$ = this.scrollToEnd$.pipe(map(() => nativeElement.scrollWidth));

        merge(wheel$, start$, end$)
            .pipe(
                switchMap(left => this.tuiScrollService.scroll$(nativeElement, 0, left)),
                takeUntil(this.destroy$),
            )
            .subscribe();
    }

    protected updateValue(value: Array<string>) {
        const seen = new Set();

        super.updateValue(
            value
                .reverse()
                .filter(item => !!item && !seen.has(item) && seen.add(item))
                .reverse(),
        );
    }

    private updateSearch(value: string) {
        if (this.focusableElement) {
            this.focusableElement.nativeElement.value = value;
        }

        this.search = value;
        this.searchChange.emit(value);
    }

    private shouldScroll({scrollWidth, offsetWidth}: HTMLElement): boolean {
        return scrollWidth > offsetWidth;
    }

    private addTag() {
        const inputValue = this.search.trim();

        if (!inputValue || this.disabledItemHandler(inputValue)) {
            return;
        }

        this.updateSearch('');
        this.updateValue(this.value.concat(inputValue));
    }

    private deleteLastEnabledItem() {
        for (let index = this.value.length - 1; index >= 0; index--) {
            if (!this.disabledItemHandler(this.value[index])) {
                this.updateValue([
                    ...this.value.slice(0, index),
                    ...this.value.slice(index + 1, this.value.length),
                ]);

                break;
            }
        }
    }

    private focusInput(preventScroll: boolean = false) {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }
}
